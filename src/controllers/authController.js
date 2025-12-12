import authService from '../services/authService.js';

const login = (req, res) => {
    const { email, password } = req.body;

    // Validar campos
    if (!email || !password) {
        return res
            .status(400)
            .json({ error: "Debe enviar email y password" });
    }

    try {
        const result = authService.login(email, password);
        res.json(result);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

export default { login };
