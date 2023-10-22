import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section className="">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
          Pricing Plan
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-500 dark:text-gray-300 xl:mt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
          magni libero consequuntur voluptatum velit amet id repudiandae ea,
          deleniti laborum in neque eveniet.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:gap-12">
          <div className="w-full space-y-8 rounded-lg border border-gray-100 p-8 text-center dark:border-gray-700">
            <p className="font-medium uppercase text-gray-500 dark:text-gray-300">
              Free
            </p>

            <h2 className="text-5xl font-bold uppercase text-gray-800 dark:text-gray-100">
              $0
            </h2>

            <p className="font-medium text-gray-500 dark:text-gray-300">
              Life time
            </p>

            <Button className="mt-10 w-full ">Start Now</Button>
          </div>

          <div className="w-full space-y-8 rounded-lg bg-primary p-8 text-center">
            <p className="font-medium uppercase text-gray-200">Premium</p>

            <h2 className="text-5xl font-bold uppercase text-white dark:text-gray-100">
              $40
            </h2>

            <p className="font-medium text-gray-200">Per month</p>

            <Button className="mt-10 w-full " variant={"secondary"}>
              Start Now
            </Button>
          </div>

          <div className="w-full space-y-8 rounded-lg border border-gray-100 p-8 text-center dark:border-gray-700">
            <p className="font-medium uppercase text-gray-500 dark:text-gray-300">
              Enterprise
            </p>

            <h2 className="text-5xl font-bold uppercase text-gray-800 dark:text-gray-100">
              $100
            </h2>

            <p className="font-medium text-gray-500 dark:text-gray-300">
              Life time
            </p>

            <Button className="mt-10 w-full ">Start Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
