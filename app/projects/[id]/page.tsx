"use client";

import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";

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

import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store";

const Project: React.FC = () => {
  const { id } = useParams();
  const projects = useAppSelector((state: RootState) => state.projects);
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-red-500 font-bold">Проект не найден</h1>
        <ButtonBack className="mt-5 text-blue-400" />
      </div>
    );
  }

  return (
    <div
      className="max-w-4xl container mx-auto flex flex-col p-3 sm:p-8"
      key={project.id}
    >
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
