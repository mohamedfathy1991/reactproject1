import { RouterProvider, createBrowserRouter ,createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contacts from './contacts/Contacts';
import StartFrame from './startFramework/StartFrame';
import Notfound from './notfound/Notfound';


let routes= createHashRouter([
  {path:"*",element:<Notfound/>},
  {path:'',element:<Layout/>,children:[
  
  
  {index:true,element:<StartFrame/>},
  {path:'about',element:<About/>},
{  path:'contact',element:<Contacts/>},
{path:'portfolio',element:<Portfolio/>}
]}])

function App() {
  return (

    <RouterProvider  router={routes}>
            <Layout/>


    </RouterProvider>
   
     
   
  );
}

export default App;
