    /**
    * Almacena instancias de categorías con sus identificadores únicos.
    * @type {Array<Category>}
    */
    let categories = [];




/**
 * Representa una categoría con su identificador único y nombre.
 * @param {number} id Identificador único de la categoría.
 * @param {string} name Nombre de la categoría.
 */
class Category {
    constructor(id, name){
        
        this.id = id;
        this.name = name;
        categories.push(this);

        return this;
      
    }



    /**
    * Obtiene todas las categorías almacenadas.
    * @returns {Array} - Un arreglo con todas las categorías.
    */
    static getAll(){
        return categories;
    }



    /**
    * Elimina una categoría por su ID.
    * @param {number} id - El ID de la categoría a eliminar.
    * @returns {boolean} - Devuelve true si la categoría se eliminó correctamente, de lo contrario, false.
    */
    static deleteById(id) {
        categories = categories.filter(category => category.id !== parseInt(id));
        return true; 
    }




    /**
    * Actualiza el nombre de una categoría por su ID.
    * @param {number} id - El ID de la categoría a actualizar.
    * @param {string} name - El nuevo nombre para la categoría.
    * @returns {Object|null} - Devuelve la categoría actualizada si se encuentra, de lo contrario, devuelve null.
    */
    static updateById (id,name){
        const buscarCategory = categories.find(category => category.id === parseInt(id));
        if(buscarCategory){
        buscarCategory.name = name;
        return buscarCategory;
        } else{
            return null;
        }
    }
    

    /**
    * Obtiene el conteo total de categorías.
    * @returns {number} - El número total de categorías.
    */
    static getCountCategory (){
        const count = categories.length;
        return count;
    };



    
    /**
    * Obtiene una categoría por su ID.
    * @param {number} categoryId - El ID de la categoría a buscar.
    * @returns {Object|null} - La categoría encontrada o null si no se encuentra.
    */
    static getCategoryById(categoryId){
        const buscarWeaponId = categories.find(category => category.id === parseInt(categoryId));
        return buscarWeaponId;
    };


    
}


module.exports = Category;