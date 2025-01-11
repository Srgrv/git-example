import { createSlice } from "@reduxjs/toolkit";

type TProject = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  date: string;
  author: string;
};

const initialState: TProject[] = [
  {
    id: 1,
    title: "QuickResume",
    description:
      "QuickResume — онлайн-сервис для быстрого создания резюме. С помощью интуитивно понятных шагов и готовых шаблонов, вы сможете подготовить идеальное резюме всего за несколько минут",
    tags: ["React", "Next.js", "Tailwind CSS", "RTQuery"],
    link: "https://not-style-components.vercel.app/",
    image: "/1.jpg",
    date: "3 мая 2023",
    author: "Сергей Георгиев",
  },
  {
    id: 2,
    title: "ResumeCraft",
    description:
      "ResumeCraft — это онлайн-платформа для создания профессиональных резюме. Пользователи могут легко и быстро собрать свое резюме, используя шаблоны, которые автоматически подстраиваются под их данные и карьерные цели.",
    tags: ["React Native", "Firebase", "Redux", "Zustand"],
    link: "https://not-style-components.vercel.app/",
    image: "/2.jpg",
    date: "15 мая 2023",
    author: "Сергей Георгиев",
  },
  {
    id: 3,
    title: "EasyCV Builder",
    description:
      "EasyCV Builder — инструмент для создания и редактирования резюме с нуля. Удобный интерфейс и множество настраиваемых шаблонов позволяют создать резюме, которое выделит вас среди конкурентов.",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "https://not-style-components.vercel.app/",
    image: "/3.jpg",
    date: "15 мая 2023",
    author: "Сергей Георгиев",
  },
  {
    id: 4,
    title: "CV Forge",
    description:
      "CV Forge — это инструмент для разработки и настройки резюме, предназначенный для профессионалов, которые хотят быстро оформить свою карьерную историю и выделиться на рынке труда с помощью уникальных дизайнов и рекомендаций.",
    tags: ["React Native", "Firebase", "Redux"],
    link: "https://not-style-components.vercel.app/",
    image: "/4.jpg",
    date: "15 мая 2023",
    author: "Сергей Георгиев",
  },
  {
    id: 5,
    title: "ProResume Generator",
    description:
      "ProResume Generator — это платформа, которая помогает создать качественное резюме с использованием современных шаблонов и практических советов для повышения шансов на успешное трудоустройство.",
    tags: ["React Native", "Firebase", "Redux"],
    link: "https://not-style-components.vercel.app/",
    image: "/5.jpg",
    date: "15 мая 2023",
    author: "Сергей Георгиев",
  },
  {
    id: 6,
    title: "ResuMaster",
    description:
      "ResuMaster — это инструмент, который помогает создавать уникальные резюме с нуля, используя интеллектуальные шаблоны и советы по улучшению содержимого, чтобы выделиться среди других кандидатов.",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "https://not-style-components.vercel.app/",
    image: "/1.jpg",
    date: "15 мая 2023",
    author: "Сергей Георгиев",
  },
  {
    id: 7,
    title: "SmartCV",
    description:
      "SmartCV предлагает простое решение для составления и обновления резюме. С помощью профессиональных шаблонов и возможности настроить каждый раздел под свои нужды, вы получите резюме, которое отражает ваши сильные стороны.",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "https://not-style-components.vercel.app/",
    image: "/2.jpg",
    date: "15 мая 2023",
    author: "Сергей Георгиев",
  },
];

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
