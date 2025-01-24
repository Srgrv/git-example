// icons
import {
  Mail,
  Phone,
  Github,
  MapPin,
  Send,
  ChartBarDecreasing,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

// components
import Badge from "@/components/Badge";

const stack = ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"];

export default function Home() {
  return (
    <div className="conteiner mx-auto   max-w-4xl p-8 ">
      {/*Первый блок*/}
      <div className="flex flex-col sm:flex-row gap-3  justify-between items-center   sm:pt-8 shadow-[10px_10px_15px_rgba(0,0,0,0.2)] rounded-2xl p-3">
        <div>
          <h1 className="font-bold text-[24px]">Сергей Георгиев</h1>
          <p className="text-muted-foreground">Фронтенд-разработчик</p>
        </div>
        <div className="flex gap-6">
          <Link href="/">
            <Mail size={24} />
          </Link>
          <Link href="https://t.me/s_grgv">
            <Send size={24} color="#000000" />
          </Link>
          <Phone />
          <Link href="https://github.com/srgrv">
            <Github />
          </Link>
        </div>
      </div>

      {/*Второй блок*/}
      <div className="flex bg-white  gap-2 items-center justify-center sm:justify-start mt-4 sm:mt-8 shadow-[10px_10px_15px_rgba(0,0,0,0.2)] rounded-2xl p-3">
        <MapPin
          size={16}
          color="hsl(var(--muted-foreground))"
          strokeWidth={1}
        />
        <span className="text-muted-foreground">Чебоксары, Россия</span>
      </div>

      {/*Третий блок*/}
      <p className="bg-white mt-2 shadow-[10px_10px_15px_rgba(0,0,0,0.2)] rounded-2xl p-3">
        Опытный веб-разработчик со страстью к созданию элегантных, эффективных и
        пользовательско-ориентированных цифровых решений.
      </p>

      {/*Четвертый блок*/}
      <div className="bg-white mt-4 flex flex-col sm:flex-row gap-8 sm:gap-3">
        <div className="shadow-[10px_10px_15px_rgba(0,0,0,0.2)] rounded-2xl p-3">
          <h2 className="flex items-center font-bold gap-2">
            <GraduationCap strokeWidth={1} />
            <span>Образование</span>
          </h2>
          <div className="flex mt-2 flex-col">
            <h2 className="font-bold">
              Чувашский государственный университет им. И.Н.Ульянова
            </h2>
            <p className="text-sm text-muted-foreground ">Магистратура</p>
          </div>
        </div>

        <div className="shadow-[10px_10px_15px_rgba(0,0,0,0.2)] rounded-2xl p-3">
          <h2 className="flex items-center font-bold gap-2">
            <ChartBarDecreasing strokeWidth={1} />
            <span>Основной стек</span>
          </h2>
          <div className="flex flex-wrap gap-2 mt-2 ">
            {stack.map((item, index) => (
              <Badge key={`${item}_${index}`}>{item}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
