import { Title } from "../../components/common/CustomComponents.jsx"
import { Hero } from "../../components/hero/Hero.jsx"
import { ProductSlideCard } from "../../components/product/ProductSlide.jsx"
import { Banner, ShippingInfo, ProductSlide, TopBanner } from "../../router/index.js"
import { Caption } from "../../components/common/CustomComponents";
import { bannerlist } from "../../assets/linkData/bannerData.js";

export const Home = () => {

    const bannerDict = bannerlist.reduce((acc, banner) => {
        for (let i = 0; i < bannerlist.length; i++){
            acc[i] = banner;
        }
        return acc;
    })

    return (
        <>
            <TopBanner/>
            <Banner 
                title="Featured" 
                subtitle="Look good, feel good"
                description="Cause to be the best you have to look the best" 
                image="../../../public/images/promotional/alum.png"
                btnTitle="Shop" 
                href="/shop"
            ></Banner>
            <Hero />
            {/* <Product/> */}

            <Banner 
                title="Holiday Collection" 
                subtitle="Boo"
                description="Take a look at our seasonal holiday fits!" 
                image="https://www.triadesigns.com/wp-content/uploads/2020/07/SN_Brand_Web.png"
                btnTitle="Shop" 
                href="/shop"
            ></Banner>
            {/* <ProductSlide /> */}
            <ShippingInfo />

            <Banner 
                title="Interested?" 
                subtitle="Make the most out of college"
                description="You might as well make these the best years of your life" 
                image="https://www.triadesigns.com/wp-content/uploads/2020/07/SN_Brand_Web.png"
                btnTitle="About" 
                href="/about"
            ></Banner>

            <div className="container my-16 slideproduct bg-black">
                <Title level={3}>Recent Products</Title>
                <Caption>
                    DISCOVER THE MOST TRENDING PRODUCTS NOW.
                </Caption>
                <br />
                <ProductSlideCard />
            </div>
            
        </>
    )
}