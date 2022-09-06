import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import SignInScreen from "./components/SignInScreen/SignInScreen";
import SignUpScreen from "./components/SignUpScreen/SignUpScreen";

export default function App(){
    return(
        <> 
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInScreen />} />
                    <Route path="/sign-up" element={<SignUpScreen />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}