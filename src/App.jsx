import Banner from "./assets/components/Banner.jsx"
import Footer from "./assets/components/Footer.jsx"
import Nav from "./assets/components/Nav.jsx"
import SignUp from "./assets/components/loginsignup/Signup.jsx"
import Login from "./assets/components/loginsignup/Login.jsx"
import Gender from "./assets/components/formhandler/formComponents/Gender.jsx"


function App() {
  

  return (
    <>
      <div className="bg-white">

      <Nav />
      <Banner />
      <Footer />
      <SignUp />
      <Login />
      <br/>
      <br/>
      <br/>
      <br/>


      <Gender/>
     
      </div>
    </>
  )
}

export default App
