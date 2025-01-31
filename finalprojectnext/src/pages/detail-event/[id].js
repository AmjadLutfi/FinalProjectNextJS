import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import '../css/detail-event.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function DetailEvent(){
    const [dataById, setDataById] = useState({})
    const router = useRouter()
    const {id} = router.query

    useEffect(()=>{
        getById()
    },[id])

    const getById = async() =>{
        try {
            const data = await fetch(`/api/event-by-id/${id}`)
            const result = await data.json()

            console.log(result.data, "ini datanya");
            setDataById(result.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    return(
        <>

            {/* <h1>
                ini detail Event {id}
            </h1> */}
            {/* <p>
                {JSON.stringify(dataById)}
            </p> */}
            <Head>
                <title>TMMIN Event</title>
                <meta name="description" content="Cari Tau apa Aja Event nya? Event yang ada di TMMIN" />
                <meta name="keyword" content="Event, TMMIN" />
            </Head>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 mb-2">
                        <Image src={dataById?.image} width={400} height={400} alt="Product" className="img-fluid rounded mb-3 product-image" id="mainImage"/>
                    </div>

                    <div className="col-md-6">
                        <h2 className="mb-3">{dataById?.tittle}</h2>
                        <p className="text-muted mb-4">{dataById?.description}</p>
                        <div className="mb-3">
                            <span className="h4 me-2">{dataById?.category}</span>
                        </div>
                        <div className="mb-3">
                            <span className="ms-2">{dataById?.date}</span>
                        </div>
                        <p className="mb-4">{dataById?.location}</p>
                        <div className="mb-4">
                            <label for="quantity" className="form-label">Quantity:</label>
                            <input type="number" className="form-control" id="quantity" value="1" min="1" style={{width: 80}}/>
                        </div>
                        <button className="btn btn-primary btn-lg mb-3 me-2">
                                <i className="bi bi-cart-plus"></i> Add to Cart
                        </button>
                        <Link href={`/home-event`}>
                            <button className="btn btn-outline-secondary btn-lg mb-3">
                                <i className="bi bi-heart"></i> Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
    
        </>
    )   
}