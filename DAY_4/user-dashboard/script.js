const usersContainer =
document.getElementById(
    "usersContainer"
);

const loader =
document.getElementById(
    "loader"
);


// Render Users

function renderUsers(users){

    users.forEach(user => {

        const card =
        document.createElement("div");

        card.className =
        "user-card";

        card.innerHTML = `
            <h3>${user.name}</h3>

            <p>
                ${user.email}
            </p>

            <p>
                ${user.phone}
            </p>
        `;

        usersContainer
        .appendChild(card);
    });
}


// Fetch Users

async function fetchUsers(){

    try{

        loader.style.display =
        "block";

        const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users =
        await response.json();

        renderUsers(users);

    }
    catch(error){

        loader.innerHTML =
        "Failed to load users";

        console.error(error);

        return;
    }

    loader.style.display =
    "none";
}


// Initial Load

fetchUsers();
