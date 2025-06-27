import "./App.css";
import img from "../public/image.png";
import Card from "./components/Card";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const users = [
    {
      name: "Chisom Chukwukwe",
      jobTitle: "UI/UX Designer",
      description:
        "Hardworking and reliable UI/UX designer focused on going above and beyond to support teams and serve customers.",
      personalImg: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "John Doe",
      jobTitle: "Software Engineer",
      description:
        "Passionate about coding and always eager to learn new technologies.",
      personalImg: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Jane Smith",
      jobTitle: "Product Manager",
      description:
        "Experienced in leading cross-functional teams to deliver high-quality products.",
      personalImg: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Alice Johnson",
      jobTitle: "Data Scientist",
      description:
        "Skilled in data analysis and machine learning, with a passion for turning data into actionable insights.",
      personalImg: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Michael Brown",
      jobTitle: "DevOps Engineer",
      description: "Expert in cloud infrastructure and automation tools.",
      personalImg: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Emily Davis",
      jobTitle: "Frontend Developer",
      description: "Loves building beautiful and responsive web interfaces.",
      personalImg: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      name: "David Wilson",
      jobTitle: "Backend Developer",
      description:
        "Enjoys solving complex problems and optimizing server performance.",
      personalImg: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Sophia Martinez",
      jobTitle: "QA Engineer",
      description: "Detail-oriented tester ensuring bug-free releases.",
      personalImg: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      name: "James Anderson",
      jobTitle: "Mobile Developer",
      description: "Building seamless mobile experiences for iOS and Android.",
      personalImg: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      name: "Olivia Thomas",
      jobTitle: "Scrum Master",
      description: "Facilitates agile teams and removes impediments.",
      personalImg: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      name: "Benjamin Lee",
      jobTitle: "Full Stack Developer",
      description:
        "Versatile developer comfortable with both frontend and backend.",
      personalImg: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Mia Harris",
      jobTitle: "Graphic Designer",
      description: "Creates stunning visuals and brand identities.",
      personalImg: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "William Clark",
      jobTitle: "System Administrator",
      description: "Keeps systems running smoothly and securely.",
      personalImg: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      name: "Charlotte Lewis",
      jobTitle: "Content Strategist",
      description:
        "Crafts compelling content strategies for digital platforms.",
      personalImg: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      name: "Henry Walker",
      jobTitle: "Security Analyst",
      description: "Protects data and systems from cyber threats.",
      personalImg: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      name: "Amelia Hall",
      jobTitle: "Marketing Specialist",
      description: "Drives user engagement through creative campaigns.",
      personalImg: "https://randomuser.me/api/portraits/women/16.jpg",
    },
    {
      name: "Alexander Young",
      jobTitle: "Business Analyst",
      description: "Analyzes business needs and recommends solutions.",
      personalImg: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    {
      name: "Evelyn King",
      jobTitle: "Support Engineer",
      description: "Helps customers resolve technical issues quickly.",
      personalImg: "https://randomuser.me/api/portraits/women/18.jpg",
    },
    {
      name: "Daniel Wright",
      jobTitle: "AI Engineer",
      description: "Develops intelligent systems and machine learning models.",
      personalImg: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    {
      name: "Grace Scott",
      jobTitle: "Project Manager",
      description: "Leads projects from conception to delivery.",
      personalImg: "https://randomuser.me/api/portraits/women/20.jpg",
    },
  ];
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Team Profiles
      </h1>
      {/* Cards Container */}
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4 items-center justify-center flex-wrap">
          {users.map((user, index) => (
            <Card
              bgImg={img}
              user={user}
              key={index}
              className="transform transition-transform hover:scale-105"
            />
          ))}
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
