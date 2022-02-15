import express from 'express';
import { readFile } from 'fs/promises';
const recipes = JSON.parse(
    await readFile(
        new URL('../data.json', import.meta.url)
    )
)


// Declare router
const router = express.Router();

// Declare GET route to get all recipes
router.get('/', (req, res) => {
    // return all recipe names
    res.send(recipes);
})

// GET route to get a recipe by name
router.get('/:name', (req, res) => {
    console.log(recipes);
    const { name } = req.params
    res.send(JSON.stringify(recipes.recipes.find(recipe => recipe.name === name)));
    if (recipe) {
        } else {
        res.status(404).send({ error: 'Recipe not found' })
    }
})


// POST route to create new recipe
router.post('/', (req, res) => {
    const recipe = req.body;
    recipes.push({...recipe})
    res.send(`Recipe with name: ${recipe.name} has ben created.`)
})

// PATCH route to update recipe
router.patch('/:id', (req, res) => {
    console.log("update route...");
    const { id } = req.params;
    const { name, ingredients, instructions } = req.body;
    const recipe = recipes.find((recipe) => recipe.name === name);

    if(name) recipe.name = name;
    if(ingredients) recipe.ingredients = ingredients;
    if(instructions) recipe.instructions = instructions;

    res.send(`Recipe with name: ${name} has been updated`);
})


export default router;