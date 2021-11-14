import React, {useEffect} from 'react'

export default function Home() {
    useEffect(() => {
        console.log(localStorage.getItem("long"))
    }, [])
    return (
        <main>
           <h1>home page</h1>
        </main>
    )
}
