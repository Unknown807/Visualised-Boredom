
function sendRequest(URL) {
	let request = new XMLHttpRequest();
	request.open('GET', URL);
	request.responseType = 'json';
	request.send();
	
	request.onreadystatechange = function() {
		if (request.readyState === 4) {
			useReceivedActivityData(request.response);
		}
	}
	
}

function getRandomActivity() {
	sendRequest("https://www.boredapi.com/api/activity/");
}

function getCustomActivity() {
	
	let URL = "https://www.boredapi.com/api/activity?";
	
	
	if (typeOpen) {
		URL += "type="+document.getElementById("activity-type").value+"&";
	}
	
	if (partyOpen) {
		URL += "participants="+document.getElementById("activity-party").value+"&";
	}
	
	if (priceRangeOpen) {
		URL += "minprice="+document.getElementById("activity-min-price").value+"&";
		URL += "maxprice="+document.getElementById("activity-max-price").value+"&";
	} else if (priceOpen) {
		URL += "price="+document.getElementById("activity-price").value+"&";
	}
	
	if (accessRangeOpen) {
		URL += "minaccessibility="+document.getElementById("activity-min-access").value+"&";
		URL += "maxaccessibility="+document.getElementById("activity-max-access").value+"&";
	} else if (accessOpen) {
		URL += "accessibility="+document.getElementById("activity-access").value+"&";
	}

	sendRequest(URL);
	
}

function useReceivedActivityData(data) {
	function checkRangeType(val) {
		if (val == 0) {
			return 0;
		} else if (val <= 0.25) {
			return 1;
		} else if (val <= 0.5) {
			return 2;
		} else if (val <= 0.75) {
			return 3;
		} else if (val <= 0.99) {
			return 4;
		} else {
			return 5;
		}
	}

	let activityText = document.getElementById("activity-text");
	let activityTable = document.getElementById("activity-table");

	console.log(data);
	
	if (data.hasOwnProperty("error")) {
		if (data["error"][0] == "N") {
			activityText.innerHTML = "No Activities Found";
		} else {
			activityText.innerHTML = "Problem With Options";
		}
		activityTable.style.display = "none";
		return;
	}
	
	let price = data["price"];
	let access = data["accessibility"];
	let party = data["participants"];
	let type = data["type"];
	let link = data["link"];
	
	price = checkRangeType(price);
	access = checkRangeType(access);
	
	let typeSelect = document.getElementById("activity-type");
	for ( let i=0; i<typeSelect.length; i++) {
		if (typeSelect[i].childNodes[0].nodeValue === type) {
			type = i;
			break;
		}
	}
	
	updateTable(activityTable, "price", 0, price, link);
	updateTable(activityTable, "access", 1, access, link);
	updateTable(activityTable, "party", 2, party-1, link);
	updateTable(activityTable, "type", 3, type, link);
	
	activityTable.style.display = "flex";
	
}

function updateTable(table, activityType, imgListIndex, imgIndex, link) {
		let heading = document.getElementById(activityType+"-heading");
		let cell = document.getElementById(activityType+"-cell");
		let img = document.getElementById(activityType+"-img");
		
		let imgArr = IMGS[imgListIndex][imgIndex];
		let imgPath = imgArr[0];
		let headColor = imgArr[1];
		
		heading.style.color = headColor;
		cell.href = link;
		img.src = imgPath;
}
