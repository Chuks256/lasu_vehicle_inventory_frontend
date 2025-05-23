import React, { useState } from "react";
import styled from "styled-components";
import lasu_off_image from "./assets/lasu_off_image.jpeg"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import lasulogo from "./assets/lasulogo.png"
import { Route, Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  background-color: #e6ffe6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  img {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }

  span {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 1.5rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin: 10px 0 5px 0;
`;

const Input = styled.input`
  background-color: #cfe3cf;
  border: none;
  border-radius: 6px;
  height: 45px;
  padding: 0 12px;
  margin-bottom: 5px;
  font-size: 1rem;
  width: 370px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.85rem;
  margin-bottom: 12px;
`;

const PasswordWrapper = styled.div`
  position: relative;
`;

const ToggleIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.2rem;
  user-select: none;
`;

const Button = styled.button`
  background-color: #002400;
  color: white;
  border: none;
  padding: 17px;
  width: 64.5%;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Divider = styled.div`
  text-align: center;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

const SignUpPrompt = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const SignUpButton = styled(Button)`
  background-color: #a8f8a8;
  color: #003300;
`;

const RightPanel = styled.div`
  flex: 1;
  background: url(${lasu_off_image}) no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    height: 200px;
    background-position: center top;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const InputContainer=styled.div`
display:flex;
flex-direction:column;
gap:0.5em;
`;

const ParentContainer=styled.div`
display:flex;
flex-direction:column;
gap:1em;
`;

const SignupBtnContainer = styled.div`
display:flex;
flex-direction:column;
text-align:center;
justif-content:center;
align-items:center;
`;

const LeftPanelContainer =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin-left:120px;
`;


const SignInPage = () => {
  const [pfNumber, setPfNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ New loading state
  // const apiUrl = "https://vehicle-inventory-backend.onrender.com/api/signin_user";

  const apiUrl="http://localhost:4040/api/signin_user"

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validate = () => {
    const newErrors = {};
    if (!pfNumber.trim()) newErrors.pfNumber = "Pf Number is required";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true); // ✅ Show "Processing..."

      try {
        const response = await fetch(apiUrl, {
          method: "POST", // ✅ Use POST instead of GET
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pf_number: pfNumber,
            user_password: password,
          }),
        });

        const data = await response.json();
        if(data.msg=="Account_sucessfully_logged_in"){
        toast.success("Signin successful",{autoClose:2000});
        locaStorage.setItem("authorization",data.authorization);
        navigate("/dashboard");
        }
      
        if(data.msg=="Invalid Credentials provided"){
        toast.error("Incorrect Pf Number or Password",{autoClose:2000});
        }
      
        if(data.msg=="Account is not approved yet, contact the admin"){
        toast.error("account not approved",{autoClose:2000});
        }
      } catch (error) {
        console.error("Login failed", error);
        toast.error("Something went wrong. Please try again.", {
          autoClose: 3000,
        });
      } finally {
        setIsSubmitting(false); // ✅ Reset button
      }
    }
  };

  return (
    <Container>
      <LeftPanel>
        <LeftPanelContainer>
          <Logo>
            <img src={lasulogo} alt="LASUVIS logo" />
            <span style={{ fontSize: "15px" }}>LASUVIS</span>
          </Logo>
          <Title>Welcome Back</Title>
        </LeftPanelContainer>

        <form
          style={{
            display: "flex",
            gap: "2em",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <ParentContainer>
            <InputContainer>
              <Label>Pf Number</Label>
              <Input
                type="text"
                value={pfNumber}
                onChange={(e) => setPfNumber(e.target.value)}
                placeholder="Enter PF Number"
              />
              {errors.pfNumber && <ErrorText>{errors.pfNumber}</ErrorText>}
            </InputContainer>

            <InputContainer>
              <Label>Password</Label>
              <PasswordWrapper>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                />
                <ToggleIcon onClick={toggleVisibility}>
                  {showPassword ? "🙈" : "👁️"}
                </ToggleIcon>
              </PasswordWrapper>
              {errors.password && <ErrorText>{errors.password}</ErrorText>}
            </InputContainer>
          </ParentContainer>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Sign-in"}
          </Button>
        </form>

        <Divider>Or</Divider>
        <SignupBtnContainer>
          <SignUpPrompt>I don’t have an account?</SignUpPrompt>
          <SignUpButton>
            <Link to="/sign-up" style={{ color: "#002400" }}>
              Sign-up
            </Link>
          </SignUpButton>
        </SignupBtnContainer>

        <ToastContainer position="top-center" />
      </LeftPanel>
      <RightPanel />
    </Container>
  );
};

export default SignInPage;