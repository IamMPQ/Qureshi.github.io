const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const wondersData = [
    {
        name: "Great Pyramid of Giza",
        location: "Cairo, Egypt",
        year: "c. 2560 BC",
        description: "The oldest of the Ancient Wonders and the only one still largely intact. Built as a tomb for Pharaoh Khufu.",
        image: "https://unsplash.com"
    }
];

app.get('/api/wonders', (req, res) => {
    res.json(wondersData);
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
