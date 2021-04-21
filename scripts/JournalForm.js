const JournalForm = () => {
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
        <button for="entryRecord">Record Journal Entry</button>
  </form>
    `
}