import "./style.css";
import { useState } from "react";
import { TaSkContainer } from "./TaSk/TaSkContainer";

export const TaSklistApp = () => {
  const [newTaSk, setNewTaSk] = useState<string>("");
  const [TaSklist, setTaSklist] = useState<string[]>([]);
  const handleAddTaSk = () => {
    if (newTaSk.trim() === "") return;
    setTaSklist((currentTaks) => [...currentTaks, newTaSk]);
    setNewTaSk("");
  };
  const handleDeleteTaSk = (index: number) => {
    setTaSklist((Tasks) => Tasks.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h1> TaSklist</h1>
      <div>
        <input
          type="text"
          placeholder="Write TaSk 📒"
          value={newTaSk}
          onChange={(e) => setNewTaSk(e.target.value)}
        />
        <button onClick={handleAddTaSk}>Save</button>
        <TaSkContainer TaSklist={TaSklist} deleteTaSk={handleDeleteTaSk} />
      </div>
    </div>
  );
};
