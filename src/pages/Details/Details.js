import Navbar from "../../components/Navbar/Navbar";
import HabitTrackList from "../../components/HabitTrackList/HabitTrackList";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";

export default function Details() {
  return (
    <Provider store={store}>
      <Navbar />
      <HabitTrackList />
    </Provider>
  );
}
