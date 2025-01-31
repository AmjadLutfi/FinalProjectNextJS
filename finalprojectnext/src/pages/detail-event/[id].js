import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import '../css/detail-event.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Image from "next/image"

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

            <h1>
                ini detail Event {id}
            </h1>
            {/* <p>
                {JSON.stringify(dataById)}
            </p> */}

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
                        <button className="btn btn-outline-secondary btn-lg mb-3">
                                <i className="bi bi-heart"></i> Add to Wishlist
                            </button>
                        <div className="mt-4">
                            <h5>Key Features:</h5>
                            <ul>
                                <li>Industry-leading noise cancellation</li>
                                <li>30-hour battery life</li>
                                <li>Touch sensor controls</li>
                                <li>Speak-to-chat technology</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
        </>
    )   
}