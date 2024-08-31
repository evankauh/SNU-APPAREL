import { useParams } from "react-router-dom";
import { productlists } from "../../assets/linkData/productData";
import { useState } from "react";
import { Title, Caption } from "../../components/common/CustomComponents";
import { RenderRatingStars } from "../../components/product/ProductCard";
import { GoPlus } from "react-icons/go";
import { BiMinus } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

const colorsValue = {
    red: "#fe7fef",
    yellow: "#ffff00",
    green: "#008000",
    blue: "#0000ff",
    white: "#f8f8f8",
    brown: "#a52a2a",
    clear: "#ffffff",
    "dark brown": "#654321",
    light: "#f5f5dc",
    black: "#000000",
    natural: "#8b4513",
    "light brown": "#deb887",
    dark: "#696969",
    gray: "#808080",
    beige: "#f5f5dc"
};

export const ProductDeatils = () => {
    const { productId } = useParams();
    const product = productlists.find(
        (product) => product.id === parseInt(productId)
    );

    const { title, images, price, description, discount, rating, color } = product;

    const [selectedColor, setSelectedColor] = useState(color[0].value);
    const [selectedPrice, setSelectedPrice] = useState(
        price.find((price) => price.color === color[0].value)
    );

    const handleColorClick = (color) => {
        const newSelectedPrice = price.find((price) => price.color === color);
        setSelectedColor(color);
        setSelectedPrice(newSelectedPrice);
    }

    console.log(images[0].image);

    if (!product) {
        return <div>Product not found</div>;
    }

    

    return (

        <section className="container my-32 slideproduct">
            <div className="flex justify-between flex-col lg:flex-row" key={productId}>
                <div className="images lg:w-1/2">
                    <div>
                        {images.slice(0,1).map((image, index) => (
                            <img src={image.image} key={index} className="w-full h-full" alt=""/>
                        ))}
                    </div>
                </div>
                <div className="deatils lg:w-1/2 px-16 pt-16">
                    <button className="feature-btn bg-indigo-600">
                        SALE {discount}% OFF
                    </button>
                    <Title level={2} className="my-2">
                        {title}
                    </Title>
                    <div className="flex items-center gap-2 -mt-5 mb-5">
                        <div className="flex items-center gap-1">
                            {RenderRatingStars(rating)}
                        </div>
                        <p>{product.rating} Review</p>
                    </div>
                    <p className="text-[15px]">{description}</p>
                    <br />
                    <div className="mb-5">
                        <Caption>Colors</Caption>
                        <div className="flex items-center gap-3 mt-5">
                            {color.map((colorOption, index) => (
                                <div key={index} className={`w-4 h-4 rounded-full -mt-3 cursor-pointer border border-gray-300 ${colorOption}`} style={{backgroundColor: colorOption.value}}></div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Caption>Prices</Caption>
                        <div className="flex items-center gap-3 mt-2">
                            {price.map((price, index) => (
                                <div key={index} className={''}>${price.value}</div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 py-3">
                        <button className="w-8 h-8 text-primary grid place-items-center hover:bg-gray-100 rounded-full"><GoPlus /></button>
                        <input type="text" className="w-10 border border-black text-primary px-3 outline-none" defaultValue={1}></input>
                        <button className="w-8 h-8 text-primary grid place-items-center hover:bg-gray-100 rounded-full" ><BiMinus /></button>
                        <button className="primary-btn uppercase h-10">Add to cart</button>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="h-10 secondary-btn gap-2"><FaRegHeart size={18}/>Add to wishlist</button>
                        <button className="h-10 secondary-btn">Compare</button>
                    </div>
                    
                </div>
            </div>
            <div>ADD PRODUCT RECOMMENDATIONS OR FEATURES HERE</div>
        </section>
    );
};
