import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './style.css';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const {currentUser}= useContext(AuthContext);
  // console.log(currentUser);

  const ProtectedRoutes= ({children}) =>{
    if(!currentUser)
    {
      return <Navigate to="/login" />
    }

    return children;
  }

  return (
    
    <Router>
      <Routes>
        <Route path='/'>

        <Route index element={<ProtectedRoutes><Home/></ProtectedRoutes>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
