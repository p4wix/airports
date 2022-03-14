import React, { useEffect, useState } from "react";
import { adjacencyList } from "../../data/graph";
import styles from "./RouteSteps.module.scss";

const tab = [];
let count = 1;
function bfs(start, end) {
	const visited = new Set();

	const queue = [start];

	while (queue.length > 0) {
		const airport = queue.shift();

		const destinations = adjacencyList.get(airport);

		for (const destination of destinations) {
			if (destination === end) {
				console.log(`${end} found in ${count} steps`);
				tab.push(destination);
				return;
			}

			if (!visited.has(destination)) {
				visited.add(destination);
				queue.push(destination);
				++count;
				tab.push(destination);
				console.log(destination);
			}
		}
	}
}

const RouteSteps = ({ origin, destination }) => {
	const [visitedAirports, setVisitedAirports] = useState([]);
	useEffect(() => {
		bfs(origin, destination);
		console.log(tab);
		setVisitedAirports(tab);
	}, []);
	return (
		<>
			<div className={styles.wrapper}>
				<h2>The airports you need to fly through</h2>
				{visitedAirports.map((item, idx) => (
					<p key={idx}>{item}</p>
				))}
			</div>
		</>
	);
};

export default RouteSteps;
