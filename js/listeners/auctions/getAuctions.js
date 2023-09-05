import { displayAuctions } from "../../ui/templates/auctions/index.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
// import * as api from "../../api/auctions/index.js";
import makeApiCall from "../../api/makeApiCall.js";

export async function getAuctions() {
	const container = document.querySelector("#auctions");

	const endpoint = "listings";

	const { data, error } = await makeApiCall(endpoint);

	if (error) {
		return displayMessage("danger", error, container);
	}

	displayAuctions(data, container);

	// try {
	// 	const auctions = await api.get();
	// 	displayAuctions(auctions, container);
	// } catch (error) {
	// 	displayMessage("danger", error.message, container);
	// }
}
