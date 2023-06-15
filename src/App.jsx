import Home from "./User/Home/Home";
import UserLayout from "./User/UserLayout";
import Aboutus from "./User/AboutUs/Aboutus";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Blog from "./User/Blog/Blog";
import SingleBlog from "./User/Blog/SingleBlog";
import AdminLayout from "./Admin/AdminLayout";
import AdminHome from "./Admin/AdminHome";
import EditBlog from "./Admin/Blog/EditBlog";
import AddBlog from "./Admin/Blog/AddBlog";
import Login from "./Auth/Login";



function app() {
  return (
    <>
      <Router>
        <Routes>
        
        <Route path="/login" element={<Login />}/>
          <Route path="" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<Aboutus/>} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="single-blog/:id" element={<SingleBlog />} />
          </Route>
          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="home" element={<AdminHome />}/>
            <Route path="add" element={<AddBlog />} />
          <Route path="edit/:id" element={<EditBlog />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default app;
