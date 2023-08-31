const { verify } = require("jsonwebtoken")

const jwtVerify = (req, res, next) => {
    try {
        const token = req.cookies["x-acess"]

        verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.status(404).json({
                    message: "Realize o login para continuar!",
                })
            }
            req.params.userId = decoded.userId
            next()
        })
    } catch (err) {
        res.status(404).json({ message: "Internar server error!" })
    }
}

module.exports = jwtVerify
