USE [GRAJAwebDB]
GO

/****** Object:  Table [grajauser].[events]    Script Date: 3/16/2020 10:34:23 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [grajauser].[events](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userId] [varchar](50) NULL,
	[title] [nvarchar](50) NULL,
	[description] [nvarchar](50) NULL,
	[startDate] [date] NULL,
	[startTime] [time](0) NULL,
	[endDate] [date] NULL,
	[endTime] [time](0) NULL,
 CONSTRAINT [PK_events] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

