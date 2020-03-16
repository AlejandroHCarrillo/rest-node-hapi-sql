"use strict";

module.exports.register = async server => {  
   server.route( {
       method: "GET",
       path: "/api/events",
       config: {
           handler: async request => {
               try {
                   // get the sql client registered as a plugin
                   const db = request.server.plugins.sql.client;

                   // TODO: Get the current authenticate user's ID
                   const userId = "user1234";

                   // execute the query
                   const res = await db.events.getEvents( userId );

                   // return the recordset object
                   return res.recordset;
               } catch ( err ) {
                   console.log( err );
               }
           }
       }
   } );

   server.route( {
    method: "POST",
    path: "/api/events",
    config: {
        // auth: {
        //     strategy: "session",
        //     mode: "required"
        // },
        handler: async request => {
            try {
              const db = request.server.plugins.sql.client;
              const userId = "user1234";// request.auth.credentials.profile.id;
              // console.log( request.payload );
              const { title, description, startDate, endDate  } = request.payload;
                            
              const res = await db.events.addEvent( { userId, title, description, startDate, endDate } );
              return res.recordset[ 0 ];
                // return "Aqui se insertara el usuario " + userId;
            } catch ( err ) {

                console.log( [ "error", "api", "events" ], err );
                server.log( [ "error", "api", "events" ], err );
                // return boom.boomify( err );
                return err;
            }
        }
    }
} );

};