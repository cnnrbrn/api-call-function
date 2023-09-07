import { displayAuctions } from "../../ui/templates/auctions/index.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import makeApiCall from "../../api/makeApiCall.js";

export async function getAuctions() {
	const container = document.querySelector("#auctions");

	const endpoint = "listings";

	const { data, error } = await makeApiCall(endpoint);

	if (error) {
		return displayMessage("danger", error, container);
	}

	displayAuctions(data, container);
}
