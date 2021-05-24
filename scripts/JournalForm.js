import {saveJournalEntry, getMoods} from "./database.js"

const container = document.querySelector("#entries")

container.addEventListener("click", (changeEvent) => {
  if(changeEvent.target.id === "submitButton") {
    const userDate = document.querySelector("input[name='entryDate']").value
    const userConcept = document.querySelector("input[name='entryConcepts']").value
    const userJournalEntry = document.querySelector("input[name='entryJournal']").value
    const userMood = document.querySelector(".entryMood").value

    const userMoodInt = parseInt(userMood)

    const moods = getMoods()

    const foundMood = moods.find(mood => mood.id === userMoodInt)

    const dataToSendToAPI = {
      date: new Date(userDate).toLocaleDateString(),
      concept: userConcept,
      journalEntry: userJournalEntry,
      moodId: parseInt(userMood),
      mood: {
        id: foundMood.id,
        label: foundMood.label
      }
    }

    saveJournalEntry(dataToSendToAPI)

  }
})

// maybe use change event for mood?


export const JournalForm = () => {

    const moods = getMoods()

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
        <select class="entryMood" for="entryMood">
            ${moods.map(mood => {
              return `<option value="${mood.id}">${mood.label}</option>`
            }).join("")}
        </select>
    </fieldset>
    <!-- Button that stores Journal Entry -->
        <button for="entryRecord" id="submitButton">Record Journal Entry</button>
  </form>
    `
}