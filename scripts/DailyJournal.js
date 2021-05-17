import {Entries} from "./Entries.js"
import {JournalForm} from "./JournalForm.js"

export const DailyJournal = () => {
    return `
    <article class="entryForm">
    ${ JournalForm()}
        </article>

        <h2>Journel Entries</h2>
        <div class="entryList">
            ${ Entries() }
        </div>
    `
}