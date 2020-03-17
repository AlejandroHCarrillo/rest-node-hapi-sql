UPDATE  [grajauser].[events]
SET     [title] = @title
       , [description] = @description
       , [startDate] = cast(@startDate as datetime)
       , [startTime] = cast(@startTime as datetime)
       , [endDate] = cast(@endDate as datetime)
       , [endTime] = cast(@endTime as datetime)
WHERE   [id] = @id
 AND   [userId] = @userId;

SELECT  [id]
       , [title]
       , [description]
       , [startDate]
       , [startTime]
       , [endDate]
       , [endTime]
FROM    [grajauser].[events]
WHERE   [id] = @id
 AND   [userId] = @userId;