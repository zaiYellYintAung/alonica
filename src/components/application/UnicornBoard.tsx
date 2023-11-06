import React, { FC } from "react";
import RightClick from "./RightClick";

interface Props {
  unicorns: string[];
}

const UnicornBoard: FC<Props> = () => {
  return (
    <div>
      <RightClick>
        <div className="lg:w-[600px] xl:w-[800px] h-full border rounded-lg p-4 flex-shrink-0">
          Unicorn Board
        </div>
      </RightClick>
    </div>
  );
};

export default UnicornBoard;
