import type {FC} from "react";
import type {IProducts} from "../models/IProducts.ts";


type MyPrompsType = {
    product: IProducts
}


const MyProduct: FC<MyPrompsType> = ({product}) => {
    return (
        <div>
            <h2>{product.title} - {product.price}</h2>
            <img src={product.image} alt={product.title}/>

        </div>
    );
};

export default MyProduct;