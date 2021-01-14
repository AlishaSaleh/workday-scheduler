console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));


$(document).ready(function () {
    var currentDay = $("#currentDay");
    var schedCont = $(".container");

    currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var currentHour = moment().format('LT');

    console.log(currentHour);

    

    styleTasks();

    function styleTasks() {


        $(".row-info").each(function () {
            var elementHour = parseInt($(this).attr("id"));
            if (elementHour < currentHour) {
                $(this).removeClass(["present", "future"]).addClass("past");
                // $(this).addClass("past");
            }
            else if (elementHour === currentHour) {
                $(this).removeClass(["past", "future"]).addClass("present");
                // $(this).addClass("present");
            }
            else {
                $(this).removeClass(["past", "present"]).addClass("future");
                // $(this).addClass("future");

            }
        })
    }

    function addText() {
        var taskInfo = $(".task")
    }

    $(".task").on("click", function inputText() {
       $("textarea").each(function() {
           addText($(this));
       })
    })
    // schedCont.empty();

    // for (var hour = 9; hour <= 17; hour++);
    // var index = hour - 9;

    // var rowDiv = $("<div>");
    // rowDiv.addClass("row");
    // rowDiv.addClass("plannerRow");
    // rowDiv.attr("hour-index", hour);

    // var timeBoxSpan = $("<span>");
    // timeBoxSpan.attr("class", "timeBox");


    // var colTime = $("<div>");
    // colTime.addClass("col-md-2");

    // var displayHour = 0;
    // var amPM = "";
    // if (hour > 12) {
    //     displayHour = hour - 12;
    //     amPM = "pm";
    // } else {
    //     displayHour = hour;
    //     amPM = "am"
    // }

    // timeBoxSpan.text(displayHour, amPM);

    // rowDiv.append(colTime);

    // colTime.text(timeBoxSpan);






});
