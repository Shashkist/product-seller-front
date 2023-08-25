import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AdminPage from './components/admin/AdminPage';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/register/RegisterPage';
import NotFound from './components/not-found/NotFound';
import UnauthorizedPage from './components/unauthorized/UnauthorizedPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <div className='container'>
          <Routes>
            <Route path='/home'  element={<HomePage></HomePage>}></Route>
            <Route path='/admin'  element={<AdminPage/>}></Route>
            <Route path='/home'  element={<HomePage/>}></Route>
            <Route path='/home'  element={<HomePage/>}></Route>
            <Route path='/login'  element={<LoginPage/>}></Route>
            <Route path='/signUp'  element={<RegisterPage/>}></Route>
            <Route path='/404'  element={<NotFound/>}></Route>
            <Route path='/400'  element={<UnauthorizedPage/>}></Route>
            <Route path='*'  element={<NotFound/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
