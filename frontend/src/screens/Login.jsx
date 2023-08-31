import { useState } from "react"
import style from "../style/App.module.css"
import PasswordInput from "../components/PasswordInput"
import config from "../config.json"
import axios from "axios"

export default function Login() {
    const [loginPage, setLoginPage] = useState(true)
    const [inputsValue, setInputsValue] = useState({ first_name: "", last_name: "", username: "ghl20", password: "1231412", confirmPassword: "" })

    const handleLogin = () => {
        setLoginPage(!loginPage)
        handleClearInputs()
    }
    const handleInputValue = (field, value) => setInputsValue((prev) => ({ ...prev, [field]: value.target.value }))
    const handleClearInputs = () => setInputsValue({ first_name: "", last_name: "", username: "", password: "", confirmPassword: "" })

    const handleSendRegister = async () => {
        await axios.post(`${config.baseRoute}/user/create`, inputsValue, { withCredentials: true })
    }

    const handleSendLogin = async () => {
        const res = await axios.post(`${config.baseRoute}/user/login`, inputsValue, { withCredentials: true })
        if (res.status === 200) window.location.href = "/home"
    }

    return (
        <div className={style.primaryContainerExt}>
            <div className={style.logoContainer}>
                <h1 style={{ color: "#6246ea" }}>
                    Devs<span style={{ color: "#2f2f2f", fontSize: 19, fontWeight: "700" }}>.blog</span>
                </h1>
            </div>
            <div className={style.primaryContainerInt}>
                <div className={style.descriptionContainer}></div>
                <div className={style.loginContainer}>
                    <div className={`${style.inputsContainer} animate__animated ${loginPage ? "animate__fadeInRightBig" : "animate__fadeOutDownBig"}`}>
                        <h1 className={style.textLogin}>
                            Welcome back!
                            <br /> Glad to see you, Again!
                        </h1>
                        <input value={inputsValue.username} onChange={(e) => handleInputValue("username", e)} placeholder="Username" className={`${style.inputLogin}`} type="text" />
                        <PasswordInput value={inputsValue.password} placeholder="Password" field="password" handleInput={handleInputValue} />
                        <button onClick={handleSendLogin} className={style.buttonLogin}>
                            Login
                        </button>
                        <p className={style.pDescription}>
                            Don't have an account yet?{" "}
                            <span onClick={handleLogin} className={style.spanLink}>
                                Register
                            </span>
                        </p>
                    </div>
                    <div className={`${style.inputsContainer} animate__animated ${!loginPage ? "animate__fadeInRightBig" : "animate__fadeOutDownBig"}`}>
                        <h1 className={style.textLogin}>
                            Hello! <br />
                            Register to get Started
                        </h1>
                        <input value={inputsValue.first_name} onChange={(e) => handleInputValue("first_name", e)} placeholder="First Name" className={`${style.inputLogin}`} type="text" />
                        <input value={inputsValue.last_name} onChange={(e) => handleInputValue("last_name", e)} placeholder="Last name" className={`${style.inputLogin}`} type="text" />
                        <input value={inputsValue.username} onChange={(e) => handleInputValue("username", e)} placeholder="Username" className={`${style.inputLogin}`} type="text" />
                        <PasswordInput value={inputsValue.password} placeholder="Password" field="password" handleInput={handleInputValue} />
                        <PasswordInput value={inputsValue.confirmPassword} placeholder="Confirm Password" field="confirmPassword" handleInput={handleInputValue} />
                        <button onClick={handleSendRegister} className={style.buttonLogin}>
                            Sign Up
                        </button>
                        <p className={style.pDescription}>
                            Already have an account?{" "}
                            <span onClick={handleLogin} className={style.spanLink}>
                                Login
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
