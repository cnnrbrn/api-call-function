import { displayAuctions } from "../../ui/templates/auctions/index.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import createOptions from "../../api/createOptions.js";
import makeApiCall from "../../api/makeApiCall.js";

export async function getAuctions() {
	const container = document.querySelector("#auctions");

	const endpoint = "listings";

	const options = createOptions("GET", null, {}, true);

	const { data, error } = await makeApiCall(endpoint, options);

	if (error) {
		return displayMessage("danger", error, container);
	}

	displayAuctions(data, container);
}
