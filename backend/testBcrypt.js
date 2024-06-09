// const bcrypt = require('bcryptjs');

// const testPassword = async () => {
//   const password = '123456'; // Replace with the plain text password you are testing
//   const hashedPassword = '$2a$10$MDsoy/RMFs9RLgba.C.rvu/nPyvq34jo7ZLdqJZinHJ3CeUFAgOdS'; // Replace with the hashed password from your database
//   const password1 = '123456';

// // Generate a salt
//     bcrypt.genSalt(10, (err, salt) => {
//     if (err) throw err;

//   // Hash the password with the salt
//     bcrypt.hash(password1, salt, (err, hash) => {
//     if (err) throw err;
//     console.log(`Hashed Password: ${hash}`);
//   });
// });

//   const isMatch = await bcrypt.compare(password, hashedPassword);
//   console.log('Password match:', isMatch);
// };

// testPassword();
