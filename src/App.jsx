import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Account from './pages/Account'
import SecureRoute from './components/SecureRoute'

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/Login' element= {<Login/>}/>
        <Route path='/SignUp' element= {<SignUp/>}/>
        <Route path='/Account' element= {<SecureRoute> <Account/> </SecureRoute>   }/>

      </Routes>
    </AuthContextProvider>
   
    </>
  );
}

export default App;

// https://prime-clone-react.web.app
