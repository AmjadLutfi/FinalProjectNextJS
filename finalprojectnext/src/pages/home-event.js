import Link from "next/link";
import { useEffect, useState } from "react";
import './css/home-event.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Image from "next/image";
import Head from "next/head";

export default function HomeEvent(){
    const [dataEvent, setDataEvent] = useState([])
    const [inputSearch, setInputSearch] = useState("")

    useEffect(()=>{
        getApi()
    },[])
    const getApi = async() => {
        try {
            const data = await fetch("/api/event-all")
            const result = await data.json()

            // console.log(result.data, "==> ini datanya yaa");
            setDataEvent(result.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        let inputUser = {
            search: inputSearch
        }

        try {
            const requestData = await fetch(`/api/event-search?search=${inputSearch}`,{
                method: "POST",
                body: JSON.stringify(inputUser)
            })
            const result = await requestData.json()
            setDataEvent(result.data)
        } catch (error) {
            console.log(error, "ini Error!!");
            
        }
    }
    return(
        <>
            
            {/* <ul>
                {   
                    dataEvent.map(el => (
                        <div key={el.id}>
                            <li key={el.id}>{el.title}</li>
                            <Link href={`/detail-event/${el.id}`}>Go To Detail</Link>
                        </div>
                    ))
                }
            </ul> */}
            <Head>
                <title>TMMIN Event</title>
                <meta name="description" content="Event yang ada di TMMIN" />
                <meta name="keyword" content="Event, TMMIN" />
            </Head>
            <div className="container py-5">
                <h1 className="text-center ">Our Event</h1>
                <div className="container">
                    <div className="search-bar">
                        <form className="d-flex" onSubmit={handleOnSubmit}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                aria-label="Search" 
                                aria-describedby="search-addon"
                                value={inputSearch}
                                onChange={e => setInputSearch(e.target.value)}
                            />
                            <input type="submit" class="btn btn-primary m-b" value="Search"/>
                        </form>
                    </div>
                </div>
                {/* <form onSubmit={handleOnSubmit}>
                    <label>Search:</label>
                    <input
                        type="text"
                        value={inputSearch}
                        onChange={e => setInputSearch(e.target.value)}
                    />
                    <input type="submit" value="🔎"/>
                </form> */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {   
                    dataEvent.map(el => (
                        <div className="col" key={el.id}>
                            <div className="card h-100">
                            <Image src={el.image} width={200} height={200} className="card-img-top" alt="Product 1"/>
                            <div className="card-body">
                                <h5 className="card-title">{el.title}</h5>
                                <p className="card-text">{el.description}</p>
                                <Link href={`/detail-event/${el.id}`} className="btn btn-primary">Buy Ticket</Link>
                                {/* <a href="#" className="btn btn-primary">Buy Ticket</a> */}
                            </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </>
    )
}