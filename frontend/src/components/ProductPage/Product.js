import { useEffect } from "react";
// import * as productActions from "../../store/product";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addItemToCart } from "../../store/cart";
import { fetchProducts } from '../../store/product';
import './Product.css';

function Productpage(){
    const products = useSelector(state => state.product);
    const userId = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();
    const history = useHistory();



    useEffect(() => {
            dispatch(fetchProducts());
    }, [dispatch])

    const handleClick = (productId) => {
        console.log("userId", userId);
        console.log("productId", productId);
        dispatch(addItemToCart(products.id, userId))
    }


    return(
        <div className="productContainer">
            {products.map((productItem)=>(
                <ProductItem product={productItem} />
             ))}
        </div>
    )
}

export default Productpage;
