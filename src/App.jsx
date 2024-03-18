import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Login, Register, Hostpital, Donar, Inventory } from "./pages";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/routes/ProtectedRoute";
import PublicRoute from "./components/routes/PublicRoute";
function App() {

  return (
    <BrowserRouter>
      <ToastContainer autoClose={1000}/>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/auth/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="/auth/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/inventory" element={
          <ProtectedRoute>
            <Inventory />
          </ProtectedRoute>
        } />
        <Route path="/donar" element={
          <ProtectedRoute>
            <Donar />
          </ProtectedRoute>
        } />
        <Route path="/hospital" element={
          <ProtectedRoute>
            <Hostpital />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App