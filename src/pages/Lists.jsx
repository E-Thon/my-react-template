import { Link, useLoaderData } from "react-router";

export default function Lists() {

    const lists = useLoaderData();

    return (
        <ul>
            {lists.map(list => (
                <li key={list.id}>
                    <Link to={`/lists/ ${list.id}`}>{list.name}</Link>
                </li>
            ))}
        </ul>
    )
}