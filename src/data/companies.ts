export interface Company {
  name: string;
  url: string;
  short?: string; // optional short display name
}

export const companies: Company[] = [
  {
    name: "DEVNOZ",
    url: "https://devnoz.com",
    short: "DEVNOZ"
  },
  {
    name: "Good Advice",
    url: "#",
    short: "GOOD ADVICE"
  },
  {
    name: "Cyber Reconnaissance & Combat Center",
    url: "#",
    short: "CR&CC"
  },
  {
    name: "Bahria University",
    url: "https://bahria.edu.pk",
    short: "BAHRIA UNIV."
  }
];
