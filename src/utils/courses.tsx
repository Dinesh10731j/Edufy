import { Code, Globe, Layout, Server, Terminal } from "lucide-react";
export  const courses = [
    { name: "HTML", icon: <Code className="text-blue-500" /> },
    { name: "CSS", icon: <Layout className="text-purple-500" /> },
    { name: "React.js", icon: <Globe className="text-teal-500" /> },
    { name: "Tailwind CSS", icon: <Layout className="text-green-500" /> },
    { name: "JavaScript", icon: <Terminal className="text-yellow-500" /> },
    { name: "Nest.js", icon: <Server className="text-red-500" /> },
    { name: "Express.js", icon: <Server className="text-gray-500" /> },
    { name: "MongoDB", icon: <Server className="text-green-700" /> },
    { name: "and more...", icon: <Code className="text-gray-400" /> },
  ];