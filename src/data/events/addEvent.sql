INSERT INTO [grajauser].[events]
(
   [userId]
   , [title]
   , [description]
   , [startDate]
   , [startTime]
   , [endDate]
   , [endTime]
)
VALUES
(
   @userId
   , @title
   , @description
   , cast(@startDate as datetime)
   , cast(@startTime as datetime)
   , cast(@endDate as datetime)
   , cast(@endTime as datetime)
);

SELECT SCOPE_IDENTITY() AS id;