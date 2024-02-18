import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

const App = () => {
    return(
        <>
            <div className="Main">
                <Routes>
                    <Route path="/" Component={HomePage} />
                </Routes>
            </div>
        </>
    )
}


export default App;
