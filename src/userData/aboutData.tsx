import { Github, Linkedin, Mail } from "lucide-react";

export const myData = [
  {
    location: "Pune, India",
    experience: "3+ years",
    education: "B.E. in Computer Science",
    avilibility: "Available for Projects",
    discription:
      "Passionate developer with 3+ years of experience building scalable web applications",
    about: {
      aboutPara1:
        "I'm a passionate Full-Stack Developer with expertise in modern web technologies. I love creating efficient, scalable solutions and staying up-to-date with the latest industry trends.",
      aboutPara2:
        "I'm a passionate Full-Stack Developer with expertise in modern web technologies. I love creating efficient, scalable solutions and staying up-to-date with the latest industry trends.",
      aboutPara3:
        "I'm a passionate Full-Stack Developer with expertise in modern web technologies. I love creating efficient, scalable solutions and staying up-to-date with the latest industry trends.",
    },
    contact: [
      {
        text: "GitHub",
        link: "https://github.com/OmPimpale",
        icon: <Github className="h-4 w-4" />,
      },
      {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/om-pimpale-8b0a1b1b6/",
        icon: <Linkedin className="h-4 w-4" />,
      },
      {
        text: "Email",
        link: "mailto:ompimpale2003@gmail.com",
        icon: <Mail className="h-4 w-4" />,
      },
    ],
  },
];
