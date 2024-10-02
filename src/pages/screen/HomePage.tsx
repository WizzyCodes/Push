import { useEffect, useState } from "react";
import { FaRepeat } from "react-icons/fa6";

const HomePage = () => {
  const [sec, setSec] = useState<number>(0);
  const [min, setMin] = useState<number>(sec);
  const [hr, setHr] = useState<number>(0);

  const func = () => {
    setSec((el: number) => el + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      func();
    }, 1000);
  }, [sec]);

  return (
    <div>
      <div className="border w-[500px] h-[300px] rounded-md m-4 p-4 ">
        <div className="w-full justify-evenly items-center h-full flex ">
          <p>{hr}</p>
          <p>{min}</p>
          <p>{sec % 10}</p>
        </div>
        <div
          className="flex justify-center mt-10 cursor-pointer"
          onClick={() => {
            setSec(0);
            setMin(0);
            setHr(0);
          }}
        >
          <FaRepeat />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
