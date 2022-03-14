import React from "react";
import styles from "./Home.module.scss";
import Main from "../../components/Main/Main";
import AvailableFlights from "../../components/AvailableFlights/AvailableFlights";

const Home = () => {
	return (
		<>
			<h1 className={styles.title}>Airlines XYZ</h1>
			<div>
				<AvailableFlights />
			</div>
			<div>
				<Main />
			</div>
		</>
	);
};

export default Home;
