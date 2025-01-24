"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RootState } from "@/store/index";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

import { useAppSelector } from "@/store/hooks";

const Projects: React.FC = () => {
  const projects = useAppSelector((state: RootState) => state.projects);

  return (
    <div className="flex flex-col max-w-4xl container mx-auto p-8">
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
            <Card className="bg-transparent border-none group hover-hover:hover:bg-blue-300 shadow-[10px_10px_15px_rgba(0,0,0,0.2)] hover-hover:transform hover-hover:hover:scale-105 hover-hover:transition-transform hover-hover:duration-500 hover-hover:will-change-transform">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge
                      variant="secondary"
                      className="text-blue-800 bg-blue-300 hover-hover:group-hover:bg-white"
                      key={index}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex text-blue-600 hover-hover:group-hover:text-black justify-center items-center">
                  Подробнее{" "}
                  <ArrowRight className="ml-2 size-4 hover-hover:transform hover-hover:transition-transform hover-hover:duration-500 hover-hover:group-hover:translate-x-2" />
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
