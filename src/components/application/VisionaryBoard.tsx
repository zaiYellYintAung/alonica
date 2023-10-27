import { FC, ReactNode } from "react";

interface Props {
  loading: boolean;
  children: ReactNode;
}

const VisionaryBoard: FC<Props> = ({ loading, children }) => {
  return (
    <div className="w-[700px] h-[600px] border rounded-sm p-4 flex-shrink-0 border-dashed flex justify-center items-center">
      {loading ? <div>Loading</div> : <div>{children}</div>}
    </div>
  );
};

export default VisionaryBoard;
