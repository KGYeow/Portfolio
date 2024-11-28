export interface menu {
  name?: string;
  thumbnail?: string;
  description?: string;
  techStack?: string[];
  link?: string;
}

const projects: menu[] = [
  {
    name: "Personal Portfolio Website",
    thumbnail: "images/projects/portfolio.png",
    description: `A portfolio website to showcase my projects and experiences, built with Nuxt 3 JS and SCSS for styling.`,
    techStack: ["HTML", "SCSS", "JavaScript", "TypeScript", "Nuxt 3 JS"],
    link: "https://github.com/KGYeow/Portfolio",
  },
  {
    name: "Intelligent Document Search & Classification (IntelliDoc)",
    thumbnail: "images/projects/intellidoc.png",
    description: `A web application that allows users to search for documents using regular expression.
                  The system uses machine learning models to classify documents into categories,
                  making it easier for users to find relevant information.`,
    techStack: ["HTML", "SCSS", "JavaScript", "C#", "T-SQL", "Nuxt 3 JS", "NLP", "TF-IDF", "ASP.NET Core Web API", "Machine Learning", "Logistic Regression"],
    link: "https://github.com/KGYeow/IntelliDoc",
  },
  {
    name: "Law Firm Management System",
    thumbnail: "images/projects/law_firm_management_system.png",
    description: `A group project for a university course built to streamline case management for law firms, centralizing client information, documents, and tasks.
                  It includes alerts for court dates and deadlines to enhance productivity and reduce missed deadlines.`,
    techStack: ["HTML", "SCSS", "JavaScript", "C#", "T-SQL", "Nuxt 3 JS", "ASP.NET Core Web API"],
    link: "https://github.com/KGYeow/Law_Firm_Management_System",
  },

  // Testing Data
  // {
  //   name: "Real-time Chat Application",
  //   thumbnail: "/images/products/s7.jpg",
  //   description: `A real-time chat application that supports multiple users and rooms, developed using Node.js and WebSocket.`,
  //   techStack: ["HTML", "JavaScript", "Node.js", "WebSocket", "CSS"],
  //   link: "https://mychatapp.com",
  // },
  // {
  //   name: "E-commerce Platform",
  //   thumbnail: "/images/products/s11.jpg",
  //   description: `An e-commerce platform featuring a product catalog, shopping cart, and payment integration.`,
  //   techStack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  //   link: "https://myecommerce.com",
  // },
]

export default projects