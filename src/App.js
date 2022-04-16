import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path=':checkout' element={<CheckOut></CheckOut>}></Route>
      </Routes>
    </div>
  );
}

export default App;
