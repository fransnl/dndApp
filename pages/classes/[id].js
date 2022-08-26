import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';


export default function Spell(){
    const router = useRouter()
    const {id} = router.query

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const url = `https://www.dnd5eapi.co/api/classes/${id}`;
    
    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    const name = data.name

    return (
        <div>
           <h1>{name}</h1> 
        </div>
    )
}
