import React, { useState, useEffect } from 'react';
import Link from 'next/link'

export default function SpellList(){
    
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://www.dnd5eapi.co/api/spells/')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    const spells = data.results;

    return (
        <div>
        {spells.map(data => 
                <Link
                key={data.name} 
                href={{
                        pathname: 'spells/[spell]',
                        query: { spell: data.name.replaceAll(' ', '-').toLowerCase()},
                    }}>
                <a> 
                    {data.name}
                </a>
            </Link>
        )}
        </div>
    )
    
}