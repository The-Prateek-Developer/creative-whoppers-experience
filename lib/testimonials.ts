export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const CLIENT_ENDORSEMENTS: Testimonial[] = [
  {
    quote:
      "Delivered outstanding multimedia coverage for the Cycling4Life event in New Delhi. From capturing powerful visuals of over 500 cyclists to producing high-quality content that reflected our message of a greener future, their work was seamless, creative, and impactful. A valuable partner in bringing our vision to life.",
    author: "Hema Singh Rance",
    role: "Marketing & Communications Expert (Team Lead), European Union Policy & Outreach Partnerships (EUPOP)",
  },
  {
    quote:
      "Selecting Creative Whoppers for our Erasmus event in 2023 was a fantastic choice. They managed everything with ease and creativity, leaving our guests impressed. Thank you, Creative Whoppers for putting together a memorable and smooth process that went beyond what we expected!",
    author: "Sanjeev Roy",
    role: "Expert in Higher Education Policy, International Partnership & Outreach — EU, UK & India",
  },
  {
    quote:
      "Working with Creative Whoppers on the Chambal Literary Festival was a great experience. Their professionalism and attention to detail made the entire event run smoothly from start to finish. Truly appreciate their effort and expertise!",
    author: "Dr. Shah Alam Rana",
    role: "Founder, Chambal Foundation & Chambal Museum",
  },
];

export function testimonialForKey(key: string): Testimonial {
  let hash = 0;
  for (let i = 0; i < key.length; i += 1) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  return CLIENT_ENDORSEMENTS[hash % CLIENT_ENDORSEMENTS.length];
}
