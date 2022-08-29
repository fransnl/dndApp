import { useRouter } from "next/router";
import Link from 'next/link'

export default function Spell({classes}){
    const router = useRouter()
    const {id} = router.query

    return (
        <div>
            <Link href='/classes'><a>back</a></Link>
           <h1>{id}</h1> 
        </div>
    )
}

export async function getStaticProps({params}){

    const req = await fetch(`https://www.dnd5eapi.co/api/classes/`);
    const data = await req.json();
    
    return{
        props: { classes: data.results },
    }
}

export async function getStaticPaths() {
    const req = await fetch('https://www.dnd5eapi.co/api/classes/');
    const data = await req.json();
    
    const paths = data.results.map((results) => ({
         params: {id: results.name }
    }))

    return{
        paths,
        fallback: false
    }
}
