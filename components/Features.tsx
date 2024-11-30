import { AtSign, Braces, Database, DatabaseZap, FileCheck, FolderGit2, FolderTree, GitPullRequest, Languages, ListStart, SquareChevronRight, SquareFunction } from "lucide-react";
import Link from "next/link";
import React from "react";

const features = [
    {
      icon:<DatabaseZap/> ,
      title: "Cache",
      description:
        "A first-class API for accessing your db store, supports MySQL and Postgres. Experience the declarative syntax.",
    },
    {
      icon:<SquareChevronRight/> ,
      title: "Console",
      description:
        "A first-class API for accessing your db store, supports MySQL and Postgres. Experience the declarative syntax.",
    },
    {
      icon:<Database/> ,
      title: "DB Integration",
      description:
        "A first-class API for accessing your db store, supports MySQL and Postgres. Experience the declarative syntax.",
    },
    {
      icon: <Braces/>,
      title: "Error handling",
      description:
        "With Intent error handling you will never miss out on handling an error. Out of the box Sentry integration.",
    },
    {
      icon:  <FileCheck/>,
      title: "File Storage",
      description:
        "An elegant API for access different storage classes. Be it AWS S3 or Local, you can change the disk without changing the code.",
    },
    {
      icon:<SquareFunction/>,
      title: "Helpers",
      description:
        "Out of the box helpers for Arrays, Strings, Objects and Numbers so that you focus only on writing stuff which matters.",
    },
    {
      icon: <Languages/>,
      title: "Localization",
      description:
        "Build super personalised apps for your users using Localization. Support multiple languages, with the power of string operations.",
    },
    {
      icon: <FolderTree/>,
      title: "Logging",
      description:
        "Never miss out on any critical errors ever. Always be on top of the errors that happen in different environments of your application.",
    },
    {
      icon: <AtSign/>,
      title: "Mailers",
      description:
        "A beautiful built-in template, HTML should not be a blocker to send out mails. Be it, SMTP, Mailgun or Resend, it supports all.",
    },
    {
      icon: <FolderGit2/> ,
      title: "MVC Architecture",
      description:
        "A powerful codegen, never spend any extra time writing boilerplate code again. You get to focus on developing features.",
    },
    {
      icon: <ListStart/> ,
      title: "Queues",
      description:
        "A sublime message queues APIs, you can now write scalable applications in minutes. Based on AWS SQS, Redis integration.",
    },
    {
      icon: <GitPullRequest/> ,
      title: "Requests",
      description:
        "With NestJS powerful routing system, Intent comes packed with many utilities like Validators, Transformers, Requests..",
    },
  ];

function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mx-auto max-w-xl text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Turbocharge your coding <br/>
          <span className="text-[#98D422]">All tools on deck</span>
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 cursor-pointer ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col items-start justify-between p-6 bg-zinc-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-white group"
            >
              <div className="text-start ">
                <div className="mb-4 group-hover:text-[#98D422]">{feature.icon}</div>
                <h3 className="text-2xl text-white font-semibold group-hover:text-[#98D422]">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-400 hover:text-white">{feature.description}</p>
              </div>
              <Link
                href="#"
                className="mt-4 inline-block text-white font-medium text-lg hover:underline group-hover:text-[#98D422]"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
