/*function saveLead(){
    console.log("Button Clicked...")
}*/

// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)

// myLeads = JSON.parse(myLeads)
// myLeads.push("Sachin")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

// localStorage.setItem("myLeads", "https://www.hackerrank.com/dashboard")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()


let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// localStorage.clear()
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url: "https://www.udemy.com/course/competitive-programming-algorithms-coding-minutes/learn/quiz/5323316#content"}
// ]

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        console.log(tabs)

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        listItems += "<li><a target='_blank' href='" + leads[i] + "'>" + leads[i] + "</a></li>"
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})

