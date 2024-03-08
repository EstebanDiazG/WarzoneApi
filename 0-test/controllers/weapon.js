


/**
 * Almacena instancias de armas con sus identificadores únicos, nombres, categorías a las que pertenecen y las identificaciones de las imágenes asociadas.
 * @type {Array<Weapon>}
 */
const weapons = [];

const createWeapon = function(weapon){
    weapons.push(weapon);
}

/**
 * Esta función devuelve el número total de instancias de la clase Weapon creadas.
 * @returns {number} - Número de armas creadas.
 */
const countWeapon = function(){
    const count = weapons.length;
    return count;
};


/**
* ESTA FUNCION SIRVE PARA TRAER ARMAS POR ID 
* @param {String} weaponId - este parametro debe ser una id de un arma 
* @returns {Weapon} - retorna la clase Weapon 
*/
const getWeaponById = function(weaponId){
    
    //  const armas = weapons.find(({id}) => id === a);
      const weapon = weapons.find(function(armSelect){
          return armSelect.id === weaponId
      })
      return weapon;
  }

  
/**
 * Esta función devuelve la URL de la imagen asociada a un arma mediante su identificador.
 * @param {number} weaponId - Identificador único del arma del cual se desea obtener la URL de la imagen asociada.
 * @returns {string} - Retorna la URL de la imagen asociada al arma. Si no se encuentra el arma o la imagen correspondiente, podría producirse un error.
 */
const getImageUrlByWeaponId = function(weaponId){
    const weapon = weapons.find(({id}) => id === weaponId );
    const image = images.find(({id}) => id === weapon.imageId);

    return image.url;
}


module.exports = {countWeapon ,getWeaponById, getImageUrlByWeaponId, createWeapon};