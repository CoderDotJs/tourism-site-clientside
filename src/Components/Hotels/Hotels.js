import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import useAuth from '../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';


const Hotels = () => {


    // using state for  data 

    const [service, setService] = useState([])
    const { isLoading, setIsLoading} = useAuth();

        // use effect for fetch data 

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://boiling-sierra-33157.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setService(data)
            setIsLoading(false)
        })
        
    },[])

    

    return (

                // service section 

        <div>
            <h1 className="text-center fw-bold mt-5 mb-3 services__heading">Find A Perfect <span className="underline-highlight">Place</span></h1>
            <p className="text-center text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

            {
                isLoading 
                ?
                <div className="text-center my-5"><Spinner className="my-5" animation="border" variant="primary" className="text-center"/></div> 
                :
                <div className="container mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-1">
                {
                service.map((ser)=>{
                    return (
                        <Card prop={ser} key={ser.name}></Card>
                    )
                    })
                }
                </div>
            }
            

            
        
        </div>
    );
};

export default Hotels;