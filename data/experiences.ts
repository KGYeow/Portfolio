export interface menu {
  job?: string;
  company?: string;
  timeStart?: string;
  timeEnd?: string;
  description?: string;
  skills?: string[];
}

const jobExperiences: menu[] = [
  {
    job: "Software Engineer (Web Development) Intern",
    company: "Sophic Automation Sdn Bhd.",
    timeStart: "Mar 2023",
    timeEnd: "Sep 2023",
    description: `Developed a full-stack document management web system template using
                  Nuxt.js for the front end, ASP.NET Core Web API (C#) for the back end, and T-SQL for the database.
                  Created comprehensive user manual documentation to facilitate smooth onboarding and system usage.
                  Collaborated closely with team members to ensure timely and accurate implementation of system designs,
                  contributing to a successful development phase. Assisted senior in troubleshooting, debugging,
                  and refining web development tasks, gaining valuable insights into best practices and efficient workflows`,
    skills: ["HTML", "SCSS", "JavaScript", "C#", "T-SQL", "Nuxt 2 JS", "ASP.NET Core Web API", "SSMS"]
  },

  // Testing Data
  // {
  //   job: "Data Analyst Intern",
  //   company: "Data Insights Co.",
  //   timeStart: "Jan 2022",
  //   timeEnd: "Jun 2022",
  //   description: `Assisted in data processing and visualization for monthly reports
  //                 using Python and Tableau. Conducted trend analysis for customer behavior
  //                 insights, helping to drive data-informed business decisions.`,
  //   skills: ["Python", "Tableau", "SQL", "Data Analysis", "Data Visualization"]
  // },
  // {
  //   job: "Mobile App Developer",
  //   company: "Appify Tech",
  //   timeStart: "Jul 2021",
  //   timeEnd: "Dec 2021",
  //   description: `Developed features for a cross-platform mobile application using
  //                 React Native, integrated with RESTful APIs. Enhanced user engagement
  //                 by implementing push notifications and user feedback systems.`,
  //   skills: ["React Native", "JavaScript", "REST API", "Push Notifications", "UI/UX Design"]
  // },
  // {
  //   job: "Mobile App Developer",
  //   company: "Appify Tech",
  //   timeStart: "Jul 2021",
  //   timeEnd: "Dec 2021",
  //   description: `Developed features for a cross-platform mobile application using
  //                 React Native, integrated with RESTful APIs. Enhanced user engagement
  //                 by implementing push notifications and user feedback systems.`,
  //   skills: ["React Native", "JavaScript", "REST API", "Push Notifications", "UI/UX Design"]
  // },
]

export default jobExperiences