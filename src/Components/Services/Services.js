import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css'

const Services = () => {

    // managing state 

    const [service, setService] = useState([])

        // fetching the data 

    useEffect(()=>{
        fetch('https://boiling-sierra-33157.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    
    return (

            // services section 

        <div id="services" className="my-5">
            <h1 className="text-center services__heading">Most Popular <span className="underline-highlight ">Destination</span></h1>

            <p className="text-center my-3" style={{"color": "gray"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

            <div className="container mx-auto row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-sm-1">
                


                    {/* dynamic data show on service  */}
                {
                service?.map((simple)=>{
                   return(
                    <ServiceCard  
                    key={simple.id}
                    prop={simple}
                     >
 
                     </ServiceCard>
                   )
                })
                }
            </div>

        </div>
    );
};

export default Services;