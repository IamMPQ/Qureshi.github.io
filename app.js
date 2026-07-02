const wondersData = [
    {
        name: "Great Pyramid of Giza",
        location: "Cairo, Egypt",
        year: "c. 2560 BC",
        category: "ancient",
        description: "The absolute oldest of the Ancient Wonders and the only monument still standing today. It was built as a monumental tomb for the Egyptian Pharaoh Khufu.",
        history: "Commissioned by Pharaoh Khufu over a 20-year period, this monument was the tallest man-made structure in the world for over 3,800 years. It was constructed using approximately 2.3 million stone blocks, each weighing an average of 2.5 to 15 tons. The precision of its alignment to true north is one of ancient history's greatest mysteries.",
        image: "images/giza.jfif"
    },
    {
        name: "Taj Mahal",
        location: "Agra, India",
        year: "1648 AD",
        category: "modern",
        description: "An iconic white marble architectural masterpiece commissioned by Mughal Emperor Shah Jahan to house the tomb of his cherished wife, Mumtaz Mahal.",
        history: "This world-renowned structure combined elements of Islamic, Persian, Ottoman Turkish, and Indian architectural styles. Over 20,000 artisans and craftsmen were deployed across the empire to complete it. The central focus is the white marble tomb, which reflects different colours depending on the time of day, glowing a soft pink in the morning and golden under the moon.",
        image: "images/tajmahal.jfif"
    },
    {
        name: "Machu Picchu",
        location: "Cuzco Region, Peru",
        year: "1450 AD",
        category: "modern",
        description: "A spectacular 15th-century Incan citadel mist-shrouded high within the Andes Mountains, globally celebrated for its advanced dry-stone masterwork.",
        history: "Built at the height of the Inca Empire under Emperor Pachacuti, this fortress was abandoned just a century later during the Spanish Conquest. Because the conquistadors never found it, the site remained completely untouched and hidden from the outside world until 1911. Its buildings are constructed without mortar, shaped so perfectly that a knife blade cannot fit between stones.",
        image: "images/machupicchu.jfif"
    },
    {
        name: "The Colosseum",
        location: "Rome, Italy",
        year: "80 AD",
        category: "modern",
        description: "A colossal oval amphitheater standing in the epicentre of Rome, representing the pinnacle of ancient engineering and imperial engineering capability.",
        history: "Built under the Flavian emperors, this amphitheatre could hold up to 65,000 spectators. It hosted gladiator combats, dramatic plays, animal hunts, and mock sea battles where the entire arena floor was flooded with water. Its complex underground network, the hypogeum, featured tunnels and mechanical lifts to surprise crowds with wild beasts.",
        image: "images/colosseum.jfif"
    },
    {
        name: "Christ the Redeemer",
        location: "Rio de Janeiro, Brazil",
        year: "1931 AD",
        category: "modern",
        description: "An imposing Art Deco statue of Jesus Christ looking out over Rio from the peak of Mount Corcovado, crafted by Paul Landowski.",
        history: "Standing 30 metres tall with an arm span of 28 metres, this symbol of peace was constructed using reinforced concrete and covered in thousands of triangular soapstone tiles. It was built entirely through donations from the Brazilian Catholic community and engineered to withstand fierce mountaintop winds and frequent lightning strikes.",
        image: "images/christ.jfif"
    },
    {
        name: "Petra Ancient City",
        location: "Ma'an Governorate, Jordan",
        year: "c. 312 BC",
        category: "modern",
        description: "An incredible archaeological treasure world-famous for its majestic structural temple facades completely hand-carved out of rose-pink sandstone cliffs.",
        history: "Established as the capital of the Nabataean Kingdom, Petra thrived due to its strategic position on regional trade routes for incense and spices. The Nabataeans were masters of water harvesting, constructing complex dam and cistern systems that allowed a desert city to support 30,000 citizens. The most famous structure, Al-Khazneh (The Treasury), was carved directly out of the mountain face.",
        image: "images/petra.jfif"
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
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => openModal(wonder));

        card.innerHTML = `
            <div class="image-wrapper">
                <img class="wonder-image" src="${wonder.image}" alt="${wonder.name}" loading="lazy" onerror="this.src='https://placehold.co{encodeURIComponent(wonder.name)}'">
                <span class="category-badge">${wonder.category}</span>
            </div>
            <div class="wonder-info">
                <span class="meta-timeline">${wonder.year}</span>
                <h2>${wonder.name}</h2>
                <div class="location-string">📍 ${wonder.location}</div>
                <p>${wonder.description}</p>
                <button class="view-details-btn">Explore History →</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function openModal(wonder) {
    const existingModal = document.getElementById('wonder-modal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.id = 'wonder-modal';
    modal.className = 'modal-backdrop';
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" aria-label="Close modal">&times;</button>
            <div class="modal-body-layout">
                <div class="modal-img-pane">
                    <img src="${wonder.image}" alt="${wonder.name}" onerror="this.src='https://placehold.co{encodeURIComponent(wonder.name)}'">
                </div>
                <div class="modal-text-pane">
                    <span class="modal-timeline">${wonder.year} | ${wonder.category.toUpperCase()}</span>
                    <h2>${wonder.name}</h2>
                    <p class="modal-loc">📍 ${wonder.location}</p>
                    <div class="modal-divider"></div>
                    <h3>Historical Overview</h3>
                    <p class="modal-desc">${wonder.description}</p>
                    <h3 style="margin-top: 1.5rem;">Chronicles & Design</h3>
                    <p class="modal-history">${wonder.history}</p>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function closeModal() {
    const modal = document.getElementById('wonder-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderWonders(e.target.getAttribute('data-filter'));
        });
    });
}

// Global initialization sequence
document.addEventListener('DOMContentLoaded', () => {
    renderWonders();
    setupFilters();
});

// ESC key window closer shortcut
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
