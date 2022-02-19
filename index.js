//Obtener datos API
async function adviceRandom(url){
    let random = await fetch (url);
    return random.json();
}
async function loadData(){
    let json = await adviceRandom("https://api.adviceslip.com/advice");
    let adviceID=document.getElementById("number-advice");
    let adviceContent=document.getElementById("text-advice");
    adviceID.innerHTML="Advice "+json.slip.id;
    adviceContent.innerHTML=json.slip.advice;
}
loadData();
