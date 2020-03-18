UPDATE [grajauser].[Usuarios]
   SET [Nombre] = @nombre, 
       [APaterno] = @apaterno,
       [AMaterno] = @amaterno,
       [NumeroEmpleado] = @numeroEmpleado,
       [Usuario] = @usuario,
       [Password] = @password,
       [FechaActualizacion] = GETDATE(),
       [UsuarioActualizacion] = @usuarioActualizacion
WHERE Id = @id

SELECT Id, Nombre, APaterno, AMaterno, 
       NumeroEmpleado, Usuario, Password, 
       FechaCreacion, UsuarioCreacion
FROM [grajauser].[Usuarios]
WHERE Id = @id
