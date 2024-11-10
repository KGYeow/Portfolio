export interface menu {
  name?: string;
  thumbnail?: string;
  description?: string;
  techStack?: string[];
  link?: string;
}

const projects: menu[] = [
  {
    name: "Intelligent Document Search & Classification",
    thumbnail: "/images/products/s4.jpg",
    description: `A web application that allows users to search for documents using regular expression.
                  The system uses machine learning models to classify documents into categories,
                  making it easier for users to find relevant information.`,
    techStack: ["HTML", "SCSS", "JavaScript", "C#", "T-SQL", "Nuxt 3 JS", "NLP", "ASP.NET Core Web API", "Machine Learning", "Logistic Regression"],
    link: "",
  },

  // Testing Data
  {
    name: "Personal Portfolio Website",
    thumbnail: "/images/products/s5.jpg",
    description: `A portfolio website to showcase my projects and skills, built with Nuxt.js and SCSS for styling.`,
    techStack: ["HTML", "SCSS", "JavaScript", "Nuxt.js"],
    link: "https://myportfolio.com",
  },
  {
    name: "Real-time Chat Application",
    thumbnail: "/images/products/s7.jpg",
    description: `A real-time chat application that supports multiple users and rooms, developed using Node.js and WebSocket.`,
    techStack: ["HTML", "JavaScript", "Node.js", "WebSocket", "CSS"],
    link: "https://mychatapp.com",
  },
  {
    name: "E-commerce Platform",
    thumbnail: "/images/products/s11.jpg",
    description: `An e-commerce platform featuring a product catalog, shopping cart, and payment integration.`,
    techStack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    link: "https://myecommerce.com",
  },
]

export default projects