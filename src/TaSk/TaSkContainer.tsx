import { TaSk } from "./TaSk";

type Props = {
  TaSklist: string[];
  deleteTaSk: (index: number) => void;
};

export const TaSkContainer = ({ TaSklist, deleteTaSk }: Props) => {
  return (
    <div className="taskList">
      {TaSklist.map((task, index) => (
        <TaSk key={index} TaSk={task} deleteTaSk={() => deleteTaSk(index)} />
      ))}
    </div>
  );
};
