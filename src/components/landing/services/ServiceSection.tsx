"use client";

import { FC, useState } from "react";
// import ServiceModal from "@/components/mini/ServiceModal";

import { Service, serviceData } from "./constant";

const ServiceSection = () => {
  const data = serviceData;

  const [service, setService] = useState<Service | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (data: Service) => {
    setOpen(true);
    setService(data);
  };

  const handleClose = () => {
    setOpen(false);
    setService(null);
  };

  return (
    <div className="space-y-12">
      {/* {open && <ServiceModal item={service} close={handleClose} />} */}
      <header className="w-full text-center space-y-6 ">
        <h2 className="text-3xl font-semibold">
          Loved by businesses worldwide.
        </h2>
        <div className="flex justify-center">
          <p className="max-w-2xl">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
      </header>
      <div className="flex justify-center w-full">
        <main className="grid grid-cols-2 lg:grid-cols-4 w-[1200px] gap-3 md:gap-6">
          {data.services.map((item, index) => (
            <div
              key={index}
              className="border rounded-md p-4 hover:border-primary dark:hover:border-primary md:p-5 transition-colors group duration-500 ease-in-out cursor-pointer"
              onClick={() => handleOpen(item)}>
              <div className="mb-4 ">
                <item.icon className="p-1.5 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-500 w-8 h-8 group-hover:bg-primary/10 group-hover:text-primary dark:group-hover:text-primary  dark:group-hover:bg-primary transition-colors group duration-500 ease-in-out cursor-pointer" />
              </div>
              <h1 className="font-semibold mb-3 text-xs md:text-base">
                {item.title}
              </h1>
              <p className="mb-4 font-base text-gray-500 text-xs md:text-sm truncate">
                {truncate(item.description, 50)}
              </p>

              <p className="text-xs text-right text-gray-500 group-hover:text-primary dark:group-hover:text-primary transition-colors group duration-500 ease-in-out cursor-pointer">
                See Details
              </p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default ServiceSection;

const truncate = (text: string, maxLength: any) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "..."; // Truncate and add ellipsis
  }
  return text; // Return the original text if it's shorter than maxLength
};
