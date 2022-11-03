import deloitte from "../../images/deloitte.png";
import sony from "../../images/sony.png";
import accenture from "../../images/accenture.png";

export const CompanyData = [
  {
    name: "Sony Electronics",
    imageURL: sony,
    about:
      "We are a global organization and seek individuals from a variety of generations, socioeconomic and educational backgrounds, and sexual orientations. Our employees are courageous, unique and diverse. They’re comfortable expressing their thoughts and opinions freely, and possess an unwavering passion and pride to deliver exceptional experiences to our customers.",
    hasOneToOne: true,
    hasInfoSession: true,
    isRecruiting: true,
    links: [{ text: "sonyjobs.com", url: "https://www.sonyjobs.com/" }],
    roles: [
      "User Experience (UX) Designer",
      "User Experience (UX) Researcher",
      "User Experience (UX) Engineer",
      "Accessibility Engineer",
      "UI/UX Interns",
    ],
  },
  {
    name: "Accenture Song",
    imageURL: accenture,

    about:
      "We are a bold and generous group of creatives, designers, consultants, technologists, strategists and engineers working together to serve the modern customer and their ever-evolving needs. ",
    hasOneToOne: true,
    hasInfoSession: true,
    isRecruiting: false,
    links: [
      {
        text: "accenture.com/us-en/careers",
        url: "https://www.accenture.com/us-en/careers",
      },
    ],
    roles: ["Not Recruiting"],
  },
  {
    name: "Deloitte",
    imageURL: deloitte,

    about:
      'Deloitte is a $60-billion dollar professional services firm that constitutes one of the "Big Four" consulting and audit firms. In consulting, we have numerous Design Studio offerings, including the Dimension 10 Studio and the Deloitte Digital suite of studios (based in LA, SF, NY, Chicago, and Austin, and a dozen other cities). Our designers have a variety of backgrounds and we staff hundreds of end-to-end UXers, visual creatives, content designers, conversation designers, and UX researchers to help deliver innovative technology solutions for Fortune-500 clients in every industry (including technology, telecom, financial services, life sciences, hospitality, and energy). We build mobile apps, data dashboards, in-auto experiences, AR/VR solutions, industrial digital twins, and next generation conversational systems. Come join us on the bleeding edge of design for industry!',
    hasOneToOne: false,
    hasInfoSession: true,
    isRecruiting: false,
    links: [
      {
        text: "deloitte.com/us/en/careers/students",
        url: "https://www2.deloitte.com/us/en/careers/students.html ",
      },
      {
        text: "Deloitte Consulting Applied AI Consultant",
        url: "https://apply.deloitte.com/careers/JobDetail/Deloitte-Consulting-Applied-AI-Consultant/116700",
      },
      {
        text: "Deloitte Consulting Applied AI Analyst",
        url: "https://apply.deloitte.com/careers/JobDetail/Deloitte-Consulting-Applied-AI-Analyst/116693",
      },
    ],
    roles: [
      "User Experience (UX) Designer",
      "User Experience (UX) Researcher",
      "User Experience (UX) Engineer",
      "Visual/Brand Designer",
      "Product Designer",
      "Web Developer",
    ],
  },
];
