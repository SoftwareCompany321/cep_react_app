import {
  Route, Routes
} from "react-router-dom";

//toastify  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./components/Layout";
import Login from "./components/Login";
import { PageNotFound } from "./pages/404Page";
import Home from "./pages/Home";

const App = () => {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
