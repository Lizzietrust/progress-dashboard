import graph from "../assets/Graph.svg";
import chart from "../assets/Chart.svg";
import chat from "../assets/Chat.svg";
import user from "../assets/User.png";
import document from "../assets/Document.svg";
import danger from "../assets/Danger.svg";
import setting from "../assets/Setting.svg";
import orangeCheck from "../assets/orange-check.svg";
import blueCheck from "../assets/blue-check.png";
import pencil from "../assets/pencil.png";
import ball from "../assets/ball.png";
import grammar from "../assets/grammar.png";
import dictionary from "../assets/dictionary.png";
import reading from "../assets/reading.png";

interface Link {
  image: string;
  name: string;
}

interface Shortcut {
  image: string;
  name: string;
}

interface Task {
  image: string;
  name: string;
  desc: string;
  time: string;
}

interface Course {
  icon: string;
  name: string;
  info: string;
}

interface Progress {
  per: string;
  icon: string;
  name: string;
  info: string;
}

export const links: Link[] = [
  { image: graph, name: "dashboard" },
  { image: chart, name: "overview" },
  { image: chat, name: "chat" },
  { image: user, name: "team" },
];

export const shortcut: Shortcut[] = [
  { image: document, name: "tasks" },
  { image: danger, name: "reports" },
  { image: setting, name: "settings" },
];

export const task: Task[] = [
  {
    image: orangeCheck,
    name: "homework",
    desc: "For today’s lesson",
    time: "35 min ago",
  },
  {
    image: blueCheck,
    name: "reading",
    desc: "24 words per week",
    time: "2h ago",
  },
];

export const course: Course[] = [
  { icon: pencil, name: "Grammer", info: "+30 grammer rules" },
  { icon: ball, name: "Dictionary", info: "+10 new words" },
];

export const progress: Progress[] = [
  { per: "63%", icon: grammar, name: "Grammar", info: "Learn new rules" },
  {
    per: "78%",
    icon: dictionary,
    name: "Dictionary",
    info: "Learn 4 new words",
  },
  { per: "34%", icon: reading, name: "Reading", info: "Train your skill" },
];
