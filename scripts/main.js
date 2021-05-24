import {DailyJournal} from "./DailyJournal.js"
import { fetchEntries, fetchMoods } from "./database.js"

const container = document.querySelector("#entries")

const render = () => {
    fetchEntries()
    .then(fetchMoods)
    .then(
        () => {
            container.innerHTML = DailyJournal()
        }
    )  
}

render()

container.addEventListener("stateChanged", () => {
    render()
})
