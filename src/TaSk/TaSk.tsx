type Props = {
  TaSk: string;
  deleteTaSk: () => void;
};

export const TaSk = ({ TaSk, deleteTaSk }: Props) => {
  return (
    <div className="task">
      <p>{TaSk}</p>
      <button onClick={deleteTaSk}>Delete</button>
    </div>
  );
};
