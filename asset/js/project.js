var pulledCountry = localStorage.getItem("storedCountry")
if(pulledCountry){
	var currentCountry = pulledCountry
}
else {
	var currentCountry
}

var submitBtn = document.querySelector("#submit")
var countrySpan = document.querySelector("#country-name")
var dateSpan = document.querySelector("#date")
var resetBtn = document.querySelector("#reset")

function fetchAll(){
	fetch("https://covid-19-data.p.rapidapi.com/totals", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "8ccd2e1920msh3d1d6843984bb49p112bfejsn6cb44c98c1ec",
			"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
		}
	})
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			const name = data
			const confirmed = data[0].confirmed
			const recovered = data[0].recovered;
			const critical = data[0].critical;
			const deaths = data[0].deaths;
			document.querySelector("#confirmed-number").innerHTML = confirmed.toLocaleString('en-US');
			document.querySelector("#recovered-number").innerHTML = recovered.toLocaleString('en-US');
			document.querySelector("#critical-number").innerHTML = critical.toLocaleString('en-US');
			document.querySelector("#deaths-number").innerHTML = deaths.toLocaleString('en-US');
			const lastUpdate = moment(data[0].lastUpdate).format("DD MMMM YYYY");
			dateSpan.innerHTML = lastUpdate;
			console.log(data[0])
		})
		.catch((error) => {
			console.log("error no country found");
			countrySpan.innerHTML = "(No country found)"
			document.querySelector("#confirmed-number").innerHTML = "-";
			document.querySelector("#recovered-number").innerHTML = "-";
			document.querySelector("#critical-number").innerHTML = "-";
			document.querySelector("#deaths-number").innerHTML = "-";
		});
}

function fetchData(){
	fetch("https://covid-19-data.p.rapidapi.com/country?name=" + currentCountry, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "8ccd2e1920msh3d1d6843984bb49p112bfejsn6cb44c98c1ec",
			"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
		}
	})
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log(data)
			console.log(data)
			const name = data
			const confirmed = data[0].confirmed
			const recovered = data[0].recovered;
			const critical = data[0].critical;
			const deaths = data[0].deaths;
			const lastUpdate = moment(data[0].lastUpdate).format("DD MMMM YYYY");
			console.log(lastUpdate)
			document.querySelector("#confirmed-number").innerHTML = confirmed.toLocaleString('en-US');
			document.querySelector("#recovered-number").innerHTML = recovered.toLocaleString('en-US');
			document.querySelector("#critical-number").innerHTML = critical.toLocaleString('en-US');
			document.querySelector("#deaths-number").innerHTML = deaths.toLocaleString('en-US');
			dateSpan.innerHTML = lastUpdate;
			console.log(data[0])
			localStorage.setItem('storedCountry',data[0].country)
		})
		.catch((error) => {
			console.log("error no country found");
			countrySpan.innerHTML = "(No country found)"
			document.querySelector("#confirmed-number").innerHTML = "-";
			document.querySelector("#recovered-number").innerHTML = "-";
			document.querySelector("#critical-number").innerHTML = "-";
			document.querySelector("#deaths-number").innerHTML = "-";
		});
}

function updateData(){
	currentCountry = document.querySelector("#input").value;
	countrySpan.innerHTML = currentCountry;
	fetchData();
}

submitBtn.addEventListener('click',function(event){
	event.preventDefault();
	updateData()
})

resetBtn.addEventListener('click',function(event){
	event.preventDefault();
	fetchAll();
	countrySpan.innerHTML = "all countries";
	localStorage.clear();
})

function init(){
	if(currentCountry){
		fetchData()
		countrySpan.innerHTML = currentCountry;
	}
	else {
	fetchAll();
	}
}

init();