import srinathImg from "../assets/images/team/srinathv.png";
import girishImg from "../assets/images/team/girish.jpg";
import mukheshImg from "../assets/images/team/mukhesh.jpg";
import nekhaImg from "../assets/images/team/nekha.jpg";
import karuppuImg from "../assets/images/team/karuppu.jpg";

import { getAssetPath } from "../utils/assets";

export const teamMembers = [
  {
    id: 1,
    name: "Srinath V",
    role: "AI Engineer",
    badgeId: "b1",
    image: srinathImg,
    resumeUrl: getAssetPath("resumes/srinath.png"),
    expertise: ["Cloud Computing", "Agentic AI", "LLM Ethical Engineering"],
    bio: "Leading the strategic architectural vision by bridging ethical AI engineering with enterprise-grade cloud systems to build the foundations of tomorrow.",
    contact: {
      email: "srinath.v32197@gmail.com",
      mobile: "+91 8072232197",
      linkedin: "https://www.linkedin.com/in/srinath-v-369v2220/",
      github: "https://github.com/SRINATH32197"
    }
  },
  {
    id: 2,
    name: "Girish J",
    role: "AI Engineer",
    badgeId: "b2",
    image: girishImg,
    resumeUrl: getAssetPath("resumes/girish.png"),
    expertise: ["Agentic AI", "Cloud Computing", "AI Enthusiast"],
    bio: "Transforming complex AI concepts into scalable technical realities that empower startups and drive the next wave of agentic innovation.",
    contact: {
      email: "jk.girish2004@gmail.com",
      mobile: "+91 9042069557",
      linkedin: "https://www.linkedin.com/in/girish-j-677758289/",
      github: "https://github.com/RISH-J-D"
    }
  },
  {
    id: 3,
    name: "Arumukhesh V",
    role: "Data Engineer",
    badgeId: "b3",
    image: mukheshImg,
    resumeUrl: getAssetPath("resumes/arumukhesh.png"),
    expertise: ["Linux", "Tech Enthusiast", "System Design"],
    bio: "Ensuring seamless technological delivery by mastering the intersection of robust Linux environments and high-performance system design.",
    contact: {
      email: "arumukheshv@gmail.com",
      mobile: "+91 8056036519",
      linkedin: "https://www.linkedin.com/in/arumukhesh/",
      github: "https://github.com/mukhesh-7"
    }
  },
  {
    id: 4,
    name: "Nekha J",
    role: "Software Engineer",
    badgeId: "b4",
    image: nekhaImg,
    resumeUrl: getAssetPath("resumes/nekha.png"),
    expertise: ["Software Engineering", "Coding", "Problem Solving"],
    bio: "Overseeing the evolution of the software development lifecycle through a unique combination of algorithmic logic and strategic project governance.",
    contact: {
      email: "jnekh2005@gmail.com",
      mobile: "+65 81154989",
      linkedin: "https://www.linkedin.com/in/jnekha/",
      github: "https://github.com/nekha01"
    }
  },
  {
    id: 5,
    name: "Praveen Karuppusamy",
    role: "FullStack Developer",
    badgeId: "b5",
    image: karuppuImg,
    resumeUrl: getAssetPath("resumes/praveenkaruppusamy.png"),
    expertise: ["React Native", "React.js", "Electron"],
    bio: "Passionate React Native & React Developer Ensuring Full-Stack Excellence through Cross-Platform Quality Assurance.",
    contact: {
      email: "ipraveen982005@gmail.com",
      mobile: "+91 9790002335",
      linkedin: "https://www.linkedin.com/in/praveen-karuppusamy/",
      github: "https://github.com/praveenkaruppusamy2005"
    }
  }
];
