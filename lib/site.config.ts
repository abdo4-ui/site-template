export const siteConfig = {
  businessName: "Sample Clinic",
  tagline: "Care you can count on",
  colors: {
    primary: "#1565c0",
    accent: "#e3f2fd",
  },
  contact: {
    email: "hello@sampleclinic.example",
    phone: "+00 000 000 001",
    address: "456 Example Avenue, Sample City",
  },
  hours: [
    { day: "Monday to Friday", time: "08:00 to 18:00" },
    { day: "Saturday", time: "09:00 to 13:00" },
    { day: "Sunday", time: "Closed" },
  ],
  services: [
    { name: "Checkup", price: "40", description: "General health review." },
    { name: "Consultation", price: "30", description: "Short follow-up visit." },
  ],
  images: ["/gallery/1.svg", "/gallery/2.svg", "/gallery/3.svg"],
  sections: {
    services: true,
    hours: true,
    gallery: false,
    contact: true,
  },
};
