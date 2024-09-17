import React from "react";
import { herolist } from "../../assets/linkData/heroData"
import { productlists } from "../../assets/linkData/productData";
import { ProductCard } from "../product/ProductCard";
import {BodyOne, Caption, Title} from "../common/CustomComponents.jsx"
import { useState } from "react";
import "../../styles/index.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="absolute top-3 right-96 lg:right-[5%] slider-btn rounded-full bg-gray-600" onClick={onClick}>
        <button className="next">
            <MdKeyboardArrowRight size={30}/>
        </button>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute top-3 right-96 lg:right-[10%] slider-btn z-10 rounded-full bg-gray-600" onClick={onClick}>
        <button className="next">
            <MdKeyboardArrowLeft size={30}/>
        </button>
      </div>
    );
  }

export const Hero = () => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <>
            {/* used to be z-20 */}
            <section className="h-[50vh] lg:h-[95vh] px-10 bg-black lg:mt-14 relative z-1 featureproduct"> 
            {/* HEROITEM AND HEROLISTS NOT BEING USED... */}
                {/* <Slider {...settings}>
                    {herolist.map((item) => (
                        <HeroItem 
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            prices={item.price}
                            colors={item.color}
                            image={item.image}
                        />
                    ))}
                </Slider> */} 
                <Title level={5} className="text-white absolute top-5 left-10">Best of Graphic Tees</Title>
                <Slider {...settings}>
                    {productlists.map((product) => (
                        <ProductCard
                            id={product.id}
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            images={product.images}
                            price={product.price}
                            discount={product.discount}
                            rating={product.rating}
                            featured={product.featured}
                            category={product.category}
                            color={product.color}
                        />
                    ))}
                </Slider>
            </section>

            <section className="h-[50vh] lg:h-[90vh] bg-black relative z-1">
                <Title level={5} className="px-10 py-5 text-white">The Essentials</Title>

                <div className="flex flex-row justify-between px-10">
                    <div className="flex flex-col items-center gap-10">
                        <img className="w-[28vw]" src="./public/images/hero/essentials-1.png" alt=""/>
                        <button className="bg-black hover:bg-primary text-white py-3 px-6 rounded-full border border-white uppercase">Shop Hoodies</button>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                        <img className="w-[28vw]" src="./public/images/hero/essentials-2.png" alt=""/>
                        <button className="bg-black hover:bg-primary text-white py-3 px-6 rounded-full border border-white uppercase">Shop Tees</button>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                        <img className="w-[28vw]" src="./public/images/hero/essentials-3.png" alt=""/>
                        <button className="bg-black hover:bg-primary text-white py-3 px-6 rounded-full border border-white uppercase">Shop Hats</button>
                    </div>
                </div>
            </section>
            
        </>
    )
};

export const HeroItem = ({key, title, description, prices, colors, image}) => {
    const [selectedColor, setSelectedColor] = useState(colors[0].value);
    const [selectedPrice, setSelectedPrice] = useState(prices.find((price) => price.color === colors[0].value))

    const handleColorClick = color => {
        const newSelectedPrice = prices.find((price) => price.color === color);
        setSelectedColor(color);
        setSelectedPrice(newSelectedPrice);
    }
    return (
        <>
            <section className="content flex justify-between lg:px-16 mt-10 lg:mt-0 h-[50vh] lg:h-[95vh] relative z-1">
                <div className="left w-1/2 p-8 lg:p-32">
                    {/* <Title level={1} className="leading-none font-medium md:text-3xl lg:text-[70px] lg:leading-snug mb-4">
                        {title}
                    </Title> */}
                    {/* <BodyOne className="">{description}</BodyOne> */}
                    <div className="flex items-start gap-8 my-5">
                        <div>
                            <Caption>Prices</Caption>
                            <div className="">
                                <Title level={5} className="">{'$' + selectedPrice.value.toFixed(2)}</Title>
                            </div>
                        </div>
                        <div>
                            <Caption>Colors</Caption>
                            <div className="flex items-center justify-center gap-3 mt-2">
                                {colors.map((color, i) => (
                                    <div key={i}
                                    onClick={() => handleColorClick(color.value)}
                                    className={`w-4 h-4 rounded-full cusrsor-pointer border-gray-300 ${selectedColor === color.value ? "selected" : ""}`}
                                    style={{backgroundColor: color.value}}>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <button className="primary-btn uppercase">view details</button>
                        <button className="secondary-btn uppercase">view shop</button>
                    </div>
                </div>

                <div className="right bg-black p-5 w-1/2 h-full flex justify-center items-center relative z-50">
                    ADD T SHIRT OR BOYS IMAGE HERE
                    {/* <img src={image} alt="" className="h-[60vh] w-full object-contain"/> */}
                </div>
                {/* <div className="lg:bg-black lg:h-[88px] lg:absolute lg:top lg:right-0 lg:w-1/3 lg:z-10"></div> */}
            </section>
        </>
    )
};

// const Banner = () => {
//     return (
//         <>
//             <div className="py-20 container flex flex-col lg:flex-row items-center gap-5">
//                 <BannerCard title="Wooden Water Bottles" desc="" cover="./product1-1.png"/>
//                 <BannerCard title="Lets Stay calm and carry on" desc="" cover="../../../assets/imgs/hero/product1-1.png"/>
//                 <BannerCard title="" desc="" cover="../../assets/imgs/hero/product1-1.png"/>
//             </div>
//         </>
//     )
// };

// const BannerCard = ({title, desc, cover, className, classSecond}) => {
//     return(
//         <>
//             <div className="w-full h-full relative">
//                 <img src={cover} alt="" />
//                 <div
//                     className={`${
//                         className ? "absolute bottom-0 p-8 w-full" : "flex absolute bottom-0 p-8 w-full"
//                       } ${className && classSecond ? "left-0 lg:left-48 top-0 w-96" : ""}`}
//                 >
//                     <div>
//                         <Title level={2}>{title}</Title>
//                         <p className="text-lg font-normal leading-none">{desc}</p>
//                     </div>
//                     <div className="w-1/2 mt-5">
//                         <button className="secondary-btn flex justify-end">Shop Now</button>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }