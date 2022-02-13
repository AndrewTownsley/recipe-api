import express from 'express';
import { readFile } from 'fs/promises';
const jsonData = JSON.parse(
    await readFile(
        new URL('../data.json', import.meta.url)
    )
)
console.log(jsonData);

const router = express.Router();

router.get('/', (req, res) => {
    console.log(recipes);
    res.send(recipes)
})

export default router;