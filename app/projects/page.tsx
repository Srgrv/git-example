import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const projects = [
  {
    id: 1,
    title: "QuickResume",
    description:
      "QuickResume — онлайн-сервис для быстрого создания резюме. С помощью интуитивно понятных шагов и готовых шаблонов, вы сможете подготовить идеальное резюме всего за несколько минут",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "https://not-style-components.vercel.app/",
    image: "/countries.png",
    date: "15 мая 2023",
    author: "Сергей Георгиев",
  },
  {
    id: 2,
    title: "ResumeCraft",
    description:
      "ResumeCraft — это онлайн-платформа для создания профессиональных резюме. Пользователи могут легко и быстро собрать свое резюме, используя шаблоны, которые автоматически подстраиваются под их данные и карьерные цели.",
    tags: ["React Native", "Firebase", "Redux"],
    link: "https://not-style-components.vercel.app/",
    image: "/countries.png",
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
    image: "/countries.png",
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
    image: "/countries.png",
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
    image: "/countries.png",
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
    image: "/countries.png",
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
    image: "/countries.png",
    date: "15 мая 2023",
    author: "Сергей Георгиев",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col max-w-4xl container mx-auto p-8 ">
      <h1 className="bg-blue-300 rounded-2xl text-center mb-8 text-4xl font-bold text-gray-800 ">
        Мои проекты
      </h1>
      <div className="flex gap-1 flex-wrap">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            className="rounded-2xl md:w-[calc(33.33%-8px)] text-justify sm:w-[calc(50%-8px)]"
          >
            <Card className="bg-transparent border-none  group hover:bg-blue-300 shadow-[10px_10px_15px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform duration-500 will-change-transform">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge
                      variant="secondary"
                      className="text-blue-800 bg-blue-300 hover:bg-blue-300 group-hover:bg-white"
                      key={index}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex text-blue-600 group-hover:text-black justify-center items-center">
                  Подробнее{" "}
                  <ArrowRight className="ml-2 size-4 transform transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
