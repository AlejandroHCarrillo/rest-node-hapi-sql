SELECT Id, Nombre, APaterno, AMaterno, NumeroEmpleado, 
       Usuario, Password, 
       FechaCreacion, UsuarioCreacion
FROM [grajauser].[Usuarios]
WHERE Id = @id

select @id