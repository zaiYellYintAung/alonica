import React from "react";
import RightClick from "./RightClick";

const UnicornBoard = () => {
  return (
    <div>
      <RightClick>
        <div className="w-[680px] h-[680px] border rounded-sm p-4 flex-shrink-0 border-dashed">
          Unicorn Board
        </div>
      </RightClick>
    </div>
  );
};

export default UnicornBoard;
