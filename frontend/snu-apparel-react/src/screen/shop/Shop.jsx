import { ProductCard } from "../../router"
import { productlists } from "../../assets/linkData/productData"


export const Shop = () => {
    return (
        <>
            <div className="w-full h-full justify-center items-center p-[2%]">
                <section className="w-full h-full m-auto mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2%]">
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
                </section>
            </div>
        </>
    )
}