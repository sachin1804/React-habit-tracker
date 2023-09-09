import { useState } from "react";
import "./Form.css";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/reducers/habitReducer";

export default function Form({ addHabit }) {
  const [habit, setHabit] = useState("");
  const dispatch = useDispatch();
  console.log(actions);

  const handleSubmit = (e) => {
    e.preventDefault();
    // addHabit(habit);
    dispatch(actions.addHabit(habit));
    setHabit("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a habit"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </>
  );
}
