import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

const mockUser = {
    id: 1,
    username: "user",
    password: "password"
}

//POST /login
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    // Validar campos
    if (!email || !password) {
        return res
            .status(400)
            .json({ error: "Debe enviar email y password" });
    }
    // Validar usuario
    if (email !== mockUser.email || password !== mockUser.password) {
        return res
            .status(401)
            .json({ error: "Credenciales invalidas" });
    }
    // Generar token
    const payload = { id: mockUser.id, username: mockUser.username };
    const token = jwt.sign(payload, "secret_key", { expiresIn: "1h" });
    res.json({ token: `Bearer ${token}` });
})

export default router;