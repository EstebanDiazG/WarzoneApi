/**
 * Representa una categoría con su identificador único y nombre.
 * @param {number} id Identificador único de la categoría.
 * @param {string} name Nombre de la categoría.
 */
class Category {
    constructor(id, name){
        
        this.id = id;
        this.name = name;
      
    }
}


module.exports = Category;