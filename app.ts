import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.json({ message: 'Hello from Docker 🐳' }) 
});

app.listen(port, () => {
    console.log(`Server running 👉 http://localhost:${port}`);
});