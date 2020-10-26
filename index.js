const calendar = document.querySelector("#calendar")

var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
var daysfordetails = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
var now = new Date()
var month = now.getMonth()
var year = now.getFullYear()
daysinmonth = new Date(year, month+1, 0).getDate()
firstdayofmonth = new Date(year, month, 1).getDay()

$(document).ready(function(){
    $('#rightbtn').click(function(event){
        const myNode = document.getElementById("calendar");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
        $('.btn, .entryfield, #details, #selected').css("visibility", "hidden")
        month++
        if (month == 12) {
            month=0
            year++
        }
        daysinmonth = new Date(year, month+1, 0).getDate()
        firstdayofmonth = new Date(year, month, 1).getDay()
        createCalendar()
    })
})


$(document).ready(function(){
    $('#leftbtn').click(function(event){
        const myNode = document.getElementById("calendar");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
        $('.btn, .entryfield, #details, #selected').css("visibility", "hidden")
        month--
        if (month == -1) {
            month=11
            year--
        }
        daysinmonth = new Date(year, month+1, 0).getDate()
        firstdayofmonth = new Date(year, month, 1).getDay()
        createCalendar()
    })
})

function selectDay() {
    $(document).ready(function(){
        $('.day, .weekend').click(function(event){
            $('#calendar .day, #calendar .weekend').css("background-color", 'transparent')
            let dayselected = $(this)
            dayselected.css("background-color","rgb(37, 37, 226)")
            $('.btn, .entryfield, #details, #selected').css("visibility", "visible")
            let currentdate = event.currentTarget.innerHTML.slice(0, 2)
            document.getElementById('selected').innerHTML = 
            daysfordetails[new Date(year, month, currentdate).getDay()] + ', ' + months[month] + ' ' + currentdate
            document.getElementById('details').innerHTML = 'Your events:'

            $('#button').click(function(){
                dayselected[0].querySelector('p').innerHTML = 'Event'
                let event = document.getElementById("eventname").value
                document.getElementById('details').insertAdjacentHTML("beforeend", 
                `<p>${event}</p>`)
            })
        })
    })
}

createCalendar = () => {
    document.getElementById('monthandyear').innerHTML = 
    months[month] + ', ' + year
    days.forEach(day =>
        calendar.insertAdjacentHTML("beforeend", 
        `<div class="dayname">${day}</div>`)
    )
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
        if (new Date(year, month, day).getDay() == 0 ||
            new Date(year, month, day).getDay() == 6)  {
            calendar.insertAdjacentHTML("beforeend", 
            `<div class="weekend">${day}<p></p></div>`)
        } else {
            calendar.insertAdjacentHTML("beforeend", 
            `<div class="day">${day} <p></p></div>`)
        }   
    }
    selectDay()
}

createCalendar()