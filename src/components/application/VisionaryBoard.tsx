import { FC, ReactNode } from "react";

interface Props {
  loading: boolean;
  children: ReactNode;
}

const VisionaryBoard: FC<Props> = ({ loading, children }) => {
  return (
    <div className="lg:w-[600px] xl:w-[800px] h-full border rounded-lg p-4 flex-shrink-0 border-dashed flex justify-center items-center flex-col text-center">
      {loading ? <>Loading</> : <>{children}</>}
    </div>
  );
};

export default VisionaryBoard;
