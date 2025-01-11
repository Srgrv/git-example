"use client";

import Image from "next/image";
import React from "react";

// components
import ButtonBack from "@/components/ButtonBack";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, ExternalLink, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface IProducts {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  date: string;
  author: string;
}

type PageProps = {
  params: { id: string };
};

const projects: IProducts[] = [
  {
    id: 1,
    title: "QuickResume",
    description:
      "QuickResume — онлайн-сервис для быстрого создания резюме. С помощью интуитивно понятных шагов и готовых шаблонов, вы сможете подготовить идеальное резюме всего за несколько минут",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "https://not-style-components.vercel.app/",
    image: "/5.jpg",
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

const Project: React.FC<PageProps> = ({ params }) => {
  const project = projects[0];
  //   const { id } = params;

  return (
    <div className="max-w-4xl container mx-auto flex flex-col p-3 sm:p-8">
      <div>
        <ButtonBack className="sm:mb-8 mb-3 text-blue-400" />
      </div>
      <div className="relative aspect-[16/5] w-full mb-3 ">
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          priority
          className="rounded-lg shadow-[10px_10px_15px_rgba(0,0,0,0.3)]  "
        />
      </div>
      <Card>
        <CardHeader className="p-3 sm:p-4">
          <CardTitle>
            <h1 className="font-bold text-blue-400 mb-2">{project.title}</h1>
            <div className="flex gap-2 mb-3 flex-wrap">
              {project.tags.map((tag, index) => (
                <Badge
                  className="bg-blue-400 select-none hover:bg-blue-400"
                  key={`${tag}_${index}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardTitle>
          <CardDescription>
            <p>{project.description}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-1 text-blue-400 text-sm pr-3 pl-3 sm:pr-4 sm:pl-4">
          <div className="flex items-center gap-1">
            <User />
            {project.author}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="" />
            {project.date}
          </div>
        </CardContent>
        <CardFooter className="pr-3 pl-3 sm:pr-4 sm:pl-4">
          <Button className="bg-blue-400">
            <Link href={project.link} className="flex items-center">
              Посмотреть проект <ExternalLink className="ml-2 size-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Project;
