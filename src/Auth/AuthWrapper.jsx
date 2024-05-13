import { createContext, useContext, useState } from "react";
import DashboardLayout from "../components/Dashboard/DashboardLayout";

const AuthContext = createContext();
export const AuthData = ()=> useContext(AuthContext);

export const AuthWrapper = () => {
  cosnt[(user, setUser)] = useState({ Email: "", Password: "",  isAuthenticated: false });

    const login = (email, password) =>{
        const storedPassword = localStorage.getItem("password");
        const storedEmail= localStorage.getItem("email");

        return new Promise((resolve, reject) =>{

            if(email === storedEmail){
                setUser({Email: email, Password: "", isAuthenticated: true});
                resolve("success")
            }
            else{
                reject("Username not found")
            }

            if(password === storedPassword){
                setUser({userName: username, Password: password, isAuthenticated: true});
                resolve("success")
            }
            else{
                reject("Password not found")
            }
        })
    }

    const Logout =()=>{
        setUser({...userName, ...Password, isAuthenticated:false})
    }

    // return (
    //     <AuthContext.Provider value={{user, login, Logout}}>
    //     <>
    //         <DashboardLayout/>
    //     </>
    //     </AuthContext.Provider>
    // )
};

// export default AuthWrapper
