"use strict";

const utils = require( "../utils" );

const register = async ( { sql, getConnection } ) => {
   // read in all the .sql files for this folder
   const sqlQueries = await utils.loadSqlQueries( "events" );

   const getEvents = async userId => {
       // get a connection to SQL Server
       const cnx = await getConnection();
       // create a new request
       const request = await cnx.request();
       // configure sql query parameters
       request.input( "userId", sql.VarChar( 50 ), userId );
       // return the executed query
       return request.query( sqlQueries.getEvents );
   };

    const addEvent = async ( { userId, title, description, startDate, endDate } ) => {
        // console.log("startDate: ", startDate);
        // console.log("startTime: ", startTime);
        // console.log("endDate:", endDate);
        
        // get a connection to SQL Server
        const pool = await getConnection();
        // create a new request
        const request = await pool.request();

        // configure sql query parameters
        request.input( "userId", sql.VarChar( 50 ), userId );
        request.input( "title", sql.NVarChar( 200 ), title );
        request.input( "description", sql.NVarChar( 1000 ), description );
        request.input( "startDate", sql.Date, startDate);
        // request.input( "startTime", sql.DateTime, startTime);
        request.input( "endDate", sql.Date,  endDate );
        
        // request.input( "endTime", sql.Time, endTime );
        
        // console.log(strStartDate);
        
        // return the executed query
        return request.query( sqlQueries.addEvent );
    };

   return {
        addEvent,
        getEvents
   };
};

module.exports = { register };