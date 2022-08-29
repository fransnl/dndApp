import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import styles from '../../styles/List.module.css'

export default function SpellList(){
    
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://www.dnd5eapi.co/api/classes/')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    const classes = data.results;

    return (
        <div>
            <div className={styles.list}>
                {classes.map(classes => 
                <Link key={classes.name} href={`classes/${classes.name}`}>

                    <button className={styles.hButton}> {classes.name} </button>

                </Link>)}
            </div>
        </div>
    )
    
}
