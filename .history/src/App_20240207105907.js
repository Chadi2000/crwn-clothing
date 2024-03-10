import './categories.styles.scss';
import { Outlet } from 'react-router-dom';
import Directory from './components/directory/directory.component';
import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';

const Navigation = () =>{
  return (
    <div>
      <div>
        <h1>I am the Navigation bar</h1>
      </div>
      <Outlet />
    </div>
  )
}

const Shop =() =>{
  return(
    <h1>SHop from me</h1>
  )
}

const App = () => {

 
 return(
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route path='home' element={<Home />} />
      <Route path='shop' element={<Shop/>} />

    </Route>

  </Routes>
 );
}

export default App;
