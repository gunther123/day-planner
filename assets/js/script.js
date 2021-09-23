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
//Reference to where the container is in the html

function renderPage(){
    const timeBlocks = getLocalStorage();
    const timeContainer = $(".container");
}


function getLocalStorage(){
    timeBlocks = JSON.parse(localStorage.getItem("blocks"));
    if (!timeBlocks){
        timeBlocks = timeBlocksArr;
    }
    return timeBlocks;
}

renderPage();

