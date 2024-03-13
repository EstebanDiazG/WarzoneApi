const {Router} = require ('express');
const {getAllCategory, createCategory, deleteCategory,updateCategoryById,countCategory,getCategoryById} = require('../controllers/category');


const categoryRoutes = Router();
categoryRoutes.get('/count', countCategory);
categoryRoutes.get('/', getAllCategory);
categoryRoutes.get('/:id', getCategoryById);
categoryRoutes.post('/', createCategory);
categoryRoutes.delete('/:id', deleteCategory);
categoryRoutes.put('/:id', updateCategoryById);

module.exports = categoryRoutes;