import { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

export default function Lists() {
    const lists = useLoaderData();
    const { token, setToken } = useContext(AuthContext)

    setToken("abcdefghijk")
    
    return (
        <ul>
            {lists.map(list => (
                <li key={list.id}>
                    <Link to={`/lists/${list.id}`}>{list.name}</Link>
                </li>
            ))}
        </ul>
    )
}