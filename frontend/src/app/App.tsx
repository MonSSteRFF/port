import { useEffect, useState } from "react";

export const App = () => {
	const [response, setResponse] = useState<string>("");

	useEffect(() => {
		fetch("http://localhost:3000/api/").then((res) => {
			res.text().then((text) => {
				setResponse(text);
			});
		});
	}, []);

	return (
		<>
			<h1>app</h1>
			<p>text: {response}</p>
		</>
	);
};
