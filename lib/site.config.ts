export const siteConfig = {
  businessName: "Sample Salon",
  tagline: "Hair and beauty for everyone",
    sections: {
    services: true,
    hours: true,
    contact: true,
  },
  contact: {
    email: "hello@samplesalon.example",
    phone: "+00 000 000 000",
    address: "123 Example Street, Sample City",
  },
  hours: [
    { day: "Monday to Friday", time: "09:00 to 19:00" },
    { day: "Saturday", time: "09:00 to 17:00" },
    { day: "Sunday", time: "Closed" },
  ],
  services: [
    { name: "Haircut", price: "25", description: "Wash, cut, and style." },
    { name: "Color", price: "60", description: "Full color with consultation." },
    { name: "Beard trim", price: "15", description: "Shape and line-up." },
  ],
};