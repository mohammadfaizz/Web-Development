const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const deleteEl = document.getElementById("dlt-btn");
const saveUrl = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

//storing the localStorage values to leadFromLocalStorage by parsing it using JSON.parse to use it as object
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


//checking the localStorage that it is empty or loaded
if(leadsFromLocalStorage){

  //adding the localStorage values into myLeads because previous values not assigned as global value due to functions block scope
  myLeads = leadsFromLocalStorage;

  //invoking the renderLeads() for rendring the list
  render(myLeads);
}


// adding event by hittng SAVE INPUT button

inputBtn.addEventListener("click",()=>{
  //checking the value it shouldn't be empty
    if(inputEl.value !== "" && inputEl.value !== " "){

    //pushing the input value to myLeads
    myLeads.push(inputEl.value);

    //making input value empty for next event
    inputEl.value = "";

    //setting the key value to localStorage as string by using JSON.stringify
    localStorage.setItem("myLeads",JSON.stringify(myLeads));

    //calling the renderLeads() function
    render(myLeads);
    }
})


// renderLeads() runs here after 

function render(leads){
//making a listItems variable with empty value

let listItems = "";
//staring the loop to assign myLeads values to listItems as string using template string

for(let i=0; i<leads.length;i++)

{   //storing all the input into listItems as template string 
    listItems += 
        ` 
          <li>
            <span>${i+1}</span>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
          </li>
        `
}

// adding content of listitems to ulEl using .innerHTML
ulEl.innerHTML = listItems;
}



// DELETE ALL BUTTON

deleteEl.addEventListener("click",()=>{
  localStorage.clear();
  myLeads = [];
  render(myLeads);
})


// SAVE URL BUTTON
saveUrl.addEventListener("click",()=>{

  chrome.tabs.query({active:true , currentWindow:true},(tabs)=>{
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
    console.log(tabs);
  })

})


