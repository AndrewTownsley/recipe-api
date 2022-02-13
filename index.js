import express from 'express';
import bodyParser from 'body-parser'
import recipeRoutes from './routes/routes.js'

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use('/recipes', recipeRoutes);

app.get('/', (req, res) => res.send('** Home Page **'))

app.listen(PORT, () => console.log(`Server is Listening on PORT:${PORT}`))