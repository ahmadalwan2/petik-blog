import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Blogs from "./components/Pages/Blogs/Blogs";
import DetailBlog from "./components/Pages/DetailBlog/DetailBlog";
import About from "./components/Pages/About.jsx/About";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import News from "./components/Pages/News/News";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Mynavbar/MyNavbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Blogs />} />
        <Route path="/posts/:id" element={<DetailBlog />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:portal/:index" element={<News />} />
        <Route path="/about" element={<About />} />
        {/* * itu digunakan untuk menghandling kalo rute tidak ada selain yang didefinisikan */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
