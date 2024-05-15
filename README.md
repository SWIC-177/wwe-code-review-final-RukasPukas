# WWE Final Reflections

## Components

### Search

This file creates, exports and creates the search element and the function. In it the search field is defined with its design attributes. I was a little confused, but does the "searchValue" then become the #search that is called in the state.js file? If it is then it makes more sense to me I just was not 100% sure.

### Table

I did find this interesting that you created the table in its own file and using JS and HTML simultaneously. I did like the usage of the .map method and your usage made it make more sense to me how it can be used in a more realistic way creating a new array from the two. I know this is pretty much what we did in the previous assignments but this made it click better.

### State

I wasn't completely sure how this was doing what it was doing, the #'s still confuse me a bit. I am assuming the searchValue in the search.js file is being assigned to the search id which is then passed to the State file with the #. Though maybe my understanding is off. I think this file is setting up the function to get the targeted value in the main.js file and then reset the state of the table. It just seemed over my head, I would not have came up with it :sweat_smile:. It works though and is an interesting way to think about doing it.

## Main

The main.js file made the most practical sense. I get where the functions are being called from and where they are getting their information from. The render function lays out the table from the information it gathers from the
search.js file. The searchInput.setSelectionRange did have me confused for a bit. I had to look up what was exactly going on here but I guess it is making sure the cursor is set to the end of the input range. The layout of the table is also called by calling the state class. Which is this still considered the JS pseudo class?

## Overall

It was a little difficult to understand and I think a lot of it just stems from lack of experience with the syntax of JS, especially when mixed directly with HTML and TailWind. I feel for the most part I got the gist of what was going on but it was still a little over my head as to exactly how it was doing it. I also need to get better at understanding how exactly each functions and their arguments are passed from function to function.
