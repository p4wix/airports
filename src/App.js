import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Result from "./pages/Result/Result";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="result" element={<Result />} />
			</Routes>
		</div>
	);
}

export default App;
