import './App.css'
import Login from './Components/login/login'
import Dashboard from './Components/analysis_Dashboard/dashboard'
import CreateAccount from './Components/createAccount/createAccount'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashBoards from "./Components/userGraphs/userDashBoards"
import PostDashboard from './Components/postGraphs/postDashboard'
import LoginContextProvider from './Components/login/loginContextProvider';

function App() {
  return (
    <>
    <LoginContextProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/dashboard' element={<Dashboard />}>
    <Route  path='user' element={<UserDashBoards/>}/>
    <Route  path='post' element={<PostDashboard/>}/>
    </Route>
    <Route path='/' element={<Login />}/>
    <Route path='/createAccount' element={<CreateAccount/>}/>
    </Routes> 
    </BrowserRouter>
    </LoginContextProvider>
    </>
  )
}

export default App
