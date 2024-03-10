import './categories.styles.scss';
import CategoryItem from './components/category-item/category-item.component';
import Directory from './components/directory/directory.component';
import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';

const Shop =() =>{
  return(
    <h1>SHop from me</h1>
  )
}

const App = () => {

 
 return(
  <Routes>
    <Route path='/home' element={<Home />} >
      <Route path='/home/shop' element={<Shop/>} />
    </Route>

  </Routes>
 );
}

export default App;
