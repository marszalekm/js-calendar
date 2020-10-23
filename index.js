const calendar = document.querySelector("#calendar")

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
var now = new Date()
var today = now.getDay()
var currentday = now.getDate()
var month = now.getMonth()
var year = now.getFullYear()
var daysinmonth = new Date(year, month+1, 0).getDate()
var firstdayofmonth = new Date(year, month, 1).getDay()


if (firstdayofmonth == 1) {
    //pass
} else if (firstdayofmonth == 0) { 
    for (i=0; i < 6; i++)
        calendar.insertAdjacentHTML("beforeend", 
        `<div class="emptyday"></div>`)
} else {
    for (i=0; i < firstdayofmonth - 1; i++)
        calendar.insertAdjacentHTML("beforeend", 
        `<div class="emptyday"></div>`)
}


for (let day = 1; day <= daysinmonth; day++) {

    calendar.insertAdjacentHTML("beforeend", 
    `<div class="day">${day}</div>`)
}