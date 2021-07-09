import React from 'react';
import { useForm } from "react-hook-form";

import './Form.css';

function Form() {

  const onSubmit = (data) => {
    console.log(data);
    alert("Thank you for your interest. I am still working on this component. Please email me at patgrady64@gmail.com");
  }

  const {register, handleSubmit} = useForm();

    return (
      <form className="my-form" onSubmit={handleSubmit(onSubmit)}>
        <p className="more-info">Want to leave a comment</p>
        <p className="more-info">or know more about me?</p>
        <input className="in" type="text" placeholder="Name" {...register("name")} disabled/>
        <input className="in" type="text" placeholder="Email" {...register("email")} disabled/>
        <textarea placeholder="Comment" cols="5" rows="10" {...register("comment")} disabled/>
        <button disabled>Send</button>
        <div className="error">Please check my contact information on my resume to contact me. Thank you.</div>
      </form>
    )
}

export default Form
