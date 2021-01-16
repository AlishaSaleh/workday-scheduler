console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

var tasksObj;


$(document).ready(function () {
    var currentDay = $("#currentDay");
    // var schedCont = $(".container");

    currentDay.text(moment().format('dddd, MMMM Do YYYY'));

    var currentHour = parseInt(moment().format('H'));

    console.log(currentHour);

    tasksObj = {
        "9": "",
        "10": "",
        "11": "",
        "12": "",
        "13": "",
        "14": "",
        "15": "",
        "16": "",
        "17": ""
    };

    function storeTasks() {
        localStorage.setItem("tasksObj", JSON.stringify(tasksObj));

    };

    function retriveTasks() {
        var loadTasks = JSON.parse(localStorage.getItem("tasksObj"));
        
            tasksObj = loadTasks;
       
        console.log('retrievedObject: ', (loadTasks));

        // if (loadTasks) {
        //     tasksObj = loadTasks;

        //     $.each(tasksObj, function(){

        //     });
        // };

    };

  
    function styleTasks() {


        $(".row-info").each(function () {
            var elementHour = parseInt(($(this).attr("id")));
            console.log("element hour", elementHour);
            console.log("current hour", currentHour);
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
        retriveTasks();
    };


    $("button").on("click", function () {
        // get id
        console.log($(this).parent().attr("id"));
        var taskId = $(this).parent().attr("id");

        // get textarea input
        var textInput = $(this).parent().find("textarea");
        textInput.val();
        console.log(textInput.val());

        // populate the obj in the background

        tasksObj[taskId] = textInput.val();

        // trigger a save function 
        storeTasks();



    });

    styleTasks();

    console.log(tasksObj);
   
});
