const searchInput =
document.getElementById(
    "searchInput"
);

const suggestionsList =
document.getElementById(
    "suggestions"
);

const data = [
    "Apple",
    "Apricot",
    "Application",
    "Banana",
    "Blueberry",
    "Cherry",
    "Date",
    "Dragon Fruit",
    "Grapes",
    "Guava",
    "Kiwi",
    "Mango",
    "Orange",
    "Papaya",
    "Pineapple",
    "Strawberry",
    "Watermelon"
];

let currentFocus = -1;

let filteredResults = [];


// Render Suggestions

function renderSuggestions(items){

    suggestionsList.innerHTML = "";

    items.forEach(item => {

        const li =
        document.createElement("li");

        li.textContent = item;

        li.addEventListener(
            "click",
            () => {

                searchInput.value =
                item;

                suggestionsList.innerHTML = "";
            }
        );

        suggestionsList
        .appendChild(li);
    });

}


// Search Input

searchInput.addEventListener(
    "input",
    function(){

        const query =
        this.value.toLowerCase();

        currentFocus = -1;

        if(!query){

            suggestionsList.innerHTML = "";

            return;
        }

        filteredResults =
        data.filter(item =>

            item
            .toLowerCase()
            .includes(query)
        );

        renderSuggestions(
            filteredResults
        );

    }
);


// Keyboard Navigation

searchInput.addEventListener(
    "keydown",
    function(event){

        const items =
        suggestionsList.querySelectorAll("li");

        if(
            event.key ===
            "ArrowDown"
        ){

            currentFocus++;

            if(
                currentFocus >=
                items.length
            ){

                currentFocus = 0;
            }

            updateHighlight(items);
        }

        else if(
            event.key ===
            "ArrowUp"
        ){

            currentFocus--;

            if(
                currentFocus < 0
            ){

                currentFocus =
                items.length - 1;
            }

            updateHighlight(items);
        }

        else if(
            event.key ===
            "Enter"
        ){

            event.preventDefault();

            if(
                currentFocus > -1 &&
                items[currentFocus]
            ){

                searchInput.value =
                items[currentFocus]
                .textContent;

                suggestionsList.innerHTML = "";
            }
        }

    }
);


// Highlight Selected Item

function updateHighlight(items){

    items.forEach(item => {

        item.classList.remove(
            "active"
        );

    });

    if(
        currentFocus >= 0 &&
        items[currentFocus]
    ){

        items[currentFocus]
        .classList
        .add("active");
    }

}
