const itemList =
document.getElementById(
    "itemList"
);

const pagination =
document.getElementById(
    "pagination"
);


// Sample Data

const products = [];

for(let i = 1; i <= 50; i++){

    products.push(
        `Product ${i}`
    );
}


const itemsPerPage = 10;

let currentPage = 1;


// Render Items

function renderItems(){

    itemList.innerHTML = "";

    const startIndex =
    (currentPage - 1)
    * itemsPerPage;

    const endIndex =
    startIndex + itemsPerPage;

    const pageItems =
    products.slice(
        startIndex,
        endIndex
    );

    pageItems.forEach(item => {

        const li =
        document.createElement("li");

        li.textContent = item;

        itemList.appendChild(li);
    });

}


// Render Pagination

function renderPagination(){

    pagination.innerHTML = "";

    const totalPages =
    Math.ceil(
        products.length /
        itemsPerPage
    );

    // Previous Button

    const prevBtn =
    document.createElement("button");

    prevBtn.textContent =
    "Previous";

    prevBtn.disabled =
    currentPage === 1;

    prevBtn.addEventListener(
        "click",
        () => {

            if(currentPage > 1){

                currentPage--;

                updateUI();
            }
        }
    );

    pagination.appendChild(
        prevBtn
    );


    // Page Numbers

    for(
        let i = 1;
        i <= totalPages;
        i++
    ){

        const pageBtn =
        document.createElement(
            "button"
        );

        pageBtn.textContent = i;

        if(
            i === currentPage
        ){

            pageBtn.classList
            .add("active");
        }

        pageBtn.addEventListener(
            "click",
            () => {

                currentPage = i;

                updateUI();
            }
        );

        pagination.appendChild(
            pageBtn
        );
    }


    // Next Button

    const nextBtn =
    document.createElement(
        "button"
    );

    nextBtn.textContent =
    "Next";

    nextBtn.disabled =
    currentPage === totalPages;

    nextBtn.addEventListener(
        "click",
        () => {

            if(
                currentPage <
                totalPages
            ){

                currentPage++;

                updateUI();
            }
        }
    );

    pagination.appendChild(
        nextBtn
    );

}


// Update UI

function updateUI(){

    renderItems();

    renderPagination();
}


// Initial Render

updateUI();
