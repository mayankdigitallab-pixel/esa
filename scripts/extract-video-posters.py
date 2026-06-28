"""
Extract a clear face frame from each video review mp4 and save as JPG poster.

Strategy: sample frames between 2s and 6s into the video. Pick the one with
the largest detected face (via OpenCV's bundled Haar cascade). Fall back to
the 3-second frame if no face is found.

Run from project root:
    python scripts/extract-video-posters.py
"""
from __future__ import annotations

import sys
from pathlib import Path

import cv2

VIDEOS_DIR = Path("public/videos")

CASCADE_PATH = Path(cv2.data.haarcascades) / "haarcascade_frontalface_default.xml"


def extract_best_face_frame(video_path: Path, out_path: Path) -> tuple[bool, str]:
    cap = cv2.VideoCapture(str(video_path))
    if not cap.isOpened():
        return False, f"cannot open {video_path.name}"

    fps = cap.get(cv2.CAP_PROP_FPS) or 30.0
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = total_frames / fps if fps > 0 else 0

    detector = cv2.CascadeClassifier(str(CASCADE_PATH))
    sample_seconds = [t for t in (1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 7.0, 8.0) if t < duration - 0.2]
    if not sample_seconds:
        sample_seconds = [min(0.5, max(0.0, duration / 2))]

    best_frame = None
    best_face_area = 0
    fallback_frame = None

    for t in sample_seconds:
        cap.set(cv2.CAP_PROP_POS_MSEC, t * 1000)
        ok, frame = cap.read()
        if not ok or frame is None:
            continue
        if fallback_frame is None:
            fallback_frame = frame

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = detector.detectMultiScale(gray, scaleFactor=1.15, minNeighbors=4, minSize=(60, 60))
        if len(faces) == 0:
            continue
        largest = max(faces, key=lambda f: f[2] * f[3])
        area = largest[2] * largest[3]
        if area > best_face_area:
            best_face_area = area
            best_frame = frame

    cap.release()

    chosen = best_frame if best_frame is not None else fallback_frame
    if chosen is None:
        return False, f"no frames extracted from {video_path.name}"

    out_path.parent.mkdir(parents=True, exist_ok=True)
    cv2.imwrite(str(out_path), chosen, [int(cv2.IMWRITE_JPEG_QUALITY), 85])

    detected = "face frame" if best_frame is not None else "fallback frame"
    return True, f"{video_path.name} -> {out_path.name} ({detected})"


def main() -> int:
    if not VIDEOS_DIR.exists():
        print(f"videos dir not found: {VIDEOS_DIR}", file=sys.stderr)
        return 1
    if not CASCADE_PATH.exists():
        print(f"haar cascade not found: {CASCADE_PATH}", file=sys.stderr)
        return 1

    failures = 0
    for video in sorted(VIDEOS_DIR.glob("*.mp4")):
        poster = video.with_name(video.stem + "-poster.jpg")
        ok, msg = extract_best_face_frame(video, poster)
        print(("OK   " if ok else "FAIL "), msg)
        if not ok:
            failures += 1

    return 0 if failures == 0 else 2


if __name__ == "__main__":
    raise SystemExit(main())
