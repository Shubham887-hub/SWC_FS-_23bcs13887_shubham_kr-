const loadBtn =
document.getElementById("loadBtn");

const status =
document.getElementById("status");

const result =
document.getElementById("result");


// ----------------------
// Retry Function
// ----------------------

async function fetchWithRetry(
    url,
    retries = 3
){

    for(
        let attempt = 1;
        attempt <= retries;
        attempt++
    ){

        try{

            status.className =
            "loading";

            status.textContent =
            `Attempt ${attempt} of ${retries}`;

            const response =
            await fetch(url);

            if(!response.ok){

                throw new Error(
                    "API Failed"
                );
            }

            const data =
            await response.json();

            return data;
        }

        catch(error){

            console.log(
                `Retry ${attempt} Failed`
            );

            if(
                attempt === retries
            ){

                throw error;
            }

        }

    }

}


// ----------------------
// Load Data
// ----------------------

async function loadData(){

    result.innerHTML = "";

    try{

        const data =
        await fetchWithRetry(
            "https://jsonplaceholder.typicode.com/users"
        );

        status.className =
        "success";

        status.textContent =
        "Data Loaded Successfully";

        result.innerHTML = `
            <h3>
                ${data[0].name}
            </h3>

            <p>
                ${data[0].email}
            </p>
        `;
    }

    catch(error){

        status.className =
        "error";

        status.textContent =
        "Failed after 3 retries";

        result.innerHTML = "";
    }

}


loadBtn.addEventListener(
    "click",
    loadData
);
