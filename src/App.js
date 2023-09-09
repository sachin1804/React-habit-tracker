import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
// import { useState } from "react";

function App() {
  // const [list, setList] = useState([]);

  // const addHabit = (habit) => {
  //   setList([habit, ...list]);
  //   console.log(list);
  // };

  // const handleDelete = (index) => {
  //   let newList = list.filter((habit, i) => i !== index);
  //   setList(newList);
  // };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/details", element: <Details /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
