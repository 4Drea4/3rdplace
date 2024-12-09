const eventCards = document.getElementById('event-cards');
const modal = document.getElementById('modal');
const eventForm = document.getElementById('event-form');
const closeModal = document.getElementById('close-modal');
const searchBar = document.getElementById('search-bar');
const createEventBtn = document.getElementById('create-event-btn');

// example-demo 
let events = [
    {
        name: 'Central Park Meetup',
        city: 'New York',
        address: '123 Main St, New York',
        date: '2024-12-10T14:00',
        image: 'images /centralpark.jpeg',
        description: 'Pizza and park? They say no one goes outside anymore tbh the park is the perfect place for the book readers, the joggers, the creative, and the content creators. We will meet at the north end side by the fountain. '
    },
    {
        name: 'Sunny Beach Party',
        city: 'Miami',
        address: '789 Shoreline Blvd, Miami',
        date: '2024-12-15T18:00',
        image: 'images /beachparty.jpeg',
        description: 'We are re-establishing what fun looks like. We are back to sun bathing, water skiing, bbqing on the beach. Bring stuff for sand castles to join the competition. Volleyball tournament will start once we get enough players..'
    },
];

function renderEvents(filter = '') {
    eventCards.innerHTML = '';
    events
        .filter(event => event.city.toLowerCase().includes(filter.toLowerCase()))
        .forEach(event => {
            const card = document.createElement('div');
            card.classList.add('event-card');
            card.innerHTML = `
                <img src="${event.image}" alt="${event.name}">
                <h3>${event.name}</h3>
                <p>${event.address}</p>
                <p>${new Date(event.date).toLocaleString()}</p>
                <p><strong>${event.city}</strong></p>
                <p class="event-description">${event.description}</p>
            `;
            eventCards.appendChild(card);
        });
}


eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('event-name').value;
    const city = document.getElementById('event-city').value;
    const address = document.getElementById('event-address').value;
    const date = document.getElementById('event-date').value;
    const image = document.getElementById('event-image').value || 'https://via.placeholder.com/300';

    events.push({ name, city, address, date, image });
    renderEvents();
    modal.style.display = 'none';
    eventForm.reset();
});

createEventBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

searchBar.addEventListener('input', (e) => {
    renderEvents(e.target.value);
});

renderEvents();
