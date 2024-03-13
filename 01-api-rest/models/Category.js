const connection = require ('../utils/lib/pg')




/**
 * Representa una categoría con su identificador único y nombre.
 * @param {number} id Identificador único de la categoría.
 * @param {string} name Nombre de la categoría.
 */
class Category {
    constructor(id, name){
        
        this.id = id;
        this.name = name;
        return this;
      
    }



    /**
    * Obtiene todas las categorías almacenadas.
    * @returns {Array} - Un arreglo con todas las categorías.
    */
    static getAll = async () => {
        const query = await connection.query(`SELECT * FROM category`);
        return query.rows||[];     
    };



    /**
    * Elimina una categoría por su ID.
    * @param {number} id - El ID de la categoría a eliminar.
    * @returns {boolean} - Devuelve true si la categoría se eliminó correctamente, de lo contrario, false.
    */
    static deleteById = async (id) => {
        const query = await connection.query(`DELETE FROM category WHERE id = $1`,[id]);
        return query.rows||[];
    }




    /**
    * Actualiza el nombre de una categoría por su ID.
    * @param {number} id - El ID de la categoría a actualizar.
    * @param {string} name - El nuevo nombre para la categoría.
    * @returns {Object|null} - Devuelve la categoría actualizada si se encuentra, de lo contrario, devuelve null.
    */
    static updateById = async (id,name) =>{
        if(name){
            const response = await connection.query (
                `UPDATE category
                SET name = $1
                WHERE id = $2
                RETURNING id, name`,
                [ name, id]
            );
            return  response.rowCount ? response.rows[0] : null; 
        };   
    }

    /**
     * Crea una nueva categoría en la base de datos.
     * @param {string} name - El nombre de la nueva categoría.
     * @returns {Object|null} - Devuelve el objeto de la categoría recién creada si la inserción fue exitosa, de lo contrario, devuelve null.
     */

    static create = async (name) => {
            
        if (name) {
        
            const response = await connection.query(
            `INSERT INTO category(
                name
            ) VALUES(
                $1
            ) RETURNING id, name`, [name]
            ); 

        return  response.rowCount ? response.rows[0] : null;   
    };
    }


    

    /**
    * Obtiene el conteo total de categorías.
    * @returns {number} - El número total de categorías.
    */
    static getCountCategory = async () => {
        const query = await connection.query(`SELECT COUNT(*) FROM category`);
        return query.rows||[];
    };



    
    /**
    * Obtiene una categoría por su ID.
    * @param {number} categoryId - El ID de la categoría a buscar.
    * @returns {Object|null} - La categoría encontrada o null si no se encuentra.
    */
    static getCategoryById = async (categoryId) =>{
        const query = await connection.query(`SELECT * FROM category WHERE id = $1`,[categoryId]);
        return query.rowCount ? query.rows[0] : null;
    };


    
}


module.exports = Category;