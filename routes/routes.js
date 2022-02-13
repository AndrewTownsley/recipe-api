import express from 'express';
import { recipes } from '../data.json'
console.log(recipes);


const router = express.Router();

router.get('/', (req, res) => {
    res.send(recipes)
})