export function displayMessage(type, message, target) {
	let container = target;

	if (typeof target === "string") {
		container = document.querySelector(target);
	}

	container.innerHTML = `
    <div class="alert alert-${type}">
      ${message}
    </div>
  `;
}
