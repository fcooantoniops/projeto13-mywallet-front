import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import SignUpScreen from "./components/SignUpScreen";

export default function App(){
    return(
        <> 
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUpScreen />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}