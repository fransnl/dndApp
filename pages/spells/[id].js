import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';


export default function Spell(){
    const router = useRouter()
    const {id} = router.query

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://www.dnd5eapi.co/api/spells/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    const name = data.name
    const desc = data.desc

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}