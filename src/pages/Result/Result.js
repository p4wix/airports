import React from "react";
import { useLocation } from "react-router-dom";
import RouteSteps from "../../components/RouteSteps/RouteSteps";
import styles from "./Result.module.scss";

const Result = () => {
	const location = useLocation();
	const { origin, destination } = location.state;
	return (
		<>
			<h1 className={styles.title}>
				Flight from {origin} to {destination}
			</h1>
			<hr />
			<RouteSteps origin={origin} destination={destination} />
		</>
	);
};

export default Result;
