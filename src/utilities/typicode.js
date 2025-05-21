export async function getLists() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok){
        throw new Error('Network response was not ok')
    }
    return response.json()
}

export async function getList({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    if(!response.ok){
        throw new Error('Network response was not ok')
    }
    return response.json()
}