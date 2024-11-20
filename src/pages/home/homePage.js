import React from 'react';
import BannerComponents from '../../components/BannerComponents';
import { Container } from 'react-bootstrap';
import ProductBanner from '../../components/productBanner';
import BestProduct from '../../components/bestProduct';
import AppleWatch1 from '../../assets/images/AppleWatch.png';
import AppleWatch2 from '../../assets/images/AppleWatch2.png';
import ListCategory from '../../components/listCategory';
import AppleHeadphone from '../../assets/images/AppleHeadphone.png';
import Headset from '../../assets/images/Headset.png';
import Iphone15 from '../../assets/images/Iphone15.png';
import './homePage.css';
import NewProducts from '../../components/newProducts';
import BlogSection from '../../components/ourBlog';
const HomePage = () => {
    return (
        <div style={{ backgroundColor: '#f9f9f9' }}>
            <BannerComponents />
            <Container>
                <div style={{ margin: '4% 0' }}>
                    <ProductBanner />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4% 0',gap:'2rem' }}>
                    <BestProduct productName="Best Selling Products" productImage={AppleWatch1} description="Apple Watch Series 8" />
                    <BestProduct productName="Best Selling Products" productImage={AppleWatch2} description="Apple Watch Series 7" />
                </div>
            </Container>
            <div style={{ paddingTop: '2%' }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', padding: '4% 0 2% 0',fontFamily:'Quicksand'  }}>Find Thing You'll Love</p>
                <div className="list-category-container" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '4%' }} >
                    <ListCategory categoryImage={AppleWatch1} />
                    <ListCategory categoryImage={AppleWatch2} />
                    <ListCategory categoryImage={AppleHeadphone} />
                    <ListCategory categoryImage={Headset} />
                    <ListCategory categoryImage={Iphone15} />
                </div>
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', paddingTop: '4%',fontFamily:'Quicksand' }}>New Arrivals</h1>
            <div style={{paddingTop:'10%'}}>
                <Container>
                    <NewProducts />
                    <BlogSection />
                </Container>
            </div>
        </div>
    );
};

export default HomePage;