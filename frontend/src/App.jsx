import "./App.css";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Component/ProtectRoute/ProtectedRoute";
import Dashboard from "./Component/Dashboard/Dashboard";
import PublicRoute from "./Component/ProtectRoute/PublicRoute";
import Content from "./Component/Pages/Content/Content";
import Form from "./Component/Pages/Content/Form";
import Post from "./Component/Pages/Content/Post";
import useTitle from "./Hooks/useTitle";
import ContentPage from "./Component/Dashboard/ContentPage";
import Home from "./Component/Dashboard/Home";
import About from "./Component/Dashboard/About";
import AllPost from "./Component/Pages/Content/AllPost";

function App() {
  useTitle("Blog-Day"); //To Assign the Title in the tab for display the application title
  return (
    <>
      <Routes>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Content />} />
          <Route path="form" element={<Form />} />
          <Route path=":id" element={<Post />} />
          <Route path="content" element={<ContentPage />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="allPost" element={<AllPost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
