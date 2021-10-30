import Button from '@restart/ui/esm/Button';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'


const ServiceCard = (props) => {

    

        // get the data using props 

    const {_id, service_name, img, desc, subtitle, price} = props.prop;

    return (

            // service data show with card 

            <div 
            style={{"textDecoration": "none"}}  
            className="text-left col d-flex flex-column justify-content-between align-items-start py-5"
            >
            <div className="service__icon_container">
                {/* <i className={`${img} fa-3x services__icon`}></i> */}
                <img src={img} alt="" className="img-fluid service__img"/>
            </div>
            <h4 className="my-3">{service_name}</h4>
            <p>{subtitle}</p>
            <h3><b>${price}</b></h3>
            <Button as={Link} 
            variant="primary" 
            style={{"padding": "5px 15px", "background": "rgb(2, 2, 193)", "color": "white", "textDecoration": "none"}} 
            to={`/services/place-order/${_id}`}
            >
                Book Now <i className="fas fa-plane-departure mx-1"></i>
            </Button>
            </div>
            
    );
};

export default ServiceCard;