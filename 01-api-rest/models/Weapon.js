const connection = require ('../utils/lib/pg')

/**
 * Representa un arma con su identificador único, nombre, categoría a la que pertenece y la identificación de la imagen asociada.
 *  @param {number} id Identificador único del arma.
 *  @param {string} name Nombre del arma.
 *  @param {number} categoryId Identificador de la categoria a la que pertenece el arma.
 *  @param {number} imageId Identificador de la imagen asociada al arma.
 */
class Weapon {
    constructor(id, name, categoryId, imageId){
        
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.imageId = imageId;
        return this;
    
    }



    /**
    * Obtiene todas las armas almacenadas.
    * @returns {Array} - Un arreglo con todas las armas.
    */
    static getAll = async () => {
        const query = await connection.query(`SELECT * FROM weapon`);
        return query.rows||[];     
    };



    /**
    * Elimina un arma por su ID.
    * @param {number} id - El ID del arma a eliminar.
    * @returns {boolean} - Devuelve true si el arma se eliminó correctamente, de lo contrario, false.
    */
    static deleteById = async (id) => {
        const query = await connection.query(`DELETE FROM weapon WHERE id = $1`,[id]);
        return query.rows||[];
    }


    /**
     * Crea un nuevo arma en la base de datos.
     * @param {string} name - El nombre del nuevo arma.
     * @param {string} categoryId - El ID de la categoría del nuevo arma.
     * @param {string} imageId - El ID de la imagen del nuevo arma.
     * @returns {Object|null} - Devuelve el objeto del arma recién creada si la inserción fue exitosa, de lo contrario, devuelve null.
     */
    static create = async (name, categoryId, imageId) => {
        
        if (name && categoryId && imageId) {
        
            const response = await connection.query(
            `INSERT INTO weapon(
                name, category_id, image_id
            ) VALUES(
                $1, (SELECT id FROM category WHERE name = $2),
                    (SELECT id FROM image WHERE url = $3)
            ) RETURNING id, name, category_id, image_id`, [
                name, categoryId, imageId
            ]
            ); 
  
            return  response.rowCount ? response.rows[0] : null;   
        };
    }

    /**
    * Actualiza las propiedades de un arma por su ID.
    * @param {number} id - El ID del arma a actualizar.
    * @param {string} name - El nuevo nombre para el arma.
    * @param {number} categoryId - El nuevo ID de la categoría para el arma.
    * @param {number} imageId - El nuevo ID de la imagen para el arma.
    * @returns {Object|null} - Devuelve el arma actualizada si se encuentra, de lo contrario, devuelve null.
    */
    static updateById = async (id,name,categoryId,imageId) => {

        if(name && categoryId && imageId){
            const response = await connection.query (
                `UPDATE weapon
                SET name = $1, category_id = $2, image_id = $3
                WHERE id = $4
                RETURNING id, name, category_id, image_id`,
                [ name, categoryId,imageId,id]
            );
            return  response.rowCount ? response.rows[0] : null; 
        };   
    }


    /**
    * Obtiene un arma por su ID.
    * @param {number} id - El ID del arma a buscar.
    * @returns {Object|null} - El arma encontrada o null si no se encuentra.
    */
    static getWeaponById = async (id) => {
        const query = await connection.query(`SELECT * FROM weapon WHERE id = $1`,[id]);
        return query.rowCount ? query.rows[0] : null;
    };
    
    


    /**
    * Obtiene el conteo total de armas.
    * @returns {number} - El número total de armas.
    */
    static getCountWeapon = async () =>{
        const query = await connection.query(`SELECT COUNT(*) FROM weapon`);
        return query.rowCount ?query.rows[0].count : 0 ;
    };

    

    //en desarrollo
    static getImageUrlByWeaponId = async (weaponId) => {
        const query = await connection.query(
            `SELECT image.url
             FROM image
             NATURAL JOIN weapon
             WHERE weapon.id = $1`);
        return query.rows||[];
    }
 
}


module.exports = Weapon;