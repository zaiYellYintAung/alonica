import { introDatas } from "./constant";

const IntroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {introDatas.map((data, index) => (
        <div key={index} className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 bg-primary"></div>
            <h1>{data.title}</h1>
          </div>
          <p className="text-sm">{data.body}</p>
        </div>
      ))}
    </div>
  );
};

export default IntroSection;
