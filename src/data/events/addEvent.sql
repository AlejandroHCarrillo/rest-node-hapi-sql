INSERT INTO [grajauser].[events]
(
   [userId]
   , [title]
   , [description]
   , [startDate]
   -- , [startTime]
   , [endDate]
)
VALUES
(
   @userId
   , @title
   , @description
   , cast(@startDate as datetime)
   -- , convert(varchar, @startTime, 8)
   , cast(@endDate as datetime)
);

SELECT SCOPE_IDENTITY() AS id;