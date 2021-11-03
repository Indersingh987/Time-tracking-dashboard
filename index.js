fetch('./data.json').then(response => response.json())
.then(data => {
    for(let i = 0;i < 6;i++){
        document.getElementById(`c${i+1}`).innerHTML = "<div class='top'></div>"+
    "<div class = 'content'>"+
    "  <div class='header'> <div>"+data[i].title+"</div><img src='images/icon-ellipsis.svg'> </div>"+
    "  <div class = 'hours'>"+data[i].timeframes.weekly.current+"hrs"+"</div>"+
    "  <div class = 'footer'>Last Week - "+data[i].timeframes.weekly.previous+"hrs</div>"+
    "</div>"
    }
    
})

function daily(){

    document.getElementById('b1').classList.remove("select");
    document.getElementById('b2').classList.remove("select");
    document.getElementById('b3').classList.remove("select");

    document.getElementById('b1').classList.add("select");

    fetch('./data.json').then(response => response.json())
.then(data => {
    for(let i = 0;i < 6;i++){
        document.getElementById(`c${i+1}`).innerHTML = "<div class='top'></div>"+
    "<div class = 'content'>"+
    "  <div class='header'> <div>"+data[i].title+"</div><img src='images/icon-ellipsis.svg'> </div>"+
    "  <div class = 'hours'>"+data[i].timeframes.daily.current+"hrs"+"</div>"+
    "  <div class = 'footer'>Last Day - "+data[i].timeframes.daily.previous+"hrs</div>"+
    "</div>"
    }
    
})
}

function weekly(){

    document.getElementById('b1').classList.remove("select");
    document.getElementById('b2').classList.remove("select");
    document.getElementById('b3').classList.remove("select");

    document.getElementById('b2').classList.add("select");

    fetch('./data.json').then(response => response.json())
.then(data => {
    for(let i = 0;i < 6;i++){
        document.getElementById(`c${i+1}`).innerHTML = "<div class='top'></div>"+
    "<div class = 'content'>"+
    "  <div class='header'> <div>"+data[i].title+"</div><img src='images/icon-ellipsis.svg'> </div>"+
    "  <div class = 'hours'>"+data[i].timeframes.weekly.current+"hrs"+"</div>"+
    "  <div class = 'footer'>Last Week - "+data[i].timeframes.weekly.previous+"hrs</div>"+
    "</div>"
    }
    
})
}

function monthly(){

    document.getElementById('b1').classList.remove("select");
    document.getElementById('b2').classList.remove("select");
    document.getElementById('b3').classList.remove("select");

    document.getElementById('b3').classList.add("select");

    fetch('./data.json').then(response => response.json())
.then(data => {
    for(let i = 0;i < 6;i++){
        document.getElementById(`c${i+1}`).innerHTML = "<div class='top'></div>"+
    "<div class = 'content'>"+
    "  <div class='header'> <div>"+data[i].title+"</div><img src='images/icon-ellipsis.svg'> </div>"+
    "  <div class = 'hours'>"+data[i].timeframes.monthly.current+"hrs"+"</div>"+
    "  <div class = 'footer'>Last Year - "+data[i].timeframes.monthly.previous+"hrs</div>"+
    "</div>"
    }
    
})
}



