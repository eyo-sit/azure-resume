window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiURl = 'https://getresumecounter1985.azurewebsites.net/api/GetResumeCounter?code=9hXkMQZ7c6Ks2ZrHYm1YJdu5SxoMGFGllatcaZVrZ4EkermZ/9q6Ew==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiURl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(console.error());
    });
    return count;
}