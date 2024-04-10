import React from 'react'
import Navbar from '../../components/navbar/Navbar'


const Register = () => {
  return (
    <div>
    <Navbar />
        <div className='childContainer mx-auto left-0 right-0 bg-black bg-opacity-20 w-3/12 mt-[110px] rounded-md'>
            <h1 className='text-3xl font-bold p-3'>Register</h1>
            <div className='form p-4 gap-5'>
                <h1 className='mt-6 text-xl font-semibold'>Your Name</h1>
                <input className='p-2 w-full rounded-md' type='text' placeholder='Name here' />
                <h1 className='mt-3 text-lg font-semibold'>Your Number</h1>
                <input className='p-2 w-full rounded-md' type='text' placeholder='+91' />
                <h1 className='mt-3 text-lg font-semibold'>Your E-mail</h1>
                <input className='p-2 w-full rounded-md' type='text' placeholder='Email here' />
                <div className='mt-5'>
                    <button className='bg-[#003B95] text-white font-semibold w-full p-3 text-lg rounded-sm hover:scale-110 transition duration-500'>Register</button>
                </div>
                <p className='mt-2 cursor-pointer'>Already have an account? <b>Sign in</b> now!</p>
            </div>
        </div>
        
    </div>
  )
}

export default Register