import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.scss";
import { airports } from "../../data/graph";

const Main = () => {
	const [origin, setOrigin] = useState("");
	const [destination, setDestination] = useState("");

	const handleChangeOriginAirport = (e) => {
		setOrigin(e.target.value);
	};

	const handleChangeDestinationAirport = (e) => {
		setDestination(e.target.value);
	};

	return (
		<>
			<hr />
			<h2 className={styles.title}>Choose your flight</h2>
			<div className={styles.wrapper}>
				<select
					name="origin"
					id="origin"
					className={styles.origin}
					onChange={handleChangeOriginAirport}
				>
					<option value="DEFAULT" hidden>
						Choose a flight ...
					</option>
					{airports.map((airport, idx) => (
						<option key={idx} value={airport}>
							{airport}
						</option>
					))}
				</select>
				<select
					name="destination"
					id="destination"
					className={styles.destination}
					onChange={handleChangeDestinationAirport}
				>
					<option value="DEFAULT" hidden>
						Choose a flight ...
					</option>
					{airports.map((airport, idx) => (
						<option key={idx} value={airport}>
							{airport}
						</option>
					))}
				</select>
				<button className={styles.btn} type="submit">
					<Link to="/result" state={{ origin, destination }}>
						Szukaj połączenia
					</Link>
				</button>
			</div>
		</>
	);
};

export default Main;
