import { groupOne, groupTwo, groupThree, groupFour } from "./constant";

const ServiceNewSection = () => {
  return (
    <div className="space-y-12 w-full">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="space-y-6">
          {groupOne.map((item, index) => (
            <div key={index}>
              <SuperCard data={item} />
            </div>
          ))}

          {/* //render group one and add height to each card and pass data
          <div className="w-full h-[200px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div>
          <div className="w-full h-[230px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div>
          <div className="w-full h-[240px] rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer"></div> */}
        </div>
        <div className="space-y-6">
          {groupTwo.map((item, index) => (
            <div key={index}>
              <SuperCard data={item} />
            </div>
          ))}
        </div>
        <div className="space-y-6">
          {groupThree.map((item, index) => (
            <div key={index}>
              <SuperCard data={item} />
            </div>
          ))}
        </div>
        <div className="block lg:hidden xl:block space-y-6">
          {groupFour.map((item, index) => (
            <div key={index}>
              <SuperCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceNewSection;

const SuperCard = ({ data }: { data: any }) => {
  return (
    <>
      <div
        className={`w-full h-[${data.height}px]  rounded-md border shadow-sm p-4 hover:border-primary dark:hover:border-primary transition-colors group duration-500 ease-in-out cursor-pointer space-y-4`}>
        <div className="">
          <data.icon className="p-2 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-500 w-10 h-10 group-hover:bg-primary/10 group-hover:text-primary dark:group-hover:text-primary  dark:group-hover:bg-primary transition-colors group duration-500 ease-in-out cursor-pointer" />
        </div>
        <h1 className="text-sm font-medium">{data.title}</h1>
        <p className="text-xs leading-5 line-clamp-4">{data.description}</p>
      </div>
    </>
  );
};
