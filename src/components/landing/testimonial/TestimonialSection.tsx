const TestimonialSection = () => {
  return (
    <div className="space-y-12">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto gap-6">
        <div className="space-y-6">
          <div className="w-full h-[200px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div>
          <div className="w-full h-[230px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div>
          <div className="w-full h-[240px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div>
        </div>
        <div className="space-y-6">
          <div className="w-full h-[260px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div>

          <div className="w-full h-[200px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div>
          <div className="w-full h-[240px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div>
        </div>
        <div className="space-y-6">
          <div className="w-full h-[230px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div>
          <div className="w-full h-[210px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div>
          <div className="w-full h-[230px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div>
        </div>
        <div className="block lg:hidden xl:block space-y-6">
          <div className="w-full h-[200px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div>
          <div className="w-full h-[220px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div>
          <div className="w-full h-[240px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
