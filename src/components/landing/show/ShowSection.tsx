"use client";

import { useState } from "react";
import { FaHome } from "react-icons/fa";
import viewOne from "@/assets/ui/viewOne.jpg";
import viewTwo from "@/assets/ui/viewTwo.jpg";
import viewThree from "@/assets/ui/viewOne.jpg";
import Image from "next/image";

const views = [
  {
    id: 0,
    title: "Empowering Real Estate Agents",
    body: "Our software streamlines operations for real estate agents, simplifying their work and enhancing client interactions. Fall in love with the simplicity of our platform.",
    icon: <FaHome />,
    subtitle: "Real Estate",
    view: viewOne,
  },
  {
    id: 1,
    title: "Simplifying Property Development",
    body: "Our software eases the complex journey of property development. Manage projects with ease and understand complex data. We value simplicity in a complex world.",
    icon: <FaHome />,
    subtitle: "Property Development",
    view: viewTwo,
  },
  {
    id: 2,
    title: "For Those Who Cherish Home",
    body: "Our platform is for anyone who cherishes the idea of home. Simplify finding, buying, and transforming a house into a home. Experience the essence of home.",
    icon: <FaHome />,
    subtitle: "Home Owners",
    view: viewThree,
  },
];

const ShowSection = () => {
  const [currentView, setCurrentView] = useState(views[0].id);

  return (
    <div className="space-y-12 w-full mx-auto">
      <div className="hidden lg:grid grid-cols-3 gap-8 xl:gap-12">
        {views.map((view, index) => (
          <div
            key={index}
            className="space-y-4 cursor-pointer leading-6"
            onClick={() => {
              setCurrentView(index);
            }}>
            <div className="flex items-center gap-4">
              <div
                className={`h-12 w-12 ${
                  currentView === index ? "bg-primary" : "bg-foreground/70"
                }  rounded-md`}>
                {view.icon}
              </div>
              <div>
                <p
                  className={`  ${
                    currentView === index
                      ? "text-primary"
                      : "text-foreground/70"
                  } font-medium text-sm`}>
                  {view.subtitle}
                </p>
                <h1
                  className={`font-semibold  ${
                    currentView === index
                      ? "text-foreground"
                      : "text-foreground/70"
                  }`}>
                  {view.title}
                </h1>
              </div>
            </div>
            <p
              className={`text-sm  leading-6 ${
                currentView === index
                  ? "text-muted-foreground"
                  : "text-muted-foreground/80"
              }`}>
              {view.body}
            </p>
          </div>
        ))}
      </div>
      <div className="hidden lg:block w-full h-[700px] rounded-lg border relative">
        <div className="w-full h-full  transition-opacity duration-500 absolute inset-0">
          <Image
            src={views[currentView].view}
            alt={`ui${currentView}`}
            layout="fill"
            objectFit="cover"
          />{" "}
        </div>
      </div>

      <div className="block lg:hidden space-y-12">
        {views.map((view, index) => (
          <div key={index} className="space-y-4 cursor-pointer">
            <div className="h-10 w-10 bg-primary rounded-md"></div>
            <p className="text-foreground font-semibold text-sm">
              {view.subtitle}
            </p>
            <h1 className="font-medium">{view.title}</h1>
            <p className="text-sm text-muted-foreground">{view.body}</p>

            <div className="w-full h-[200px] md:h-[350px] bg-secondary"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSection;
