import Router from './routers/router';
import { RouterProvider } from 'react-router';
const App = () => {
 
  return (
    <div className="">
     <RouterProvider router={Router}/>
    </div>
  )
};

export default App;
