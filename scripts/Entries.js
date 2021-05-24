/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import {getEntries} from "./database.js"


export const Entries = () => {
    const entries = getEntries()
    let allEntriesAsHTML = ""


    allEntriesAsHTML += entries.map(entry => {
        return `
        <h2>${entry.concept}</h2>
           <div>${entry.journalEntry}</div>
           <div>${entry.date}</div>
           <div>${entry.mood.label}</div>`
    }).join("")

    return allEntriesAsHTML
}