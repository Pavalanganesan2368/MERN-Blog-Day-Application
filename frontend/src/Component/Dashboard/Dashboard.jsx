import { ContextData } from "../../Context/ContextData";
import Header from "../Pages/Header/Header";
import Content from "../Pages/Content/Content";
import Footer from "../Pages/Footer/Footer";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Form from "../Pages/Content/Form";

const Dashboard = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen max-w-4xl mx-auto border-gray-500 border-l-2 border-r-2">
        <ContextData>
          <Header />
          <Outlet />
          <Footer />
        </ContextData>
      </main>
    </>
  );
};

export default Dashboard;
