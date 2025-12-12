import jwt from 'jsonwebtoken';

const mockUser = {
    id: 1,
    email: 'user@example.com', // Added email to fix validation bug
    username: 'user',
    password: 'password'
};

const login = (email, password) => {
    // Validar usuario
    if (email !== mockUser.email || password !== mockUser.password) {
        throw new Error('Credenciales invalidas');
    }

    // Generar token
    const payload = { id: mockUser.id, username: mockUser.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { token: `Bearer ${token}` };
};

export default { login };
