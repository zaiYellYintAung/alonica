import React, { FC } from "react";
import RightClick from "./RightClick";

interface Props {
  unicorns: string[];
}

const UnicornBoard: FC<Props> = () => {
  return (
    <div>
      <RightClick>
        <div className="w-[680px] h-[680px] border rounded-lg p-4 flex-shrink-0">
          Unicorn Board
        </div>
      </RightClick>
    </div>
  );
};

export default UnicornBoard;
