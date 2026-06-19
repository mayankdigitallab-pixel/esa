export const siteConfig = {
  name: "Excellent Students' Academy",
  shortName: "ESA",
  tagline: "Where ambition meets disciplined coaching",
  domain: "https://www.theesa.in",
  phone: "+91 9458012793",
  phoneDisplay: "+91 94580 12793",
  whatsapp: "+918750663995",
  whatsappDisplay: "+91 87506 63995",
  email: "info@theesa.in",
  address: {
    line1: "C7/72, 2nd Floor",
    line2: "Sector 7, Rohini",
    city: "New Delhi",
    pin: "110085",
    country: "India",
  },
  hours: {
    weekdays: "10:00 AM - 8:30 PM",
    saturday: "10:00 AM - 8:30 PM",
    sunday: "Closed",
  },
  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8089!2d77.119802!3d28.706135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzIyLjEiTiA3N8KwMDcnMjAuNiJF!5e0!3m2!1sen!2sin!4v1700000000000",
} as const;

export const whatsappLink = (text: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
