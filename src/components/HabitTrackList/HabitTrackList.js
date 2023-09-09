import { useSelector } from "react-redux";
import HabitTrack from "../HabitTrack/HabitTrack";
import { habitSelector } from "../../redux/reducers/habitReducer";

export default function TrackHabitList() {
  const list = useSelector(habitSelector);
  // let list = JSON.stringify(localStorage.getItem("Habits"));
  return (
    <>
      {list.map((habit, i) => (
        <HabitTrack title={habit.title} key={i} />
      ))}
    </>
  );
}
