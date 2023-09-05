// import { register } from "../../api/auth/index.js";
import makeApiCall from "../../api/makeApiCall.js";
import createOptions from "../../api/createOptions.js";
import { displayMessage } from "../../ui/common/index.js";

export function setRegisterListener() {
	const form = document.querySelector("#registerForm");

	if (form) {
		form.addEventListener("submit", async (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);
			const profile = Object.fromEntries(formData.entries());

			const endpoint = "auth/register";
			const method = "POST";

			const options = createOptions(method, profile);

			const { error } = await makeApiCall(endpoint, options);

			if (error) {
				return displayMessage("danger", error, "#message");
			}

			displayMessage("success", `You have successfully registered, please <a href="/">login</a>.`, "#message");

			form.reset();

			// try {
			// 	await register(profile);
			// 	displayMessage("success", 'Successfully registered. You can now <a href="#">log in</a>', "#message");
			// 	form.reset();
			// } catch (error) {
			// 	displayMessage("danger", error.message, "#message");
			// 	console.log(error);
			// }
		});
	}
}
