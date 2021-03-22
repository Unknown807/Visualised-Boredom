
const IMGCOLORS = {
	"price0":"#83ba5b", "price1":"#FFF200", "price2":"#FCD914",
	"price3":"#F9A902",	"price4":"#E2121D",
	
	"access0":"#83ba5b", "access1":"#FFF200", "access2":"#FCD914",
	"access3":"#F9A902", "access4":"#E2121D",
	
	"typeeducation":"#7092BE", "typetyperecreational":"#AA0055", "typesocial":"#DCF296",
	"typediy":"#ECCA9B", "typecharity":"#1A697D", "typecooking":"#FFD1BB",
	"typerelaxation":"#FFF982", "typemusic":"#FFCEDE", "typebusywork":"#88DBFF",
	
	"party0":" #99D9EA", "party1":"#EFE4B0", "party2":"#FFAEC9",
	"party3":"#D9F28C", "party4":"#C8BFE7"
};

var priceOpen = true;
var accessOpen = true;
var typeOpen = true;
var partyOpen = true;

var priceRangeOpen = false;
var accessRangeOpen = false;

var prevActivityText = "Get Random Activity";

function setup() {
	let priceLabel = document.getElementById("price-label");
	let priceSlider = document.getElementById("activity-price");
	let accessLabel = document.getElementById("access-label");
	let accessSlider = document.getElementById("activity-access");
	
	let priceDropdown = document.getElementById("price-dropdown");
	let accessDropdown = document.getElementById("access-dropdown");
	
	let activityText = document.getElementById("activity-text");
	let getActivityButton = document.getElementById("get-activity");
	
	let typeLabel = document.getElementById("type-label");
	let typeSelect = document.getElementById("activity-type");
	let partyLabel = document.getElementById("party-label");
	let partyInput = document.getElementById("activity-party");
	
	priceLabel.onclick = function() {
		if (priceRangeOpen) return;
		
		priceOpen = !priceOpen;
		priceLabel.classList.toggle("ignored-activity");
		priceSlider.classList.toggle("ignored-activity");
		priceDropdown.style.display = priceOpen ? "inherit" : "none";
	}
	
	accessLabel.onclick = function() {
		if (accessRangeOpen) return;
		
		accessOpen = !accessOpen;
		accessLabel.classList.toggle("ignored-activity");
		accessSlider.classList.toggle("ignored-activity");
		accessDropdown.style.display = accessOpen ? "inherit" : "none";
	}
	
	typeLabel.onclick = function() {
		typeOpen = !typeOpen;
		typeLabel.classList.toggle("ignored-activity");
		typeSelect.classList.toggle("ignored-activity");
	}
	
	partyLabel.onclick = function() {
		partyOpen = !partyOpen;
		partyLabel.classList.toggle("ignored-activity");
		partyInput.classList.toggle("ignored-activity");
	}
	
	activityText.onmouseenter = function() {
		prevActivityText = activityText.innerHTML;
		activityText.innerHTML = "Get Random Activity";
	}
	
	activityText.onmouseleave = function() {
		activityText.innerHTML = prevActivityText; 
	}
	
	activityText.onclick =  function() {
		getRandomActivity();
	}
	
	getActivityButton.onclick = function() {
		getCustomActivity();
	}
	
	priceDropdown.onclick =  function() {
		if (priceDropdown.innerHTML == "+") {
			priceDropdown.innerHTML = "-";
			showPriceRanges();
			priceLabel.classList.toggle("ignored-activity");
		} else {
			priceDropdown.innerHTML = "+";
			hidePriceRanges();
			priceLabel.classList.toggle("ignored-activity");
		}
		adjustGridArea();
	}

	accessDropdown.onclick =  function() {
		if (accessDropdown.innerHTML == "+") {
			accessDropdown.innerHTML = "-";
			showAccessRanges();
			accessLabel.classList.toggle("ignored-activity");
		} else {
			accessDropdown.innerHTML = "+";
			hideAccessRanges();
			accessLabel.classList.toggle("ignored-activity");
		}
		adjustGridArea();
	}
	
	adjustSlider("Price: ", priceLabel, priceSlider); 
	priceSlider.oninput =  function() { 
		adjustSlider("Price: ", priceLabel, priceSlider); 
	}
	
	adjustSlider("Access: ", accessLabel, accessSlider);
	accessSlider.oninput = function() { 
		adjustSlider("Access: ", accessLabel, accessSlider); 
	}	
}