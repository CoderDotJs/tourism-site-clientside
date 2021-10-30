import React from 'react';
import { Container, } from 'react-bootstrap';

const ExtraSection1 = () => {
    return (


                // extra section 

        <Container className="my-5 text-center">
            <h1 className="services__heading">Find the right <span className="underline-highlight"> Place,</span> </h1>
            <h1 className="services__heading">Only Couple of Your Fingertaps</h1>
            <p className="my-3" style={{"color": "gray"}}>TravelGo gives you the best service you need to travel safe:</p>

            {/* column  */}

            <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                <div className="col">
                    <div className="card h-100  d-flex flex-column justify-content-around align-items-center">
                        <h3 className="card-title my-3">Choose</h3>
                        <img src="https://i.ibb.co/hW4D9g1/airplane.png" alt="" className="img-fluid w-50 my-4" />  
                        <p className=" my-4">
                        Find the Travel Place based on the factors that matter most to you.
                        </p>
                    </div>
                </div>

                {/* column  */}

                <div className="col">
                    <div className="card h-100 d-flex flex-column justify-content-around align-items-center">
                        <h3 className="card-title my-3">Control</h3>
                        <img src="https://i.ibb.co/sJKbrSJ/travel-itinerary.png" alt="" className="img-fluid w-50 my-4" />  
                        <p className=" my-4">
                        Control All the travel need with us with out any worries.
                        </p>
                    </div>
                </div>

                    {/* column  */}

                <div className="col">
                    <div className="card h-100 d-flex flex-column justify-content-around align-items-center">
                        <h3 className="card-title my-3">Prepare</h3>
                        <img src="https://i.ibb.co/7p7dtj7/travel-luggage.png" alt="" className="img-fluid w-50 my-4" />  
                        <p className=" my-4">
                        Prepare to travel you place that you booked.
                        </p>
                    </div>
                </div>
            </div>


        </Container>
    );
};

export default ExtraSection1;