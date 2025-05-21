import { useEffect, useState } from "react"
import { useParams } from "react-router";

export default function ListDetail() {
    // const params = useParams()
    // console.log(params);
    const {id} = useParams()
    
    const [list, setList] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(result => setList(result))
            .finally(() => setIsLoading(false))
    }, []);

    return isLoading ? (<p>Loading...</p>) : (
        <>
        <h2>{list.name}</h2>
        </>
    )
}