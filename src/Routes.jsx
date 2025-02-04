import { useRoutes } from "react-router";  
import Landing from "./pages/Landing";  
  
const ProjectRoutes = () => {  
  let element = useRoutes([  
    { path: "/", element: <Landing /> },  
    { path: "*", element: <Landing /> },  
    {  
      path: "landing",  
      element: <Landing />,  
    },  
  ]);  
  return element;  
};  
  
export default ProjectRoutes;