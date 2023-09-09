import { Provider } from "react-redux";
import Form from "../../components/Form/Form";
import HabitList from "../../components/HabitList/HabitList";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import { store } from "../../redux/store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Navbar />
      <Form />
      <HabitList />
    </Provider>
  );
}
