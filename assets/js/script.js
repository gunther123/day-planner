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
    //Reference to where the container is in the html
    const timeContainer = $(".container");
}


function getLocalStorage(){
    //Get Stored timeblocks and tasks
    timeBlocks = JSON.parse(localStorage.getItem("blocks"));
    //If there are no timeblocks, get empty schedule array
    if (!timeBlocks){
        timeBlocks = timeBlocksArr;
    }
    return timeBlocks;
}

renderPage();

