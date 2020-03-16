UPDATE  [grajauser].[events]
SET     [title] = @title
       , [description] = @description
       , [startDate] = startDate
       , [startTime] = @startTime
       , [endDate] = @endDate
       , [endTime] = @endTime
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