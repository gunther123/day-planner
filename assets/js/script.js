//Add Variables for full Workday Schedule
var timeBlocksArr = [
    {
        hour: "9:00 AM",
        task: ""
    },
    {
        hour: "10:00 AM",
        task: ""
    },
    {
        hour: "11:00 AM",
        task: ""
    },
    {
        hour: "12:00 PM",
        task: ""
    },
    {
        hour: "1:00 PM",
        task: ""
    },
    {
        hour: "2:00 PM",
        task: ""
    },
    {
        hour: "3:00 PM",
        task: ""
    },
    {
        hour: "4:00 PM",
        task: ""
    },
    {
        hour: "5:00 PM",
        task: ""
    },
];

//Render the schedule to the page
function renderPage(){
    //Get all timeblocks and tasks
    const timeBlocks = getLocalStorage();

    //Container for html elements
    let timeBlock = "";

    //Count variable for timeBlocks array iteration 
    let index = 0;

    timeBlocks.forEach((block) =>{
        //Reference to each hour in array
        const time = block.hour;

        //Reference to setting styling of text area
        const elClassColor = hasTimePassed(time);
    
        //Reference to task for each hour from array
        const taskString = block.task;

        //Variable containing full HTML elements for each block
        const blockHTMLTemplate = `<form class="row time-block"><div class="col-2 hour">${time}</div><textarea id="text-area-${index}" dataAttr="text-area" class="col-9 ${elClassColor}">${taskString}</textarea><button id="save-button${index}" dataAttr="save-button${index}" class="col-1 saveBtn"><i dataAttr="save-button${index}" class="far fa-save fa-lg"></i></button></form>`;

        timeBlock+= blockHTMLTemplate;
        index++;
    });

    //Add all time blocks in order to the container div
    $("#container").html(timeBlock);

    //Get reference to all Button Elements
    const buttonGroup = document.getElementsByClassName("saveBtn");

    //Creating array from buttonGroup Elements
    var saveButtons = Array.prototype.slice.call(buttonGroup);

    //Create click event listeners for all save buttons
    saveButtons.forEach((button) => {
    if (typeof button === "object") {
      document.getElementById(button.id).addEventListener("click", saveTasks);
    }
  });

};

//Compare current time with schedule blocks to change color of text area
function hasTimePassed(time){
    //Time of schedule block from array
    const timeParsed = moment(time, "hh:mm A").hours();

    //Current time
    let currentDateTime = moment().hours();

    if (timeParsed < currentDateTime){
        return "past";
    }
    else if (timeParsed === currentDateTime){
        return "present";
    }
    else if (timeParsed > currentDateTime){
        return "future";
    }
};

function getLocalStorage(){
    //Get Stored timeblocks and tasks
    let timeBlocks = JSON.parse(localStorage.getItem("timeBlocks"));

    //If there are no timeblocks, get empty schedule array
    if (!timeBlocks){
        timeBlocks = timeBlocksArr;
    }
    return timeBlocks;
};

//Save TextArea text to local storage
function saveTasks(e) {
    //Prevent default refresh submit functionality
    e.preventDefault();

    //Get all previous tasks from local storage
    const previousTasks = getLocalStorage();

    //Get current button number
    const buttonValueNumberString = e.target
      .getAttribute("dataAttr")
      .split("")[11];

    //Parse string to Int to pass into array
    const buttonValueNumber = parseInt(buttonValueNumberString);

    //Get the value of the text area
    const taskString = $('#text-area-'+buttonValueNumberString).val();

    //Add new task/updated task to array of current tasks
    previousTasks[buttonValueNumber].task = taskString;

    //Add new/updated tasks to local storage
    localStorage.setItem("timeBlocks", JSON.stringify(previousTasks));
  }

//Get and set current date in header
function getDate(){
    //Set variable with current date
    var currentDate = moment().format("dddd, MMMM Do");
    //Add date to header p element
    $("#current-day").text(currentDate);
};

renderPage();
getDate();

