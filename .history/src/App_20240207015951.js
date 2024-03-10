import './categories.styles.scss';
import CategoryItem from './components/category-item/category-item.component';
import Directory from './components/directory/directory.component';
import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';


const App = () => {


 return(
  <Routes>
    <Route path='/' element={<Home />} />
    
  </Routes>
 );
}

export default App;
