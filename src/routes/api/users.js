"use strict";

module.exports.register = async server => {  
   server.route( {
       method: "GET",
       path: "/api/users",
       config: {
           handler: async request => {
               try {
                   // get the sql client registered as a plugin
                   const db = request.server.plugins.sql.client;

                   // TODO: Get the current authenticate user's ID
                  //  const userId = "user1234";

                   // execute the query
                   const res = await db.users.getUsers();

                   // return the recordset object
                   return res.recordset;
               } catch ( err ) {
                   console.log( err );
               }
           }
       }
   } );

   server.route( {
    method: "GET",
    path: "/api/users/{id}",
    config: {
        handler: async request => {
            try {
              const id = request.params.id;
              // get the sql client registered as a plugin
              const db = request.server.plugins.sql.client;

              // TODO: Get the current authenticate user's ID
              //  const userId = "user1234";

              // execute the query
              const res = await db.users.getUser(id);

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
    path: "/api/users",
    config: {
        // auth: {
        //     strategy: "session",
        //     mode: "required"
        // },
        handler: async request => {
            try {
              const db = request.server.plugins.sql.client;
              const userId = 1;// request.auth.credentials.profile.id;

              const { nombre, apaterno, amaterno, numeroEmpleado, usuario, password } = request.payload;
                            
              const res = await db.users.addUser( { nombre, apaterno, amaterno, numeroEmpleado, usuario, password, userId } );
              return res.recordset[ 0 ];

            } catch ( err ) {

                console.log( [ "error", "api", "users" ], err );
                server.log( [ "error", "api", "users" ], err );
                // return boom.boomify( err );
                return err;
            }
        }
    }
} );

server.route( {
  method: "PUT",
  path: "/api/users",
  config: {
      // auth: {
      //     strategy: "session",
      //     mode: "required"
      // },
      handler: async request => {
          try {
            const db = request.server.plugins.sql.client;
            const userId = 2;// request.auth.credentials.profile.id;

            const { id, nombre, apaterno, amaterno, numeroEmpleado, usuario, password  } = request.payload;
                          
            const res = await db.users.updateUser( { id, nombre, apaterno, amaterno, numeroEmpleado, usuario, password, userId } );
            return res.recordset[ 0 ];

          } catch ( err ) {

              console.log( [ "error", "api", "users" ], err );
              server.log( [ "error", "api", "users" ], err );
              // return boom.boomify( err );
              return err;
          }
      }
    }
} );

server.route( {
  method: "DELETE",
  path: "/api/users/{id}",
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
              
              // const userId = request.auth.credentials.profile.id;
              const userId = "user1234";// request.auth.credentials.profile.id;

              const db = request.server.plugins.sql.client;
              const res = await db.users.deleteUser( { id } );
              return res.rowsAffected[ 0 ] === 1 ? "" : boom.notFound();
          } catch ( err ) {
            console.log( [ "error", "api", "users" ], err );
            server.log( [ "error", "api", "users" ], err );
              // return boom.boomify( err );
            return err;
          }
      }
  }
} );

};