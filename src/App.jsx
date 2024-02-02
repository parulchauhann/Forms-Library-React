import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [submit, setSubmit] = useState(false)

  const doneSubmit = (data) => {
    console.log(data)
    setSubmit(true)
  }

  return (
    <>
      <div id='form_section'>
        <form id='registeration_form' onSubmit={handleSubmit(doneSubmit)}>
          {submit ? <div id='success'>Registeration Done</div> : null}
          <div className='input_Section'>
            <input
              type="text"
              name="firstName"
              className='input_box'
              placeholder='First Name'
              {...register("firstName", { required: "First name is required" })}
            />

            <span>{errors.firstName?.message}</span>

            <input
              type="text"
              name="lastName"
              className='input_box'
              placeholder='Last Name'
              {...register("lastName", { required: "Last name is required" })}
            />

            <span>{errors.lastName?.message}</span>

            <input
              type="email"
              name="email"
              className='input_box'
              placeholder='Email'
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
            />

            <span>{errors.email?.message}</span>

            <input
              type="password"
              name="password"
              className='input_box'
              placeholder=' Password'
              {...register("password", {
                required: "Password must be entered",
                minLength: { value: 4, message: "Password should be more than 4 characters" },
                maxLength: { value: 10, message: "Password cannot be more than 20 characters" }
              })}
            />

            <span>{errors.password?.message}</span>

            <button type="submit" className='register_button'>Register</button>
          </div>
        </form>
      </div>
    </>)
}

export default App