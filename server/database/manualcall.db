CREATE TABLE clientInfo ( clientID INTEGER PRIMARY KEY, FirstName VARCHAR(255), LastName VARCHAR(255), DateBirth DATE, Languages VARCHAR(255), FundingSource VARCHAR(255))

INSERT INTO clientInfo VALUES (NULL,"Samantha","Edward","1997-06-12","English","HACC")
INSERT INTO clientInfo VALUES (NULL,"John","Smith","2001-01-10","English","HACC")

SELECT max(clientID) FROM clientInfo

ALTER TABLE clientInfo RENAME TO _clientInfoOLD

SELECT * FROM clientInfo
DELETE FROM clientInfo WHERE FirstName="Fernando"
DELETE FROM clientInfo WHERE FirstName IS NULL