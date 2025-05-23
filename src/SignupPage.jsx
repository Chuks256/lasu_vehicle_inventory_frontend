// SignupContainer.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import lasulogo from "./assets/lasulogo.png"
import lasu_off_image from "./assets/lasu_off_image.jpeg"


const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #defee0;
`;

const Left = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  background: url(${lasu_off_image}) no-repeat center center;
  background-size: cover;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  img {
    width: 50px;
    margin-right: 1rem;
  }

  h3 {
    font-weight: bold;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin: 1rem 0 0.25rem;
`;

const Input = styled.input`
 background-color: #cfe3cf;
  border: none;
  border-radius: 4px;
  height: 50px;
  padding: 0 12px;
  margin-bottom: 5px;
  font-size: 1rem;
  width: 370px;
`;

const Button = styled.button`
  background-color: ${props => props.secondary ? '#cfe2ce' : '#002900'};
  color: ${props => props.secondary ? '#000' : 'white'};
  padding: 1rem;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  width: 400px;
`;

const TermsText = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin-top: 1rem;
  margin-left:-150px;
`;

const FormParentContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin-left:90px;
margin-top:-20px;
`;

const BtnParentContainer = styled.div`
display:flex;
flex-direction:column;
text-align:center;
`;

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: '',
    pfNumber: '',
    faculty: '',
    department: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    const { fullName, pfNumber, faculty, department } = form;
    if (!fullName || !pfNumber || !faculty || !department) {
      toast.error("Please fill out all fields");
    } else {
      setStep(2);
    }
  };

  const handleSubmit = () => {
    const { phone, password, confirmPassword } = form;
    if (!phone || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Registration Complete!");
    // Do actual submission here
  };


  return (
    <Container>
      <Left>
        <FormParentContainer>
            <Logo>
          <img src={lasulogo} alt="Logo" />
          <h3>LASUVIS</h3>
        </Logo>

        {step === 1 ? (
          <>
            <h4>Let's Get Started</h4>
            <Label>FullName</Label>
            <Input name="fullName" value={form.fullName} onChange={handleChange} />
            <Label>Pf Number</Label>
            <Input name="pfNumber" value={form.pfNumber} onChange={handleChange} />
            <Label>Faculty</Label>
            <Input name="faculty" value={form.faculty} onChange={handleChange} />
            <Label>Department</Label>
            <Input name="department" value={form.department} onChange={handleChange} />
            <Button onClick={nextStep}>Next</Button>
          </>
        ) : (
          <>
            <h4>You are almost Done</h4>
            <Label>Phone No</Label>
            <Input name="phone" value={form.phone} onChange={handleChange} />
            <Label>Password</Label>
            <Input type="password" name="password" value={form.password} onChange={handleChange} />
            <Label>Confirm Password</Label>
            <Input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
            
            <BtnParentContainer>
                 <TermsText>
              By signing up you agree to all of our terms and conditions
            </TermsText>
            <Button onClick={handleSubmit}>Proceed</Button>
            <Button secondary onClick={() => setStep(1)}>Back</Button>
            </BtnParentContainer>
          </>
        )}
            </FormParentContainer>
      </Left>
      <Right />
      <ToastContainer />
    </Container>
  );
};

export default SignupPage;
