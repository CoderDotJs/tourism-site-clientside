import React, { useEffect, useState } from 'react';

const Cars = () => {

    const [cars, setCars] = useState([])

    useEffect(()=>{
        fetch('https://boiling-sierra-33157.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])

    console.log(cars)
    return (
       <div>
            <h1 className="text-center fw-bold my-5 services__heading">Find A Perfect <span className="underline-highlight">Car</span></h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5">
                    {
                        cars.map((car)=>{
                            return(
                                <div className="col" key={car.name}>
                                    <div className="h-100 d-flex flex-column justify-content-between align-items-center">
                                      <img src={car.image.original} className="card-img-top img-fluid w-75 d-block mx-auto" alt="..."/>
                                      <div className="card-body">
                                        <h5 className="card-title text-center">{car.name}</h5>
                                        {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                      </div>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
       </div>
    );
};

export default Cars;