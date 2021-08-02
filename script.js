function getQuote() {
fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3128a6e0b0msh371447479d4468ep1131d3jsn4f484dd83cb5",
		"x-rapidapi-host": "quotes15.p.rapidapi.com"
	}
})
.then(function(response) { return response.json()})
.then(function(data) {
    console.log(data);
    displayQuote(data)
     
  })
.catch(err => {
	console.error(err);
});
}

function displayQuote(data) {
document.querySelector('#content').innerHTML=data.content
document.querySelector('#author').innerHTML=data.originator.name
}