const calendar = document.querySelector("#calendar")

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
var now = new Date()
var today = now.getDay()
var currentday = now.getDate()
var month = now.getMonth()
var year = now.getFullYear()
var daysinmonth = new Date(year, month+1, 0).getDate()

// Create a function that based on the current day of the week
// and date will indicate the day of the week of the 1st day of the month

const isWeekend = day => {
    return false
}

for (let day = 1; day <= 31; day++) {

    const weekend = isWeekend(day)
    
    calendar.insertAdjacentHTML("beforeend", 
    `<div class="day ${weekend ? "weekend" : ""}">${day}</div>`)
}