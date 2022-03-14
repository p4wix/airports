import React from "react";
import { airports } from "../../data/graph";
import styles from "./AvailableFlights.module.scss";

const AvailableFlights = () => {
	return (
		<p className={styles.list}>
			Accessible travel locations:{" "}
			{airports.map((airport, idx, arr) => (
				<span key={idx}>
					{idx < arr.length - 1 ? `${airport}, ` : airport}
				</span>
			))}
		</p>
	);
};

export default AvailableFlights;
