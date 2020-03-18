"use strict";

const utils = require( "../utils" );

const register = async ( { sql, getConnection } ) => {
    // read in all the .sql files for this folder
    const sqlQueries = await utils.loadSqlQueries( "users" );

    const getUsers = async userId => {
        // get a connection to SQL Server
        const cnx = await getConnection();
        // create a new request
        const request = await cnx.request();
        // configure sql query parameters
        // request.input( "userId", sql.VarChar( 50 ), userId );
        // return the executed query
        return request.query( sqlQueries.getUsers );
    };

    const getUser = async id => {
        // get a connection to SQL Server
        const cnx = await getConnection();
        // create a new request
        const request = await cnx.request();
        // configure sql query parameters
        request.input( "id", sql.Int, id );
        // return the executed query
        return request.query( sqlQueries.getUser );
    };

    const addUser = async ( { nombre, apaterno, amaterno, numeroEmpleado, usuario, password, userId } ) => {
         // get a connection to SQL Server
        const pool = await getConnection();
        // create a new request
        const request = await pool.request();

        // configure sql query parameters
        request.input( "nombre", sql.VarChar( 50 ), nombre );
        request.input( "apaterno", sql.NVarChar( 50 ), apaterno );
        request.input( "amaterno", sql.NVarChar( 50 ), amaterno );
        request.input( "numeroEmpleado", sql.Int, numeroEmpleado );
        request.input( "usuario", sql.NVarChar( 50 ), usuario );
        request.input( "password", sql.NVarChar( 50 ), password );
        request.input( "usuarioCreacion", sql.Int, userId );

        // return the executed query
        return request.query( sqlQueries.addUser );
    };

    const updateUser = async ( { id, nombre, apaterno, amaterno, numeroEmpleado, usuario, password, userId } ) => {
        // get a connection to SQL Server
        const pool = await getConnection();
        // create a new request
        const request = await pool.request();

        // configure sql query parameters
        request.input( "id", sql.Int , id );
        request.input( "nombre", sql.VarChar( 50 ), nombre );
        request.input( "apaterno", sql.NVarChar( 50 ), apaterno );
        request.input( "amaterno", sql.NVarChar( 50 ), amaterno );
        request.input( "numeroEmpleado", sql.Int, numeroEmpleado );
        request.input( "usuario", sql.NVarChar( 50 ), usuario );
        request.input( "password", sql.NVarChar( 50 ), password );
        request.input( "usuarioActualizacion", sql.Int, userId );

        // return the executed query
        return request.query( sqlQueries.updateUser );
    };

    const deleteUser = async ( { id } ) => {
        const pool = await getConnection();
        const request = await pool.request();

        request.input( "id", sql.Int, id );

        return request.query( sqlQueries.deleteUser );
    };

    return {
        getUsers,
        getUser,
        addUser,
        updateUser,
        deleteUser
   };
};

module.exports = { register };