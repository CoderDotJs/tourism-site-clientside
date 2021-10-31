import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Hotels = () => {


    // using state for  data 

    const [service, setService] = useState([])

        // use effect for fetch data 

    useEffect(()=>{
        fetch('https://boiling-sierra-33157.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    

    return (

                // service section 

        <div>
            <h1 className="text-center fw-bold my-5 services__heading">Find A Perfect <span className="underline-highlight">Place</span></h1>
            <div className="container mx-auto row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-sm-1">

            
            {/* service data will be added dynamically  */}

            {
                service.map((ser)=>{
                    return (
                        <Card prop={ser} key={ser.name}></Card>
                    )
                })
            }
        </div>
        </div>
    );
};

export default Hotels;