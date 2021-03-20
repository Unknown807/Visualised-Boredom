
/* Structure Reference
const IMGS = [
	[
		[FREE, C],
		[Q1, C],
		[Q2, C],
		[Q3, C],
		[Q4, C],
		[EXP, C]
	],
	[
		[FREE, C],
		[Q1, C],
		[Q2, C],
		[Q3, C],
		[Q4, C],
		[EXP, C]
	],
	[
		[YOU, C],
		[TWO, C],
		[THR, C],
		[FOR, C],
		[FIV, C]
	],
	[
		[EDU, C],
		[REC, C],
		[SOC, C],
		[DIY, C],
		[CHA, C],
		[COO, C],
		[REL, C],
		[MUS, C],
		[BUS, C]
	]
];
*/

const IMGCOLORS = {
	"price0":"#B1FC7A",
	"price1":"#FFF200",
	"price2":"#FCD914",
	"price3":"#F9A902",
	"price4":"#E2121D",
	"access0":"#B1FC7A",
	"access1":"#FFF200",
	"access2":"#FCD914",
	"access3":"#F9A902",
	"access4":"#E2121D",
};

var priceOpen = true;
var accessOpen = true;
var typeOpen = true;
var partyOpen = true;

var priceRangeOpen = false;
var accessRangeOpen = false;

var prevActivityText = "Random Activity";

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
		activityText.innerHTML = "Random Activity";
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