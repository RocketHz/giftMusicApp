import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';

const RegisterPage = () => {

  const { reset, handleSubmit, register } = useForm()
  const { registerUser } = useAuth()

  const submit = data => {
    registerUser(data)
    reset({
      name: '',
      email: '',
      password: ''
    })
  }

  return (
    <div className='register_container'>
      <header className='register_img'>
        <img src="https://cdn.pixabay.com/photo/2019/10/09/06/06/gift-4536515_1280.png" alt="" />
      </header>
      <article>
        <form className='form_container' onSubmit={handleSubmit(submit)}>
        <h2 className='title_formItem'>Register</h2>
          <div className='form_items'>
            <label className='labels_items' htmlFor="email">Email</label>
            <input className='inputs_items' {...register('email')}type="email" id="email" />
          </div>
          <div className='form_items'>
            <label className='labels_items' htmlFor="name">name</label>
            <input className='inputs_items' {...register('name')}type="text" id="name" />
          </div>
          <div className='form_items'>
            <label className='labels_items' htmlFor="password">Password</label>
            <input className='inputs_items' {...register('password')}type="password" id="password" />
          </div>
          <button className='btn_register'>Submit</button>
        </form>
        <p className='text-center'>Are you register? <Link to='/auth/login'>Go to login</Link></p>
      </article>
    </div>
  )
}

export default RegisterPage