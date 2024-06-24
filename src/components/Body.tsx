import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default Body;
