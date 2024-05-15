import Search from "./src/components/search";
import Table from "./src/components/table";
import { State } from "./src/state";
// Import functions, table and class from their files.

const appElement = document.getElementById("app");
// set the "DOM" Document Object Model to have the id "app" (used in index.html)
const state = new State();

function render(st) {
  appElement.innerHTML = `
  ${Search({ searchValue: st.searchState })}
  ${Table({
    col1: st.data.belts,
    col2: st.data.champions,
    col1Header: "Belt",
    col2Header: "Champion",
  })}
  `;
  // Function that calls the state class and uses items from the Belt and Champion array that are applicable. Also sets the headers respectively as Belt and Champion
  const searchInput = document.getElementById("search");
  const searchValueLen = searchInput.value.length;

  searchInput.focus(); // Set search input as focused item
  searchInput.setSelectionRange(searchValueLen, searchValueLen); // I had to look up what was going on here, but from my understanding this just makes sure the cursor is placed at the end of the of the search text? I tried it out and it seems to be what it is doing. Can make it a little odd if you make a typo to fix it without deleting all the text to the point of the typo.

  searchInput.addEventListener("input", (e) => {
    // eslint-disable-next-line no-param-reassign -- It's a class with a setter!
    st.searchState = e.target.value;
    render(st);
  }); // Adds an event listener whenever text input is added into the search field.
}

render(state);
// renders the table.
