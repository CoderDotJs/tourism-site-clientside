import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';
import useAuth from '../../Hooks/useAuth';

const Services = () => {

    // managing state 

    const [service, setService] = useState([])

    const { isLoading, setIsLoading} = useAuth();

    
        // fetching the data 

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://boiling-sierra-33157.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setService(data)
            setIsLoading(false)
        })
    }, [])

    
    return (

            // services section 

        <div id="services" className="my-5">
            <h1 className="text-center services__heading">Most Popular <span className="underline-highlight ">Destination</span></h1>

            <p className="text-center my-3" style={{"color": "gray"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

            
                

            {
                isLoading 
                ? 
                <div className="text-center my-5"><Spinner className="my-5" animation="border" variant="primary" className="text-center"/></div> 
                : 
                
                <div className="container mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-1">
                
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

            }
                    
            

        </div>
    );
};

export default Services;