import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Tooldetail from "./Pages/Tooldetail";


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tooldetail/:id' element={<Tooldetail />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
