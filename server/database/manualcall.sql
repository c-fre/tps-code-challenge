-- CREATE TABLE clientInfo ( clientID INT PRIMARY KEY, FirstName VARCHAR(255), LastName VARCHAR(255), DateBirth DATE, Languages VARCHAR(255), FundingSource VARCHAR(255))

-- INSERT INTO clientInfo VALUES (1101,"Samantha","Edward","1997-06-12","English","HACC")
-- INSERT INTO clientInfo VALUES (1102,"John","Smith","test","English","HACC")

SELECT * FROM clientInfo
DELETE FROM clientInfo WHERE FirstName=NULL