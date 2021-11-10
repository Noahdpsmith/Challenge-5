var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function(){
    $(".saveBtn").on("click", function() {
        var textContent = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(textContent, time)
    }
    
    )
function timeTracker() {
    var currentTime = moment().hour();
    $(".time-block").each(function(){
    var TimeBlock = parseInt($(this).attr("id").split("hour")[1]);
    if (TimeBlock === currentTime){
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else if (TimeBlock < currentTime) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
    }
    )
}

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

timeTracker();
})

    // let tasks = []

    // const addTask = (ev)=>{
    //  ev.preventDefault();
    //     let task = {
    //         title: document.getElementById('title').value,

    // }
    // tasks.push(task);
    // document.forms[0].reset();

    // console.warn('added' , {tasks} );
    // let pre = document.querySelector('#msg pre');
    // pre.textContent = '/n' + JSON.stringify(tasks, '\t', 2);

    // localStorage.setItem('myTasks', JSON.stringify(tasks));
    

    // document.addEventListener('DOMContentLoaded', ()=>{
    //     document.getElementById('btn').addEventListener('click', addTask)
    // })}
    // function saveDynamicDataToFile() {
    //     var userInput = document.getElementById('myText').value;

    //     var blob = new Blob([userInput],{ type: "text/plain;charset=utf-8"});
    //     saveAs(blob, "dynamic.txt");
    

    // }