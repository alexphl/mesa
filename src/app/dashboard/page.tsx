import { type NextPage } from "next";
import MovesetPane from "./MovesetPane";
import UIProvider from "./UIProvider";

const Home: NextPage = () => {
  return (
    <>
      <div className="grid-cols-[105px_5fr] justify-evenly sm:grid lg:grid-cols-[140px_5fr]">
        <UIProvider/>

        <div className="my-10 grid gap-6 sm:pr-10 lg:pr-14 col-start-2">
          {[...Array(5)].map((_x, i) => (
            <MovesetPane pos={i} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
