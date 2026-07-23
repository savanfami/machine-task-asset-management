import express from 'express';
import { createCategory, deleteCategory, getCategories, showEditPage, updateCategory } from '../controller/assetCategory.controller.js';


const router = express.Router();

router.get('/', getCategories);

router.get('/add', (req, res) => {
    res.render('assetCategory/add');
});

router.post('/add', createCategory);

router.get('/edit/:id', showEditPage);

router.post('/edit/:id', updateCategory);

router.get('/delete/:id', deleteCategory);

export default router;