import { type NextPage } from "next";
import MovesetPane from "./MovesetPane";

const WorkoutPage: NextPage = () => {
  return (
    <>
      {[...Array(5)].map((_x, i) => (
        <MovesetPane pos={i} key={i} />
      ))}
    </>
  );
};

export default WorkoutPage;
