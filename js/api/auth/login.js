import { BASE_URL } from "../../constants/api.js";

export async function login(data) {
	const url = `${BASE_URL}/auth/login`;
	const body = JSON.stringify(data);

	const response = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
		body,
	});

	if (response.ok) {
		const json = await response.json();
		return json;
	}

	throw new Error("There was an error logging in");
}
