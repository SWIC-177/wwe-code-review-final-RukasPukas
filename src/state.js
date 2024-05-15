import { BELTS, CHAMPIONS } from "./data"; // Import Belts and Champions Arrays
import { filterItemsByTerm } from "./lib"; // Import Function of filtering search items by Term

export class State {
  #belts = BELTS;

  #champions = CHAMPIONS;

  #search = "";

  get data() {
    const filteredResults = filterItemsByTerm({
      terms1: this.#champions,
      terms2: this.#belts,
      actionTerm: this.#search,
    });

    return {
      champions: filteredResults.terms1,
      belts: filteredResults.terms2,
    };
  }

  get searchState() {
    return this.#search;
  }

  set searchState(value) {
    this.#search = value;
  }
}
// Here the Belts and champions data are filtered through when searching. All non viable options are determined and given a value of true or false based on the filterItemsByTerm function. If I am understanding this correctly if the values are deemed false than the table values are remodified only containing the potentially available items while removing the non viable items.
