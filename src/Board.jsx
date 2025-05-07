import CardColumn from './CardColumn';
import "./App.css";

export default function Board() {
  return (
    <div className="board">
      <CardColumn title="To Do" />
      <CardColumn title="In Progress" />
      <CardColumn title="Code Review" />
      <CardColumn title="Completed" />
    </div>
  );
}
