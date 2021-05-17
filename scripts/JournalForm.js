import {saveJournalEntry} from "./database.js"

const container = document.querySelector("#entries")

container.addEventListener("click", (changeEvent) => {
  if(changeEvent.target.id === "submitButton") {
    const userDate = document.querySelector("input[name='entryDate']").value
    const userConcept = document.querySelector("input[name='entryConcepts']").value
    const userJournalEntry = document.querySelector("input[name='entryJournal']").value
    const userMood = document.querySelector("input[select='entryMood']").value

    const dataToSendToAPI = {
      date: userDate,
      concept: userConcept,
      journalEntry: userJournalEntry,
      mood: userMood
    }

    saveJournalEntry(dataToSendToAPI)

  }
})

// maybe use change event for mood?


export const JournalForm = () => {
    return `
    <form class="entryForm">
    <!-- Date entry -->
    <fieldset class="entryForm__column">
      <label for="entryDate">Date</label>
      <input type="date" name="entryDate" class="entryForm__date" />
    </fieldset>
    <!-- Basic Concepts Covered that day -->
    <fieldset class="entryForm__column">
      <label for="entryConcepts">Concepts Covered</label>
      <input type="text" name="entryConcepts" class="entryForm__concepts" />
    </fieldset>
    <!-- Descprition of learning in detail -->
    <fieldset class="entryForm__column">
        <label for="entryJournal">Journal Entry</label>
        <input type="text" name="entryJournal" class="entryForm__journal">
    </fieldset>
    <!-- Your overall mood for the day -->
    <fieldset class="entryForm__column">
        <label for="entryMood">Mood for the day</label>
        <select for="entryMood">
            <option value="happy">happy</option>
            <option value="sad">sad</option>
            <option value="frustrated">frustrated</option>
            <option value="confused">confused</option>
            <option value="tired">tired</option>
            <option value="motivated">motivated</option>
            <option value="ok">ok</option>
        </select>
    </fieldset>
    <!-- Button that stores Journal Entry -->
        <button for="entryRecord" id="submitButton">Record Journal Entry</button>
  </form>
    `
}