function time(){
    var datetime = new Date()
    var hrs = datetime.getHours();
    var min = datetime.getMinutes();
    var sec = datetime.getSeconds();
    var time_unit = document.getElementById('time_unit');

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(time);