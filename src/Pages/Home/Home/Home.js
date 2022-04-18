import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import OurSupporters from '../OurSupporters/OurSupporters';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <Services></Services>
            <OurSupporters></OurSupporters>
            <Footer></Footer>
        </div>
    );
};

export default Home;