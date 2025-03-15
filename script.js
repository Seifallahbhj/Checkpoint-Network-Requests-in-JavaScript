
const latitude = 36.8065;
const longitude = 10.1815;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
function recupererMeteo() {
    fetch(url)
        .then(response => response.json())
        .then(data => {     
            const meteo = data.current_weather;
            document.getElementById("nom-ville").textContent = "Tunis"; 
            document.getElementById("valeur-temperature").textContent = meteo.temperature + "°C";
            document.getElementById("valeur-description").textContent = "Vent : " + meteo.windspeed + " km/h";
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des données météo :", error);
        });
}
window.onload = recupererMeteo;
