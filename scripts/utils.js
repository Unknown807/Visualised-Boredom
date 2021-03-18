
function createElement(tag, attrs) {
	let element = document.createElement(tag);
	
	for (let key in attrs) {
		if (key == "text") {
			element.innerHTML = attrs[key];
		} else {
			element.setAttribute(key, attrs[key]);
		}
	}
	
	return element;
}