import Navigation from "../navigation/Navigation"

export default function Header({header}) {

    return(
        <>
        <h1>{header}</h1>
        <Navigation />
        </>
    )
}