import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GlobalStyle from "./globalStyle";
import SignInScreen from "./components/SignInScreen/SignInScreen";
import SignUpScreen from "./components/SignUpScreen/SignUpScreen";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import InOutScreen from "./components/InOutScreen/InOutScreen";
import ContextLogin from "./contexts/ContextLogin";

export default function App(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [token, setToken] = useState("");

    return(
        <> 
            <GlobalStyle />
            <ContextLogin.Provider value={{email, setEmail, password, setPassword, name, setName, token, setToken}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<SignInScreen />} />
                        <Route path="/sign-up" element={<SignUpScreen />} />
                        <Route path="/home" element={<HomeScreen />} />
                        <Route path="/new-entry" element={<InOutScreen />} />
                        <Route path="/new-output" element={<InOutScreen />} />
                    </Routes>
                </BrowserRouter>
            </ContextLogin.Provider>
        </>
    );
}