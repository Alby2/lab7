import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import Apropos from "./pages/Apropos";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

const router = createBrowserRouter([{
  path:"/",
  element:<Home />
},
{path:"/accueil",
element:<Home />
},{
  path:"/blogs",
  element:<Blogs />
},{
  path:"/blog",
  element:<Blog />
},{
  path:"/apropos",
  element:<Apropos />
},{
  path:"*",
  element:<Page404 />
}])
function App() {
  return (
  
   <RouterProvider router={router} />
  );
}

export default App;
