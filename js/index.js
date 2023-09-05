import * as listeners from "./listeners/index.js";

function router() {
	const path = window.location.pathname;

	switch (path) {
		case "/":
		case "/index.html":
			listeners.getAuctions();
			break;
		case "/register.html":
			listeners.setRegisterListener();
			break;
	}
}

router();
