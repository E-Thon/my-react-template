import { useEffect, useState } from "react"
import { Link } from "react-router";

export default function Lists() {
    const [lists, setLists] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => setLists(result))
            .finally(() => setIsLoading(false))
    }, []);

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }
    return isLoading ? (<p>Loading...</p>) : (
        <ul>
            {lists.map(list => (
                <li key={list.id}>
                    <Link to={`/lists/ ${list.id}`}>{list.name}</Link>
                </li>
            ))}
        </ul>
    )
}