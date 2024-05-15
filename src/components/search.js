export default function Search({ searchValue }) {
  // Declare & export function
  return `
      <div class="mb-4"> <!-- Here we are declaring a div element with spacing at the bottom. -->
        <label class="sr-only" for="search">Search champions</label> <!-- Add screen reader accessibility -->
        <input 
          type="text" // Declare input type
          placeholder="Search champions..." // Add default placeholder
          class="p-2 border border-gray-300 rounded" // Add padding to border, set color and make edges rounded
          id="search" // Set id of the input field
          value="${searchValue}" // makes value placed into the field equal the searchValue which will be passed into the function
          autofocus // Sets the default focus to the input field as the page loads
        />
      </div>
    `;
}
