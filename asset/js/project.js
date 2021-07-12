var currentCountry = "Australia"
var submitBtn = document.querySelector("#submit")
var countrySpan = document.querySelector("#country-name")

function init(){
	countrySpan.innerHTML = currentCountry;
	fetchData();
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
			document.querySelector("#confirmed-number").innerHTML = confirmed.toLocaleString('en-US');
			document.querySelector("#recovered-number").innerHTML = recovered.toLocaleString('en-US');
			document.querySelector("#critical-number").innerHTML = critical.toLocaleString('en-US');
			document.querySelector("#deaths-number").innerHTML = deaths.toLocaleString('en-US');
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

function updateData(){
	currentCountry = document.querySelector("#input").value;
	countrySpan.innerHTML = currentCountry;
	fetchData();
}

submitBtn.addEventListener('click',function(event){
	event.preventDefault();
	updateData()
})

init();