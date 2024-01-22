import React from "react";
import classes from "./style.module.scss";
import { info } from "../../Store/Slice";
import { useState, useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";

const Content = () => {
  const dispatch = useDispatch();
  const user = useSelector(e => e.user.value);
  const [perinfo, setPer] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const emailvalidation = e => {
    const rgx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,10})$/i;
    return rgx.test(e);
  };

  const phonevalidation = e => {
    const rgx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
    return rgx.test(e);
  };

  const refName = useRef();
  const refEmail = useRef();
  const refPhone = useRef();

  useEffect(() => {
    if (refName.current) {
      dispatch(info({
        ...user,
        name: refName.current.value,
        email: refEmail.current.value,
        phone: refPhone.current.value,
        emailval: emailvalidation(refEmail.current.value),
        phoneval: phonevalidation(refPhone.current.value)
      }));
    }
  }, [perinfo.name, perinfo.email, perinfo.phone, user.nextClick]);

  useEffect(() => {
    const currentRefName = refName.current;
    const currentRefEmail = refEmail.current;
    const currentRefPhone = refPhone.current;

    dispatch(info({
      ...user,
      name: currentRefName?.value,
      email: currentRefEmail?.value,
      phone: currentRefPhone?.value,
      emailval: emailvalidation(currentRefEmail?.value),
      phoneval: phonevalidation(currentRefPhone?.value)
    }));
  }, [perinfo.name, perinfo.email, perinfo.phone, user.nextClick]);

  return (
  <>
    <div className={classes.container}>
        <div className={classes.text}>
          <h1>
            Personal Info
          </h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <div className={classes.text2}>
          <h5>
            Name
          </h5>
          {user.nextClick && (
            <span>{user.name.length < 3 && "This field is required"}</span>
          )}
          <Box
            component="form" sx={{'& > :not(style)': {width: '55ch' },}}
            noValidate
            autoComplete="on" 
          >
            <TextField ref={refName}  className={user.name.length < 3 && user.nextClick ? "erorr" : ""} onChange={e => setPer({ ...perinfo, name: e.target.value})} id="outlined-basic" label="Name" variant="outlined"/>
          </Box>

          <h5>
            Email Address
          </h5>
          {!user.emailValid && user.nextClick && (
              <span>
                {user.email == ""
                  ? "This field is required"
                  : "Invalid Email Address"}
              </span>
          )}
          <Box
            component="form" sx={{'& > :not(style)': {  width: '55ch' },}}
            noValidate
            autoComplete="on"
          >
            <TextField ref={refEmail} className= {!user.emailValid && user.nextClick ? "erorr" : ""} onChange={e =>setPer({ ...perinfo, email: e.target.value })} id="outlined-basic" label="Email Address" variant="outlined"/>
          </Box>

          <h5>
            Phone Number
          </h5>
          {!user.phoneValid && user.nextClick && (
            <span>This field is required</span>
          )}
          <Box
            component="form" sx={{'& > :not(style)': { mb: 3, width: '55ch' },}}
            noValidate
            autoComplete="on"
            ref={refPhone}
            className={!user.phoneValid && user.nextClick ? "erorr" : ""}
            onChange={e => {setPer({ ...perinfo, phone: e.target.value });}}
          >
            <TextField ref={refPhone} className={!user.phoneValid && user.nextClick ? "erorr" : ""} onChange={e => {setPer({ ...perinfo, phone: e.target.value });}} id="outlined-basic" label="Phone Number" variant="outlined"/>
          </Box>
          
        </div>
        
    </div>
    
  </>

  )
};

export default Content;
