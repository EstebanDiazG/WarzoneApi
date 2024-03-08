const {Router} = require ('express');
const {getAllWeapons, createWeapon, deleteWeapon,getWeaponById,updateWeaponById,countWeapon,getImageUrl} = require('../controllers/weapon');



const weaponRoutes = Router();
weaponRoutes.get('/', getAllWeapons);
weaponRoutes.get('/:id', getWeaponById);
weaponRoutes.get('/count', countWeapon);
weaponRoutes.get('/url/:id', getImageUrl);
weaponRoutes.post('/', createWeapon);
weaponRoutes.put('/:id',updateWeaponById);
weaponRoutes.delete('/:id', deleteWeapon);

module.exports = weaponRoutes;
