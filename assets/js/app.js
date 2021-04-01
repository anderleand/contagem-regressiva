const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];
const weekdays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4')
//console.log(items)
let futureDate = new Date(2021, 6, 27, 0, 00, 0);
//let futureDate = new Date(2021, 2, 31, 23, 29, 0);
//console.log(futureDate);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getUTCMinutes();
//console.log(`${weekday}, ${date} ${month} de ${year} às ${hours}:${minutes}`);

giveaway.textContent = `Chegada prevista ${weekday}, ${date} ${month} de ${year}`;
//future time in ms
const futureTime = futureDate.getTime();
//console.log(futureTime)

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    //console.log(t)
    //1s = 1000ms
    //1m = 60s
    //1hr = 60min
    //1d = 24hr
    //values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60 * 1000;
    //calculate all values
    let days = Math.floor(t/oneDay);
    let hours = Math.floor((t%oneDay) / oneHour);
    let minutes = Math.floor((t%oneHour)/ (oneMinute));
    let seconds = Math.floor((t%oneMinute)/ 1000);
    //console.log(hours);
    //console.log(minutes);
    //console.log(seconds);

    //set values array
    const values = [days,hours,minutes,seconds];
    //console.log(values)

    function format(item){
        if(item <10){
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);

        //console.log(item)
    });

    if (t< 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h1 class="expired">Ela chegou!!!</h1>`
    }
    
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime()