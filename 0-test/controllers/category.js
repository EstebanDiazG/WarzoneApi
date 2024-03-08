
/**
 * Almacena instancias de categorías con sus identificadores únicos.
 * @type {Array<Category>}
 */
const categories = [];

const createCategory = function(category){
    categories.push(category);
}


/**
 * Esta función devuelve el número total de instancias de la clase Category creadas.
 * @returns {number} - Número de categorías creadas.
 */
const countCategory = function(){
    const count = categories.length;
    return count;
};




/**
 * Esta función devuelve una instancia de la clase Category correspondiente al identificador proporcionado.
 * @param {number} categoryId - Identificador único de la categoría que se desea obtener.
 * @returns {Category} - Retorna la instancia de la clase Category asociada al identificador.
 */
const getCategoryById = function(categoryId){
    const category = categories.find(({id}) => id === categoryId);
    return category;
}



module.exports = {countCategory, getCategoryById, createCategory};