import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<LandingPage />} />
				<Route exact path="/auth/login" element={<Login />} />
				<Route exact path="/auth/signup" element={<Signup />} />
			</Routes>
		</>
	);
}

export default App;
