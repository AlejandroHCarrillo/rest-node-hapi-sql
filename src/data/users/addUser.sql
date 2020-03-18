INSERT INTO [grajauser].[Usuarios] (Nombre, APaterno, AMaterno, NumeroEmpleado, 
       Usuario, Password, FechaCreacion, UsuarioCreacion)
values (@nombre, @apaterno, @amaterno, @numeroEmpleado, 
       @usuario, @password, GETDATE(), @usuarioCreacion);

SELECT SCOPE_IDENTITY() AS id;