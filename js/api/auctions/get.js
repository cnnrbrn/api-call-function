import { BASE_URL } from "../../constants/api.js";
import handleErrors from "../handleErrors.js";

export async function get() {
	const url = `${BASE_URL}listings`;
	const response = await fetch(url);

	const json = await response.json();

	if (response.ok) {
		return json;
	}

	handleErrors(json);
}
