import React, { useState } from "react";
import "./LoginPage.css";
import LogoImg from "../Image/Dezaina.hub.png";
import LoginImg from "../Image/4.jpg";
import axios from "../../../../axios";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    try {
      const response = await axios.post("/login", { email, password });
      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
      console.log("Success!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="LoginSignupPageMain">
      <div className="LoginSignupPage">
        <div className="LoginSignupPage-Content">
          <div className="LoginSignupPageContent-Logo">
            <img className="LoginSignupPageContentLogo-Img" src={LogoImg} />
          </div>
          <div className="LoginSignupPageContent-FormContainer">
            <form className="LoginSignupPageContent-Form">
              <div className="LoginSignupPageContentForm-HeadBox">
                <h1 className="LoginSignupPageContentForm-Head">
                  Login to your account
                </h1>
                <p className="LoginSignupPageContentForm-Content">
                  Begin Your Journey to a Better Experience
                </p>
              </div>
              <div className="LoginSignupPageContentForm-InputBox">
                <input
                  className="LoginSignupPageContentForm-input"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                ></input>
                <input
                  className="LoginSignupPageContentForm-input"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                ></input>
              </div>
              <div className="LoginSignupPageContentForm-ButtonBox">
                <button
                  className="LoginSignupPageContentForm-Verifybutton"
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </button>
                <button className="LoginSignupPageContentForm-Googlebutton">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.29 9.09808C17.2705 8.89676 17.1789 8.71022 17.0333 8.57495C16.8877 8.43967 16.6985 8.36538 16.5027 8.3666H10.4982C10.0608 8.3666 9.70294 8.73645 9.70294 9.18849V10.5939C9.70294 11.046 10.0608 11.4158 10.4982 11.4158H14.085C13.9975 12.1719 13.5204 13.3144 12.4626 14.0787C11.7866 14.5636 10.8879 14.9006 9.70294 14.9006C9.64727 14.9006 9.59955 14.9006 9.54388 14.8924C7.51588 14.8266 5.79805 13.4212 5.17772 11.4898C5.00569 10.9656 4.91706 10.416 4.91527 9.86244C4.91527 9.29534 5.01071 8.74467 5.16976 8.2351C5.21748 8.08716 5.27315 7.93922 5.33678 7.79128C6.06845 6.08997 7.66699 4.89001 9.54388 4.83248C9.5916 4.82426 9.64727 4.82426 9.70294 4.82426C10.8402 4.82426 11.6912 5.21055 12.2876 5.63793C12.5978 5.85984 13.0114 5.81053 13.2818 5.53931L14.3872 4.42154C14.7372 4.06813 14.7053 3.46815 14.3077 3.17227C13.0432 2.21066 11.5003 1.64355 9.70294 1.64355C9.64727 1.64355 9.59955 1.64355 9.54388 1.65177C8.09752 1.67825 6.68579 2.11354 5.46186 2.91042C4.23792 3.7073 3.24851 4.83534 2.60096 6.17216C2.06016 7.28993 1.75 8.5392 1.75 9.86244C1.75 11.1857 2.06016 12.4349 2.60096 13.5527H2.60892C3.25555 14.8885 4.24366 16.016 5.46613 16.8128C6.6886 17.6097 8.0988 18.0455 9.54388 18.0731C9.59955 18.0813 9.64727 18.0813 9.70294 18.0813C11.8502 18.0813 13.6556 17.3498 14.9678 16.0924C16.4709 14.654 17.3378 12.55 17.3378 10.0433C17.3378 9.68984 17.3219 9.38574 17.29 9.09808Z"
                      fill="#2F455C"
                    />
                  </svg>

                  <span>Sign up with google</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="LoginSignupPage-ImageContainer">
          <button className="LoginSignupPage-ImgButton">Signup</button>
          <div className="LoginSignupPage-Imgbox">
            <img className="LoginSignupPage-Img" src={LoginImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
