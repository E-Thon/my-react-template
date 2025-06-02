import { Form, useLocation, useNavigate } from "react-router"
import { useAuth } from "../contexts/AuthContext"

export default function Login() {
    const {login} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/"

    async function handleLogin(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)

        // validér her...

        const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        const userdata = await response.json()

        if(!response.ok){
            throw new Error({message: "Sorry! Could not login!"})
        } else {
            login(userdata.accessToken)
            navigate(from, { replace: true })
        }
        
    }

    return(
        <Form onSubmit={handleLogin}>
            <div className="formgroup">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
            </div>
            <div className="formgroup">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <button type="submit">Log in</button>
        </Form>
    )
}