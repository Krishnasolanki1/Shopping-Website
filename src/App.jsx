
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Mynavbar from './Components/Mynavbar'
import Cards from './Components/Cards';
import ProductCartDetails from './Components/ProductDetels';
import { Route, Routes } from 'react-router';


function App() {
  

  return (
    <>
    <Mynavbar/>
     {/* <Cards/> */}
      {/* <ProductCartDetails/> */}
      <Routes>
        <Route path='/' Component={Cards}   />
        <Route path='/productdetails/:id' Component={ProductCartDetails}   />
        <Route path='*'   element={<h1>error 404</h1>}  />
      </Routes>
    </>
  )
}

export default App
