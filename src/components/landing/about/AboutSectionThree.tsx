import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const arr = [
  {
    icon: <Shield />,
    title: "Your choice of authentication strategies",
    body: "Different businesses needs users to sign in different ways – choose only the ones that are right for your application.",
  },
  {
    icon: <Shield />,
    title: "Your choice of authentication strategies",
    body: "Different businesses needs users to sign in different ways – choose only the ones that are right for your application.",
  },
  {
    icon: <Shield />,
    title: "Your choice of authentication strategies",
    body: "Different businesses needs users to sign in different ways – choose only the ones that are right for your application.",
  },
];

const AboutSectionThree = () => {
  return (
    <div className="flex items-center py-0 md:py-20">
      <div className="flex gap-8 lg:gap-12 py-8 flex-col lg:flex-row-reverse items-center">
        <section className="w-full lg:w-auto space-y-5 mb-4 md:mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold md:leading-[3rem]">
            Customizable to your business
          </h1>
          <p className="text-gray-500 leading-6">
            Styling is just the start – we understand that every business has
            unique needs for their sign-up flow and can accommodate most
            requests out-of-the-box.
          </p>
          <div>
            {arr.map((item, index) => (
              <div key={index} className="flex gap-4 mb-4">
                <div className="bg-primary w-10 h-10 rounded-sm flex items-center justify-center text-white  flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <Button size={"lg"}>See Demo</Button>
            <Button variant={"secondary"} size={"lg"}>
              Schedule a Call
            </Button>
          </div>
        </section>
        <section className="w-full lg:w-1/2">
          <div className="h-[400px] lg:h-[480px] w-full flex items-center justify-center ">
            <div className="h-[450px] w-full xl:w-[600px] md:w-[550px]  xl:h-[550px] rounded-md bg-primary"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSectionThree;
