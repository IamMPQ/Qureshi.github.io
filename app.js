const wondersData = [
    {
        name: "Great Pyramid of Giza",
        location: "Cairo, Egypt",
        year: "c. 2560 BC",
        category: "ancient",
        description: "The absolute oldest of the Ancient Wonders and the only monument still standing today. It was built as a monumental tomb for the Egyptian Pharaoh Khufu.",
        image: "https://unsplash.com"
    },
    {
        name: "Taj Mahal",
        location: "Agra, India",
        year: "1648 AD",
        category: "modern",
        description: "An iconic white marble architectural masterpiece commissioned by Mughal Emperor Shah Jahan to house the tomb of his cherished wife, Mumtaz Mahal.",
        image: "https://unsplash.com"
    },
    {
        name: "Machu Picchu",
        location: "Cuzco Region, Peru",
        year: "1450 AD",
        category: "modern",
        description: "A spectacular 15th-century Incan citadel mist-shrouded high within the Andes Mountains, globally celebrated for its advanced dry-stone masterwork.",
        image: "https://unsplash.com"
    },
    {
        name: "The Colosseum",
        location: "Rome, Italy",
        year: "80 AD",
        category: "modern",
        description: "A colossal oval amphitheater standing in the epicentre of Rome, representing the pinnacle of ancient engineering and imperial engineering capability.",
        image: "https://unsplash.com"
    },
    {
        name: "Christ the Redeemer",
        location: "Rio de Janeiro, Brazil",
        year: "1931 AD",
        category: "modern",
        description: "An imposing Art Deco statue of Jesus Christ looking out over Rio from the peak of Mount Corcovado, crafted by Paul Landowski.",
        image: "https://unsplash.com"
    },
    {
        name: "Petra Ancient City",
        location: "Ma'an Governorate, Jordan",
        year: "c. 312 BC",
        category: "modern",
        description: "An incredible archaeological treasure world-famous for its majestic structural temple facades completely hand-carved out of rose-pink sandstone cliffs.",
        image: "https://unsplash.com"
    }
];

function renderWonders(filterType = "all") {
    const container = document.getElementById('wonders-container');
    if (!container) return;

    container.innerHTML = '';

    const filteredData = wondersData.filter(wonder => 
        filterType === "all" || wonder.category === filterType
    );

    filteredData.forEach(wonder => {
        const card = document.createElement('article');
        card.className = 'wonder-card';
        card.innerHTML = `
            <div class="image-wrapper">
                <img class="wonder-image" src="${wonder.image}" alt="${wonder.name}" loading="lazy">
                <span class="category-badge">${wonder.category}</span>
            </div>
            <div class="wonder-info">
                <span class="meta-timeline">${wonder.year}</span>
                <h2>${wonder.name}</h2>
                <div class="location-string">
                    <span>📍</span> ${wonder.location}
                </div>
                <p>${wonder.description}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const selectedFilter = e.target.getAttribute('data-filter');
            renderWonders(selectedFilter);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderWonders();
    setupFilters();
});
