import bcrypt from "bcryptjs";

const users = [{
        name: 'Admin User',
        email: 'jmndao@gmail.com',
        password: bcrypt.hashSync('Passer123/', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('Passer123', 10),
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('Passer123', 10),
    }

]

export default users;