import React from 'react'

const Signup = () => {
  return (
    <div>

      <h1>Welcome</h1>

      <div>
        <p>Already have an acccount <a onClick={()=>navigate('./Login')} href="Login">login</a></p>
      </div>

    </div>
  )
}

export default Signup