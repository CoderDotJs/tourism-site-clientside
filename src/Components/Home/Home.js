import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSection1 from '../ExtraSection1/ExtraSection1';
import ExtraSection2 from '../ExtraSection2/ExtraSection2';
import ExtraSection3 from '../ExtraSection3/ExtraSection3';
import Services from '../Services/Services';

const Home = () => {
    return (

            // home section data 

        <div>
            <Banner></Banner>
            <Services></Services>
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
            <ExtraSection3></ExtraSection3>
        </div>
    );
};

export default Home;