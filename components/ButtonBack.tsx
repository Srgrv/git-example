import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

//utils
import { cn } from "@/lib/utils";

interface IProps {
  className: string;
}

const ButtonBack: React.FC<IProps> = ({ className }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={cn(
        "flex items-center gap-1 will-change-transform group transform transition-transform duration-500 hover:scale-105  ",
        className
      )}
    >
      <ArrowLeft className="transform transition-transform duration-500 group-hover:translate-x-[-0.5rem] " />
      <span className="font-bold">Назад к проектам</span>
    </button>
  );
};

export default ButtonBack;
