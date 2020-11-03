import "./home.css";

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import foodSalad from "../../images/food_green_salad.jpg";
import PlatformFeatures from "../../components/PlatformFeatures/PlatformFeatures";
import Showcase from "../../components/Showcase/Showcase";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/UI/Modal/Modal";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

const Home = (props) => {
  const [modalMode, setModalMode] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const loginClickHandler = () => {
    setModalMode("login");
    setModalVisible(true);
  };

  const signupClickHandler = () => {
    setModalMode("signup");
    setModalVisible(true);
  };
  let modalView = undefined;
  if (modalMode === "login") {
    modalView = <Login {...props} />;
  } else if (modalMode === "signup") {
    modalView = <Signup {...props} />;
  }
  return (
    <>
      {/* Header */}
      <div className="header">
        <div className="grid">
          <Navbar
            loginClickHandler={loginClickHandler}
            signupClickHandler={signupClickHandler}
          />
          <img src={foodSalad} alt="green salad" />
          <h2 className="lg text-center">
            Order food from favourite restaurants near you
          </h2>
        </div>
      </div>
      {/* Platform Features */}
      <PlatformFeatures />
      {/* Showcase area */}
      <Showcase />
      {/* Footer */}
      <Footer />

      {/* modal */}
      <Modal show={modalVisible} closeModal={() => setModalVisible(false)}>
        {modalView}
      </Modal>
    </>
  );
};

export default Home;
