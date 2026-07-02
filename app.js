const wondersData = [
    {
        name: "Great Pyramid of Giza",
        location: "Cairo, Egypt",
        year: "c. 2560 BC",
        description: "The oldest of the Ancient Wonders and the only one still largely intact. Built as a tomb for Pharaoh Khufu.",
        image: "https://unsplash.com"
    },
    {
        name: "Taj Mahal",
        location: "Agra, India",
        year: "1648 AD",
        description: "An immense mausoleum of white marble, built by order of the Mughal emperor Shah Jahan in memory of his favorite wife.",
        image: "https://unsplash.com"
    },
    {
        name: "Machu Picchu",
        location: "Cuzco Region, Peru",
        year: "1450 AD",
        description: "An Incan citadel set high in the Andes Mountains. Abandoned centuries ago, it is famous for its sophisticated dry-stone walls.",
        image: "https://unsplash.com"
    },
    {
        name: "Colosseum",
        location: "Rome, Italy",
        year: "80 AD",
        description: "An oval amphitheater in the center of the city of Rome, built of travertine limestone, tuff, and brick-faced concrete.",
        image: "https://unsplash.com"
    },
    {
        name: "Christ the Redeemer",
        location: "Rio de Janeiro, Brazil",
        year: "1931 AD",
        description: "An Art Deco statue of Jesus Christ, created by French sculptor Paul Landowski and built by engineer Heitor da Silva Costa.",
        image: "https://unsplash.com"
    },
    {
        name: "Chichen Itza",
        location: "Yucatán, Mexico",
        year: "c. 600 AD",
        description: "A large pre-Columbian city built by the Maya people. The stepped pyramid, El Castillo, dominates the center of the site.",
        image: "https://unsplash.com"
    },
    {
        name: "Petra",
        location: "Ma'an Governorate, Jordan",
        year: "c. 312 BC",
        description: "A famous archaeological site in Jordan's southwestern desert. It contains tombs and temples carved into pink sandstone cliffs.",
        image: "https://unsplash.com"
    },
    {
        name: "Great Wall of China",
        location: "Northern China",
        year: "c. 220 BC",
        description: "A series of fortifications made of stone, brick, tamped earth, and wood, built to protect against nomadic invasions.",
        image: "https://unsplash.com"
    }
];

function renderWonders(wonders) {
    const container = document.getElementById('wonders-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clears the "Loading wonders..." text

    wonders.forEach(wonder => {
        const card = document.createElement('div');
        card.className = 'wonder-card';
        card.innerHTML = `
            <img class="wonder-image" src="${wonder.image}" alt="${wonder.name}">
            <div class="wonder-info">
                <h2>${wonder.name}</h2>
                <div class="location">${wonder.location} • ${wonder.year}</div>
                <p>${wonder.description}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Run as soon as the page loads
window.addEventListener('DOMContentLoaded', () => {
    renderWonders(wondersData);
});
