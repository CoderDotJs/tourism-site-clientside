import React from 'react';
import { Col, Container } from 'react-bootstrap';

const Card = (props) => {
    const {img, service_name, price, desc, subtitle} = props.prop;
    // console.log(full_name)
    return (
        <Container>
            
                {/* doctor card section  */}

                <div className="card mb-3" style={{"maxWidth": "540px"}}>

                        {/* row  */}

                    <div className="row g-0">
                        <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                            <img src={img} className="img-fluid rounded-start h-100 w-100" alt="..."/>
                        </div>

                            {/* column  */}

                        <Col className="col-md-9 col-lg-9 col-sm-9 col-xs-9">
                            <div className="card-body">
                                <h5 className="card-title">{service_name}</h5>
                                <p className="card-text mb-0">{subtitle}.</p>
                                <p className="card-text my-2"><small className="text-muted">{price}</small></p>
                                <p>{desc}</p>
                            </div>
                        </Col>
                    </div>
                </div>
        </Container>
    );
};

export default Card;