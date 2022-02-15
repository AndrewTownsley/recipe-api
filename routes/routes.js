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
    const { name } = req.params
    // add new recipe to recipes array unless it already exists
    if (recipes.recipes.find(recipe => recipe.name === name)) {
        res.status(400).send({ error: 'Recipe already exists' })
    } else {
        recipes.recipes.push(recipe);
        res.send(recipe);
    }
})

// create PUT route to update a recipe, if recipe does not exist, return 'recipe does not exist'
router.put('/:name', (req, res) => {
    const { name } = req.params
    const recipe = req.body;
    const index = recipes.recipes.findIndex(recipe => recipe.name === name);
    if (index === -1) {
        res.status(404).send({ error: 'Recipe not found' })
    } else {
        recipes.recipes[index] = recipe;
        res.send(recipe);
    }
})



export default router;

// console.log("update route...");
// const { index } = req.params;
// const { name, ingredients, instructions } = req.body;
// const recipe = recipes.find((recipe) => recipe.index === index);

// if(name) recipe.name = name;
// if(ingredients) recipe.ingredients = ingredients;
// if(instructions) recipe.instructions = instructions;

// res.send(`Recipe with name: ${name} has been updated`);