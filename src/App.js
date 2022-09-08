import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import SignInScreen from "./components/SignInScreen/SignInScreen";
import SignUpScreen from "./components/SignUpScreen/SignUpScreen";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import InOutScreen from "./components/InOutScreen/InOutScreen";

export default function App(){
    return(
        <> 
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInScreen />} />
                    <Route path="/sign-up" element={<SignUpScreen />} />
                    <Route path="/home" element={<HomeScreen />} />
                    <Route path="/new-entry" element={<InOutScreen />} />
                    <Route path="/new-output" element={<InOutScreen />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}