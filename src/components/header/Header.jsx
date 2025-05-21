import Navigation from "../navigation/Navigation"
import "./Header.scss"

export default function Header({header}) {

    return(
        <>
        <h1>{header}</h1>
        <Navigation />
        </>
    )
}