
function showPriceRanges() {
	priceRangeOpen = true;
	showRange("Price")
}

function showAccessRanges() {
	accessRangeOpen = true;
	showRange("Access");
}

function showRange(text) {
	let type = text.toLowerCase();
	
	let container = document.getElementById(type+"-container");
	
	let children = [
		createElement("label", {"text":"Min "+text}),
		document.createElement("br"),
		createElement("input", {
			"type":"text", "id":"activity-min-"+type
		}),
		document.createElement("br"),
		createElement("label", {"text":"Max "+text}),
		document.createElement("br"),
		createElement("input", {
			"type":"text", "id":"activity-max-"+type
		}),
	];
	
	for (let i=0; i<7; i++) {
		container.appendChild(children[i]);
	}
	
}

function hidePriceRanges() {
	priceRangeOpen = false;
	hideRanges("price");
}

function hideAccessRanges() {
	accessRangeOpen = false;
	hideRanges("access");
}


function hideRanges(type) {
	let parent = document.getElementById(type+"-container");
	while (parent.firstChild) {
		parent.removeChild(parent.lastChild);
	}
}


function adjustGridArea() {
	let container = document.getElementById("request-container");
	let newAreas = "'type price access party'";
	
	if (priceRangeOpen && accessRangeOpen) {
		newAreas += "'. price access .'";
	} else if (priceRangeOpen && !accessRangeOpen) {
		newAreas += "'. price . .'";
	} else if (!priceRangeOpen && accessRangeOpen) {
		newAreas += "'. . access .'";
	}
	
	container.style.gridTemplateAreas = newAreas;
}