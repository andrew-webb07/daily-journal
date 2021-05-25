/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
   entries: [],
   moods: []
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

const container = document.querySelector("#entries")

export const fetchEntries = () => {
    return fetch("http://localhost:8088/entries?embed=mood") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(
            (data) => {
            database.entries = data// What should happen when we finally have the array?
        }
    )
}

export const fetchMoods = () => {
    return fetch("http://localhost:8088/moods")
    .then(response => response.json())
    .then((moodData) => {
        database.moods = moodData
    })
}

export const getMoods = () => {
    return [...database.moods]
}

export const getEntries = () => {
    return [...database.entries]
}

export const saveJournalEntry = (entryObject) => {
    // Use `fetch` with the POST method to add your entry to your API
return fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(entryObject)
})
    .then(
        (response) => {
            //  Get all journal entries
            response.json()
        }
    )
    .then(
        () => {
            //  Broadcast the state change event
            container.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

export const deleteJournalEntry = (entryId) => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {method: "DELETE"})
    .then(() => container.dispatchEvent(new CustomEvent("stateChanged")))}