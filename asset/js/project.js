fetch("https://covid-19-data.p.rapidapi.com/country?name=italy", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "8ccd2e1920msh3d1d6843984bb49p112bfejsn6cb44c98c1ec",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
})


.then(function (response) { 
    return response.json()})
.then(function (data) {  
        console.log(data)
        console.log(data)
const  name  = data
 const  confirmed = data[0].confirmed
const  recovered  = data[0].recovered;
const  critical  = data[0].critical;
const  deaths  = data[0].deaths;
document.querySelector("#confirmed-number").innerHTML =  confirmed;
document.querySelector("#recovered-number").innerHTML = recovered;
document.querySelector("#critical-number").innerHTML =  critical;
document.querySelector("#deaths-number").innerHTML = deaths;
console.log(data[0])
    });

var search = function () {
this.getdata(document.querySelector(".search-bar").value);
}

