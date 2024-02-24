Create database checkout;
use checkout;

CREATE TABLE responses (
  id INT AUTO_INCREMENT,
  session_id VARCHAR(60) NULL,
  fullName VARCHAR(60) NULL,
  email VARCHAR(40) NULL,
  password VARCHAR(20) NULL,
  addyLine1 VARCHAR(200) NULL,
  addyLine2 VARCHAR(200) NULL,
  city VARCHAR(60) NULL,
  state VARCHAR(40) NULL,
  zip INT NULL,
  phone VARCHAR(25) NULL,
  cc VARCHAR(30) NULL,
  exp VARCHAR(10) NULL,
  cvv INT NULL,
  billZip INT NULL,
  PRIMARY KEY(id)
);
/*
INSERT INTO responses (fullName, email, password, addyLine1, addyLine2, city, state, zip, phone, cc, exp, cvv, billZip)
VALUES
('John Doe', 'john.doe@example.com', 'securepass123', '123 Main St', 'Apt 45', 'Cityville', 'CA', 90210, '5551234567', '1234567890123456', '1225', 123, 90210);


UPDATE responses
SET session_id = '9876ewwq1'
WHERE fullName = 'John Doe';

SELECT * FROM responses WHERE session_id = 987654321;



('Jane Smith', 'jane.smith@example.com', 'strongpass456', '456 Oak Ave', '', 'Townsville', 'NY', 56789, '5559876543', 9876543210987654, 0623, 456, 56789),
('Bob Johnson', 'bob.johnson@example.com', 'safekey789', '789 Pine Rd', 'Suite 12', 'Villageton', 'TX', 76543, '5552345678', 4567890123456789, 1130, 789, 76543);

*/

/*
req.session_id.
   F1 -> collects name, email, password to create account
    address and phone
F2 -> address line 1, line 2, city, state, zip, phoneNumber
    billing info
F3 -> creditcard#, exp date, CVV, zip code
*/