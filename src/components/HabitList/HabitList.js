import { useSelector } from "react-redux";
import Habit from "../Habit/Habit";
import "./HabitList.css";
import { habitSelector } from "../../redux/reducers/habitReducer";
// import { useEffect } from "react";
// import { actions, habitSelector } from "../../redux/reducers/habitReducer";

export default function HabitList() {
  const list = useSelector(habitSelector);
  // let list = localStorage.getItem("Habits");
  // console.log(list);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actions.setInitialState(list));
  // }, []);
  return (
    <>
      {list.map((habit, i) => (
        <Habit title={habit.title} time={habit.time} key={i} index={i} />
      ))}
    </>
  );
}
