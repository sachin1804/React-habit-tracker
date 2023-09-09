import { useDispatch } from "react-redux";
import "./Habit.css";
import { actions } from "../../redux/reducers/habitReducer";

export default function Habit({ title, time, index }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="habit">
        <h3>{title}</h3>
        <hr />
        <div className="habit-desc">
          <h4>{time}</h4>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png"
            alt="delete"
            onClick={() => dispatch(actions.deleteHabit(index))}
          />
        </div>
      </div>
    </>
  );
}
