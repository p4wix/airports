// The data
const airports =
	"ATH BSL BFS BLQ BTS BRS CRL BUD DUB EDI EIN GLA HAM CTA KEF CGN SUF LCA LPL LIS LTN STN MAD".split(
		" "
	);

const routes = [
	["ATH", "EDI"],
	["ATH", "GLA"],
	["ATH", "CTA"],
	["BFS", "CGN"],
	["BFS", "LTN"],
	["BFS", "CTA"],
	["BTS", "STN"],
	["BTS", "BLQ"],
	["CRL", "BLQ"],
	["CRL", "BSL"],
	["CRL", "LTN"],
	["DUB", "LCA"],
	["LTN", "DUB"],
	["LTN", "MAD"],
	["LCA", "HAM"],
	["EIN", "BUD"],
	["EIN", "MAD"],
	["HAM", "BRS"],
	["KEF", "LPL"],
	["KEF", "CGN"],
	["SUF", "LIS"],
	["SUF", "BUD"],
	["SUF", "STN"],
	["STN", "EIN"],
	["STN", "HAM"],
	["STN", "DUB"],
	["STN", "KEF"],
];

// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
	adjacencyList.set(airport, []);
}

// Add egde undirected
function addEgde(origin, destination) {
	adjacencyList.get(origin).push(destination);
	adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach((route) => addEgde(...route));

export { airports, adjacencyList };
