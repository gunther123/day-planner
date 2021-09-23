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
        const elClassColor = "present";
        //Reference to task for each hour from array
        const taskString = block.task;
        //Variable containing full HTML elements for each block
        const blockHTMLTemplate = `<form class="row time-block"><div class="col-2 hour">${time}</div><textarea id="text-area-${index}" class="col-9 ${elClassColor}">${taskString}</textarea><button id="save-button${index}" dataAttr="save-button${index}" class="col-1 saveBtn"><i dataAttr="save-button${index}" class="far fa-save fa-lg"></i></button></form>`;

        timeBlock+= blockHTMLTemplate;
        console.log(timeBlock);
        index++;
    });

    $("#container").html(timeBlock);
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

