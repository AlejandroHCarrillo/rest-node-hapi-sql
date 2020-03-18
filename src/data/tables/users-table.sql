CREATE TABLE [grajauser].[Usuarios](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](50) NOT NULL,
	[APaterno] [nvarchar](50) NOT NULL,
	[AMaterno] [nvarchar](50) NULL,
	[NumeroEmpleado] [int] NOT NULL,
	[Usuario] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](50) NOT NULL DEFAULT ('cambiarpassword'),
	[FechaCreacion] [smalldatetime] NOT NULL,
	[UsuarioCreacion] [int] NOT NULL,
 CONSTRAINT [PK_usuario] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

