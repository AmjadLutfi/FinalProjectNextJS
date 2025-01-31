import { useRouter } from "next/router"
import { useEffect, useState } from "react"

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

            // console.log(result.data, "ini datanya");
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
            <p>
                {JSON.stringify(dataById)}
            </p>

            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-8 mb-2">
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product" class="img-fluid rounded mb-3 product-image" id="mainImage"/>
                    </div>

                    <div class="col-md-6">
                        <h2 class="mb-3">Premium Wireless Headphones</h2>
                        <p class="text-muted mb-4">SKU: WH1000XM4</p>
                        <div class="mb-3">
                            <span class="h4 me-2">$349.99</span>
                            <span class="text-muted"><s>$399.99</s></span>
                        </div>
                        <div class="mb-3">
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-half text-warning"></i>
                            <span class="ms-2">4.5 (120 reviews)</span>
                        </div>
                        <p class="mb-4">Experience premium sound quality and industry-leading noise cancellation with these wireless
                            headphones. Perfect for music lovers and frequent travelers.</p>
                        <div class="mb-4">
                            <h5>Color:</h5>
                            <div class="btn-group" role="group" aria-label="Color selection">
                                <input type="radio" class="btn-check" name="color" id="black" autocomplete="off" checked/>
                                <label class="btn btn-outline-dark" for="black">Black</label>
                                <input type="radio" class="btn-check" name="color" id="silver" autocomplete="off"/>
                                <label class="btn btn-outline-secondary" for="silver">Silver</label>
                                <input type="radio" class="btn-check" name="color" id="blue" autocomplete="off"/>
                                <label class="btn btn-outline-primary" for="blue">Blue</label>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label for="quantity" class="form-label">Quantity:</label>
                            <input type="number" class="form-control" id="quantity" value="1" min="1" style="width: 80px;"/>
                        </div>
                        <button class="btn btn-primary btn-lg mb-3 me-2">
                                <i class="bi bi-cart-plus"></i> Add to Cart
                            </button>
                        <button class="btn btn-outline-secondary btn-lg mb-3">
                                <i class="bi bi-heart"></i> Add to Wishlist
                            </button>
                        <div class="mt-4">
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