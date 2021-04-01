const topFive = document.querySelector('#top-five')

const fetchRandomUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
    
    
    renderUsers(data.results)
}

fetchRandomUsers();

// fetchRandomUsers().then(data => {
//     renderUsers(data.results)
// })


const renderUser = ({picture, name, location}) => {
    return `
        <div class="info-container">
            <img src=${picture.medium} class="profile-picture">
            <p>${name.first} ${name.last}</p>
            <p>${location.city}, ${location.state}</p>
        </div>
    `
}

const renderUsers = (users) => {
    let html = "";
    for(let user of users) {
        html += renderUser(user);
    }
    topFive.innerHTML = html;
}




