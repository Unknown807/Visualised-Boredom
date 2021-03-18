
var priceRangeOpen = false;
var accessRangeOpen = false;
var currentActivityText;

function setup() {
	let priceLabel = document.getElementById("price-label");
	let priceSlider = document.getElementById("activity-price");
	let accessLabel = document.getElementById("access-label");
	let accessSlider = document.getElementById("activity-access");
	
	let priceDropdown = document.getElementById("price-dropdown");
	let accessDropdown = document.getElementById("access-dropdown");
	
	let activityText = document.getElementById("activity-text");
	
	activityText.addEventListener("mouseenter", function() {
		currentActivityText = activityText.innerHTML;
		activityText.innerHTML = "Random Activity"; 
	});
	
	activityText.addEventListener("mouseleave", function() {
		activityText.innerHTML = currentActivityText; 
	});
	
	
	priceDropdown.addEventListener("click", function() {
		if (priceDropdown.innerHTML == "+") {
			priceDropdown.innerHTML = "-";
			showPriceRanges();
		} else {
			priceDropdown.innerHTML = "+";
			hidePriceRanges();
		}
		adjustGridArea();
	});

	accessDropdown.addEventListener("click", function() {
		if (accessDropdown.innerHTML == "+") {
			accessDropdown.innerHTML = "-";
			showAccessRanges();
		} else {
			accessDropdown.innerHTML = "+";
			hideAccessRanges();
		}
		adjustGridArea();
	});
	
	adjustSlider("Price: ", priceLabel, priceSlider); 
	priceSlider.addEventListener("input", function() { 
		adjustSlider("Price: ", priceLabel, priceSlider); 
	});
	
	adjustSlider("Access: ", accessLabel, accessSlider);
	accessSlider.addEventListener("input", function() { 
		adjustSlider("Access: ", accessLabel, accessSlider); 
	});
	
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