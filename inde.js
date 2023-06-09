const currentDate = document.querySelector(".current-date"),
prevNextBtn = document.querySelectorAll(".icons"),
datesList = document.querySelector(".dates-list");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();


let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];


function renderCalendar(){
   let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
   lastDateOfLastMonth =new Date(currYear,currMonth,0).getDate(),
   firstDayOfMonth =new Date(currYear,currMonth, 1).getDay(),
   lastDayOfMonth =new Date(currYear,currMonth,lastDateOfMonth).getDay();

 let datesLi = "";

 for(let i = firstDayOfMonth; i > 0; i--){
    datesLi +=`<li class="inactive">${lastDateOfLastMonth - i + 1}`
 }

for (let i = 1; i <= lastDateOfMonth; i ++){
 let  todaysDate = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
 datesLi += `<li class="${todaysDate}"> ${i}</li>`
}
for(let i = lastDayOfMonth; i < 6; i ++){
    datesLi +=`<li class="inactive"> ${i - lastDayOfMonth + 1}</li>`
}
    

 datesList.innerHTML = datesLi
    currentDate.innerHTML = `${months[currMonth]} ${currYear}`
}


prevNextBtn.forEach(icon => {
    icon.addEventListener("click", function(){
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if(currMonth < 0 || currMonth >11){
        
    date = new Date(currYear, currMonth);
    currYear = date.getFullYear();
    currMonth = date.getMonth();
    }else{
        date = new Date()
    }
        renderCalendar()
    })
})

renderCalendar()