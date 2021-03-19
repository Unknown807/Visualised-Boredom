
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

	
	console.log(URL);
	
}

function useReceivedActivityData(data) {
	console.log(data["activity"]);
}
