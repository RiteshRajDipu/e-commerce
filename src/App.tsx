import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./store";


export default function App() {
  return (
   <>
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<ProtectedRoute />}>
           <Route path="/home" element={<Dashboard />} />
           <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
      </Provider>
    </BrowserRouter>
   </>
  )
}