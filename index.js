function loadQotes(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data =>displayQotes(data))
}

const displayQotes = data =>{
    const innerH1 = document.getElementById('qotesinner');
    innerH1.innerText = data.quote;
}