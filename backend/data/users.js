import bcrypt from "bcryptjs";

const users = [
  {
    name: "John Doe",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "john@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Smith",
    email: "smith@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;