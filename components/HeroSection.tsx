import { Github, MoveRight, RocketIcon } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-3xl mx-auto mt-6">
        <div className="inline-flex items-center text-white py-1 px-4 rounded-full text-sm font-medium border-2 border-[#98D422] mb-10">
          🚀 <p className="text-[#98D422]">Intent v0.1.35 released</p>{" "}
          <span className="ml-2">
            <MoveRight className="text-[#98D422]" />
          </span>
        </div>
        <div className="">
        <h1 className="font-urbanist text-5xl md:text-5xl lg:text-6xl tracking-tight text-bgcolor dark:text-darkfont font-extrabold leading-tight mb-4">
          It's like Laravel, <br />
          <span className="text-[#98D422] text-4xl md:text-5xl lg:text-6xl tracking-tight text-main font-extrabold">
            but for NodeJS
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-6 px-5 md:px-0">
          A refreshing take on traditional Node.js frameworks, change the way
          you build your products. Intent is an open-source framework with a
          focus on productivity and developer experience.
        </p>
        </div>
        <div className="md:flex flex-col md:flex-row justify-center gap-4 inline-flex">
        <Link
            href="#"
            className="flex items-center bg-[#98D422] text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 justify-center"
          >
            <RocketIcon className="mr-2 text-white" />
            Get Started
          </Link>
          <Link
            href="#"
            className="flex items-center text-white border-2 border-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 justify-center"
          >
            <Github className="mr-2 text-[#98D422]" />
            Star on Github
          </Link>
        </div>
        <div className="mt-6">
            <p> <span className="text-center text-[#98D422]"> Book a call </span> to see how Intent can help you !  </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
