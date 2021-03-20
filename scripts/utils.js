
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

function adjustSlider(prefix, label, slider) {
	let val = slider.value;
	if (val.length == 3) {
		val += "0";
	} else if (val.length == 1) {
		val += ".00";
	}
	label.innerHTML = prefix + val;
}