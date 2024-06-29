import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import AuthForm from "./AuthForm";

const Body = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <AuthForm />,
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
