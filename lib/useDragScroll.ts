"use client";

import { useEffect, type RefObject } from "react";

/**
 * Enables click-and-drag horizontal scrolling on a container that already
 * scrolls horizontally (overflow-x-auto). Mobile touch swipe still works
 * via the browser's native handling — this hook only adds the missing
 * desktop mouse behavior.
 *
 * Also suppresses the click event that would otherwise fire on the card
 * the user happened to be over when releasing the drag.
 */
export function useDragScroll(
  ref: RefObject<HTMLElement | null>,
  dragThresholdPx = 6,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let moved = false;
    const prevCursor = el.style.cursor;

    el.style.cursor = "grab";

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      isDown = true;
      moved = false;
      startX = e.pageX;
      scrollStart = el.scrollLeft;
      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      if (!moved && Math.abs(dx) > dragThresholdPx) moved = true;
      if (moved) el.scrollLeft = scrollStart - dx;
    };

    const onPointerUp = () => {
      if (!isDown) return;
      isDown = false;
      el.style.cursor = "grab";
      el.style.userSelect = "";
      if (moved) {
        const cancelClick = (ev: Event) => {
          ev.preventDefault();
          ev.stopPropagation();
          window.removeEventListener("click", cancelClick, true);
        };
        window.addEventListener("click", cancelClick, true);
      }
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    return () => {
      el.style.cursor = prevCursor;
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [ref, dragThresholdPx]);
}
