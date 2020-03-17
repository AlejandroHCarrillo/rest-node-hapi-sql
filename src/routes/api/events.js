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

              const { title, description, startDate, startTime, endDate, endTime  } = request.payload;
                            
              const res = await db.events.addEvent( { userId, title, description, startDate, startTime, endDate, endTime } );
              return res.recordset[ 0 ];

            } catch ( err ) {

                console.log( [ "error", "api", "events" ], err );
                server.log( [ "error", "api", "events" ], err );
                // return boom.boomify( err );
                return err;
            }
        }
    }
} );

server.route( {
  method: "PUT",
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

            const { id, title, description, startDate, startTime, endDate, endTime  } = request.payload;
                          
            const res = await db.events.updateEvent( { id, userId, title, description, startDate, startTime, endDate, endTime } );
            return res.recordset[ 0 ];

          } catch ( err ) {

              console.log( [ "error", "api", "events" ], err );
              server.log( [ "error", "api", "events" ], err );
              // return boom.boomify( err );
              return err;
          }
      }
    }
} );

server.route( {
  method: "DELETE",
  path: "/api/events/{id}",
  config: {
      // auth: {
      //     strategy: "session",
      //     mode: "required"
      // },
      response: {
          emptyStatusCode: 204
      },
      handler: async request => {
          try {
              const id = request.params.id;
              console.log(`id: ${id}`);
              
              // const userId = request.auth.credentials.profile.id;
              const userId = "user1234";// request.auth.credentials.profile.id;

              const db = request.server.plugins.sql.client;
              const res = await db.events.deleteEvent( { id, userId } );
              return res.rowsAffected[ 0 ] === 1 ? "" : boom.notFound();
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