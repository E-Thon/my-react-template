import { Link } from "react-router"
import "./ButtonLink.scss"

export default function ButtonLink({to, text}){
    return (
        <Link to={to}><button>{text}</button></Link>
    )
}