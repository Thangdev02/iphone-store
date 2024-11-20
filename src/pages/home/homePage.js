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
        <div className="home-page" style={{ backgroundColor: '#f9f9f9' }}>
    <BannerComponents />
    <Container>
        <div className="product-banner" style={{ margin: '4% 0' }}>
            <ProductBanner />
        </div>
        <div className="best-product-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4% 0', gap: '2rem' }}>
            <BestProduct productName="Best Products" productImage={AppleWatch1} description="Apple Watch Series 8" />
            <BestProduct productName="Best Selling Products" productImage={AppleWatch2} description="Apple Watch Series 7" />
        </div>
    </Container>
    <div className="find-your-love" style={{ paddingTop: '2%' }}>
        <p className="section-heading" style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', padding: '4% 0 2% 0' }}>Find Thing You'll Love</p>
        <div className="list-category-container">
            <ListCategory categoryImage={AppleWatch1} />
            <ListCategory categoryImage={AppleWatch2} />
            <ListCategory categoryImage={AppleHeadphone} />
            <ListCategory categoryImage={Headset} />
            <ListCategory categoryImage={Iphone15} />
        </div>
    </div>
    <h1 className="new-arrivals-heading" style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', paddingTop: '4%' }}>New Arrivals</h1>
    <div className="new-products-section" style={{ paddingTop: '10%' }}>
        <Container>
            <NewProducts />
            <BlogSection />
        </Container>
    </div>
</div>

    );
};

export default HomePage;