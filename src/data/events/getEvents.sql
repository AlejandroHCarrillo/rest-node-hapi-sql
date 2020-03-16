SELECT  [Id]
       , [title]
       , [description]
       , [startDate]
       , [startTime]
       , [endDate]
       , [endTime]
FROM    [grajauser].[events]
WHERE   [userId] = @userId
ORDER BY
       [startDate], [startTime];