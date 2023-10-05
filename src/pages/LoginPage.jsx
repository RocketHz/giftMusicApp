import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';

const LoginPage = () => {

  const { reset, handleSubmit, register } = useForm()
  const { loginUser } = useAuth()

  const submit = data => {
    loginUser(data)
    reset({
      name: '',
      email: '',
      password: ''
    })
  }

  return (
    <div className='login_container'>
      <header className='login_img'>
        <img src="https://cdn.pixabay.com/photo/2020/11/03/10/41/present-5709346_640.png" alt="" />
      </header>
      <article>
        <form className='form_container' onSubmit={handleSubmit(submit)}>
        <h2 className='title_formItem'>Login</h2>
          <div className='form_items'>
            <label className='labels_items' htmlFor="email">Email</label>
            <input className='inputs_items' {...register('email')}type="email" id="email" />
          </div>
          <div className='form_items'>
            <label className='labels_items' htmlFor="password">Password</label>
            <input className='inputs_items' {...register('password')}type="password" id="password" />
          </div>
          <button className='btn_login'>Submit</button>
        </form>
        <p className='text-center'>Do you have an account? <Link to='/auth/register'>Go to register</Link></p>
      </article>
    </div>
  )
}

export default LoginPage