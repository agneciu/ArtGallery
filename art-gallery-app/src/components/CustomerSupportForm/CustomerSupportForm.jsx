import "./CustomerSupportForm.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";
import Topic from "../Topic/Topic";
import { useState } from "react";

const CustomerSupportForm = ({ savedForm }) => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const onSave = () => {
    const data = {
      fullName: fullName,
      email: email,
      message: message,
    };
    savedForm.push(data);
    console.log(savedForm);
  };

  const getFullName = (value) => {
    setFullName(value);
    
  };

  const getEmail = (value) => {
    setEmail(value);
  };

  const getMessage = (value) => {
    setMessage(value);
  };

  return (
    <div className="support-form">
  
      <Topic
        title="Contact customer support"
        description="We take every request into a consideration and we will reach out to you as fast as possible"
      ></Topic>
   
      <Input 
        onChange={getFullName}
        required
        placeholder="Last Name"
        type="text"
        label="Full Name: "
        id={fullName}
      ></Input>
      <Input
        onChange={getEmail}
        required
        placeholder="Email"
        type="email"
        label="Email: "
        id={email}
      ></Input>
      <TextArea
        onChange={getMessage}
        name="Your message to us"
        id={message}
        placeholder=" Your message to us"
      ></TextArea>
      <Button label="Save" onClick={onSave}></Button>
    </div>
  );
};

export default CustomerSupportForm;
