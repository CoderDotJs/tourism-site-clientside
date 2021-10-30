import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (

            // banner section  

        <div id="banner" style={{"backgroundImg": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLists_of_islands&psig=AOvVaw0cwQolillTyeVOBj4s89F9&ust=1635603008704000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKj78pfm7_MCFQAAAAAdAAAAABAD"}}>
            <Container>

                {/* banner row  */}

                <Row className="banner__row">

                        {/* columen 1  */}

                    <Col xs={12} sm={12} md={6} lg={6} className="banner__col">
                        <h1 className="banner__heading"><span className="underline-highlight">Travel</span> Anywhere In The World</h1>
                        <Row className="banner__service_row">
                            <Col xs={4} sm={4} md={4} lg={4} className="banner__service">
                            <i className="fas fa-map-marked-alt fa-4x"></i>
                                <p>Find Every Places And Hotles</p>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} className="banner__service">
                            <i className="fas fa-search fa-4x"></i>
                                <p>Search The Place You Want To Travel</p>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} className="banner__service">
                                <i className="fas fa-star fa-4x"></i>
                                <p>More Than 10 Million Travelers Ratings</p>
                            </Col>
                        </Row>
                    </Col>

                        {/* column 2 */}

                    <Col xs={12} sm={12} md={6} lg={6} className="banner__col d-flex justify-content-center align-items-end">
                        <img src="https://www.befunky.com/images/wp/wp-2016-03-BeFunky-Collage-Wizard-9.jpg?auto=webp&format=jpg&width=1200&crop=16:9"  alt="img" width="100%" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;