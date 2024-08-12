import React from 'react';
import { useFormik } from 'formik';
import { Await, useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { schema } from '../schema';

const LoginPage = () => {
   const navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            email:"",
            age:"",
            password:"",
            confirm_password:"",
        },
        onSubmit:async(values,actions)=>{

           await new Promise((resolve)=>setTimeout(resolve,2000));
          localStorage.setItem("user",JSON.stringify({...values,id:v4()}))
          navigate("/home");
        },
   validationSchema:schema,
    });
  return (
    <div>
        <div className="container">
            <div className="logo">
<img src="/public/coin-logo.png" alt="" width={100} />
<h2>Coinmaina</h2>
            </div>
            {/*forma alanı*/}
            <form onSubmit={formik.handleSubmit}>
            {inputs.map((data,key)=>(
                <InputField  formik={formik}data={data} key={key}/>
            ))}
            <button disabled ={formik.isSubmitting}type='submit'>Kaydol</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage;
const inputs=[
    {
label:"Email",
name:"email",
type:"email",
},
{
    label:"Yaş",
    name:"age",
    type:"number",
},
{
    label:"Şifre",
    name:"password",
    type:"password",
 },
 {
    label:"Şifre Onay",
    name:"confirm_password",
    type:"password",
 },];
 const InputField=({data,formik})=>{
const{label,name,type}=data;
    return(
        <div>
            <label>{label}</label>
            <input type={type} name={name} onChange={formik.handleChange} />
        {formik.touched[name]&&formik.errors[name]&&(
            <span>{formik.errors[name]}</span>
        )}
        </div>
    );
 };