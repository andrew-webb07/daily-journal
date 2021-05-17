import {DailyJournal} from "./DailyJournal.js"
import { fetchEntries } from "./database.js"

const container = document.querySelector("#entries")

const render = () => {
    fetchEntries().then(
        () => {
            container.innerHTML = DailyJournal()
        }
    )  
}

render()

container.addEventListener("stateChanged", () => {
    render()
})
