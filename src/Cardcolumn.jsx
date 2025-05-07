import TicketCard from './TicketCard';
import "./App.css";

export default function CardColumn({ title }) {
  return (
    <div className="card-column">
      <h3>{title}</h3>
      <TicketCard />
      <TicketCard />
    </div>
  );
}
