import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import SignIn from './Pages/Login/SignIn/SignIn';
import SignUp from './Pages/Login/SignUp/SignUp';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path=':checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='signin' element={<SignIn></SignIn>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>

      </Routes>
    </div>
  );
}

export default App;
