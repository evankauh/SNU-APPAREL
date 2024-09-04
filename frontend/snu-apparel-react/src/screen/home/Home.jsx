import { Title } from "../../components/common/CustomComponents.jsx"
import { Hero } from "../../components/hero/Hero.jsx"
import { ProductSlideCard } from "../../components/product/ProductSlide.jsx"
import { Banner, ShippingInfo, ProductSlide, TopBanner } from "../../router/index.js"
import { Caption } from "../../components/common/CustomComponents";

export const Home = () => {
    return (
        <>
            <TopBanner/>
            <Hero />
            {/* <Product/> */}
            <ShippingInfo />
            <Banner />
            {/* <ProductSlide /> */}

            <div className="container my-16 slideproduct">
                <Title level={3}>Recent Product</Title>
                <Caption>
                    DISCOVER THE MOST TRENDING PRODUCTS NOW.
                </Caption>
                <br />
                <ProductSlideCard />
            </div>
        </>
    )
}