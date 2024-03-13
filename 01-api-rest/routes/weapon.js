const {Router} = require ('express');
const {getAllWeapons, createWeapon, deleteWeapon,getWeaponById,updateWeaponById,countWeapon,getImageUrl} = require('../controllers/weapon');



const weaponRoutes = Router();
weaponRoutes.get('/count', countWeapon);
weaponRoutes.get('/', getAllWeapons);
weaponRoutes.get('/:id', getWeaponById);
weaponRoutes.get('/url/:id', getImageUrl);
weaponRoutes.post('/', createWeapon);
weaponRoutes.put('/:id',updateWeaponById);
weaponRoutes.delete('/:id', deleteWeapon);

module.exports = weaponRoutes;
