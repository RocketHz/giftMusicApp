import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentialsSlice } from "./store/slices/credentials.slice";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import TrackPage from "./pages/TrackPage";
import ArtistPage from "./pages/ArtistPage";

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.removeItem('token')
    const username = localStorage.removeItem('username')
    const email = localStorage.removeItem('email')
    const obj = { token, username, email }
    dispatch(setCredentialsSlice(obj))
  }, [])
  

  return (
    <div>
      <Routes>
        <Route path='/auth/login' element={<LoginPage/>}/>
        <Route path='/auth/register' element={<RegisterPage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/track/:id' element={<TrackPage/>}/>
          <Route path='/artist/:id' element={<ArtistPage />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
