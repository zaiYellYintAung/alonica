import Image from "next/image";
import PropTypes from "prop-types";
import { testOneInput, testOneOutput } from "./constants";

const GalleryCard = ({
  beforeImg,
  afterImg,
  height,
}: {
  beforeImg: any;
  afterImg: any;
  height: string;
}) => {
  return (
    <div
      className={`w-full h-[${height}] rounded-md border relative overflow-hidden cursor-pointer`}>
      <div className="w-full transition-opacity duration-500 absolute inset-0">
        <Image src={beforeImg} alt="image" layout="fill" objectFit="cover" />
      </div>
      <div className="w-full transition-opacity duration-500 absolute inset-0 opacity-0 hover:opacity-100">
        <Image src={afterImg} alt="image" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

const GallerySection = () => {
  return (
    <div className="space-y-12">
      <header className="w-full text-center space-y-6">
        <h2 className="text-3xl font-semibold">
          Loved by businesses worldwide.
        </h2>
        <div className="flex justify-center">
          <p className="max-w-2xl">
            Our software is so simple that people can't help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto gap-6">
        <div className="space-y-6">
          <GalleryCard
            beforeImg={testOneInput}
            afterImg={testOneOutput}
            height="250px"
          />
          <GalleryCard
            beforeImg={testOneInput}
            afterImg={testOneOutput}
            height="280px"
          />
          <GalleryCard
            beforeImg={testOneInput}
            afterImg={testOneOutput}
            height="300px"
          />
        </div>
        <div className="space-y-6">
          <GalleryCard
            beforeImg={testOneInput}
            afterImg={testOneOutput}
            height="350px"
          />
          <GalleryCard
            beforeImg={testOneInput}
            afterImg={testOneOutput}
            height="250px"
          />
          <GalleryCard
            beforeImg={testOneInput}
            afterImg={testOneOutput}
            height="290px"
          />
        </div>
        <div className="space-y-6">
          <GalleryCard
            beforeImg={testOneInput}
            afterImg={testOneOutput}
            height="280px"
          />
          <GalleryCard
            beforeImg={testOneInput}
            afterImg={testOneOutput}
            height="260px"
          />
          <GalleryCard
            beforeImg={testOneInput}
            afterImg={testOneOutput}
            height="280px"
          />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
