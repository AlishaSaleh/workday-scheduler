console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

var tasksObj;


$(document).ready(function () {
    var currentDay = $("#currentDay");
    var schedCont = $(".container");

    currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var currentHour = parseInt(moment().format('H'));

    console.log(currentHour);

    tasksObj = {
        "9" : "",
        "10" : "",
        "11" : "",
        "12" : "",
        "13" : "",
        "14" : "",
        "15" : "",
        "16" : "",
        "17" : ""
    };

    function storeTasks () {
        localStorage.setItem("tasksObj", JSON.stringify(tasksObj));

    };

    function retriveTasks () {
        var loadTasks = JSON.parse(localStorage.getItem("tasks"));
        // if (loadTasks) {
        //     tasksObj = loadTasks;

        //     $.each(tasksObj, function (hour, task) {
        //         var hourDiv = $("#" + hour);
                
        //     });
        
        };

    // });

    

    

    function styleTasks() {


        $(".row-info").each(function () {
            var elementHour = parseInt(($(this).attr("id")));
            console.log("element hour",elementHour);
            console.log("current hour",currentHour);
            if (elementHour < currentHour) {
                // $(this).removeClass(["present", "future"]).addClass("past");
                $(this).addClass("past");
            }
            else if (elementHour === currentHour) {
                // $(this).removeClass(["past", "future"]).addClass("present");
                $(this).addClass("present");
            }
            else {
                // $(this).removeClass(["past", "present"]).addClass("future");
                $(this).addClass("future");

            };
        });
    };

    // $(".task").on("click", function() {
    //     var taskInfo = $(".task");

    //     var inputField = $("<input>");

    //     inputField.addClass("description");

    //     taskInfo.append(inputField);

    // });

    // 

    $("button").on("click", function() {
        console.log($(this).parent().attr("id"));
        var taskId = $(this).parent().attr("id");
        // get id
        // get textarea input
        var textInput = $(this).parent().find("textarea");
        textInput.val();
        console.log(textInput.val());

        // populate the obj in the background
        
        tasksObj[taskId] = textInput.val();


        // trigger a save function 
    })

    // function addText() {
    //     var taskInfo = $(".task");

    //     var inputField = $("<input>");

    //     inputField.addClass("description");

    //     taskInfo.append(inputField);



        
    // }

    // $(".task").on("click", function inputText(event) {
    //    $(this).event.target(function() {
    //        addText($(this));
    //    });
    // });


    styleTasks();
    storeTasks();
    console.log(tasksObj);
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
