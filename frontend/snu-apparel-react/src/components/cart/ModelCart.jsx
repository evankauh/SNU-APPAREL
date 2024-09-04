import { IoMdHeart } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Badges, BodyOne, Title } from "../common/CustomComponents"
import { useState } from "react";
import { CartActions, clearCart, selectTotalPrice, selectTotalQuantity } from "../../redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { CheckoutForm } from "../cart/CheckoutForm";

export const ModelCart = () => {
    const totalQuantity = useSelector(selectTotalQuantity);
    const cartItems = useSelector((state) => state.cart.itemList);
    const totalPrice = useSelector(selectTotalPrice);
    
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [activeTab, setActiveTab] = useState("cart");

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsClosing(true);

        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 300);

        
    }

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    const handlePaymentSuccess = () => {
        console.log("==================");
        console.log("Payment Success");
        console.log("==================");
        clearCart();
    }

    return (
    <>
        <button className="relative z-20" onClick={openModal}>
            <IoMdHeart size={22}/>
            <div className="absolute -top-2 -right-1.5">
                <Badges color="bg-primary-green">0</Badges>
            </div>
        </button>
        <button className="relative z-20" onClick={openModal}>
            <MdOutlineShoppingBag size={22} />
            <div className="absolute -top-2 -right-1.5">
                <Badges color="bg-primary-green">{totalQuantity}</Badges>
            </div>
        </button>

        {isOpen && (
            <>
                <div className="cartoverlay" onClick={closeModal}></div>
                <div className={`cartmodel p-10 text-primary overflow-y-auto ${isClosing ? "closing" : ""}`}>
                    <div className="flex justify-between gap-5">
                        <button
                            className={`flex items-center gap-2 text-sm font-small ${
                            activeTab === "cart" ? "text-primary" : ""
                            }`}
                            onClick={() => handleTabChange("cart")}
                        >
                            Shopping Cart
                            <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">
                            {totalQuantity}
                            </span>
                        </button>
                        <button
                            className={`flex items-center gap-2 text-sm font-small ${
                            activeTab === "wishlist" ? "text-primary" : ""
                            }`}
                            onClick={() => handleTabChange("wishlist")}
                        >
                            Wishlist
                            <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">
                            0
                            </span>
                        </button>
                    </div>
                    <div className="line-container">
                        <div
                            className={`line ${activeTab === "cart" ? "active" : ""}`}
                        ></div>
                        <div
                            className={`line ${activeTab === "wishlist" ? "active" : ""}`}
                        ></div>
                    </div>

                    {activeTab == "cart" ? (
                        <>
                        <div className="overflow-y-auto">
                            {cartItems.map((item) => (
                                <CartProduct
                                    key = {item.id}
                                    id = {item.id}
                                    cover = {item.cover}
                                    price = {item.price}
                                    name = {item.name}
                                    quantity = {item.quantity}
                                />
                            ))}
                        </div>

                        <div className="total flex items-center justify-between mt-10">
                            <Title level={7}>Subtotal: </Title>
                            <Title level={7}>${totalPrice.toFixed(2)}</Title>
                        </div>
                        <div className="checkout">
                            <CheckoutForm total={totalPrice} handlePaymentSuccess={handlePaymentSuccess}/>
                        </div>
                        <NavLink to="/cart" onClick={closeModal}>
                            <button className="primary-btn w-full">View Cart</button>
                        </NavLink>
                        </>
                    ) : (
                        <>Show Product</>
                    )}
                </div>
            </>
        )} 
    </>
    )
}

export const CartProduct = ({ id, cover, name, price, quantity }) => {
    const dispatch = useDispatch();
  
    const removeCartItems = () => {
      dispatch(CartActions.removeFromAllCart(id));
    };
  
    return (
      <div className="mt-5 border-b-2 border-gray-200 pb-5">
        <div className="flex items-center gap-5">
          <div className="images w-20 h-20">
            {cover?.slice(0, 1).map((images, i) => (
              <img
                src={images?.image}
                alt=""
                key={i}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
          <div className="details w-1/2">
            <BodyOne>{name}</BodyOne>
            <p className="text-primary-green">
              {quantity} x ${price?.toFixed(2)}
            </p>
          </div>
          <button
            className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-primary"
            onClick={removeCartItems}
          >
            <IoCloseOutline size={25} />
          </button>
        </div>
      </div>
    );
  };
  