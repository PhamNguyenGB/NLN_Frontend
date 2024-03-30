import { Link, useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import './Products.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByID, getSimilarProduct } from "../../redux/slices/productSlice";
import { addCart } from "../../redux/slices/cartSlice";

const Products = () => {
    const { type } = useParams();
    const products = useSelector((state) => state.product.products)

    const history = useHistory();
    const disPatch = useDispatch();

    const handleClickCart = async (idProduct) => {
        history.push(`/product/Mercedes/${idProduct}`);
        await disPatch(getProductByID(idProduct));
        await disPatch(getSimilarProduct({ type, idProduct }));
    };

    const handleClickAddCart = async (product) => {
        await disPatch(addCart({ product, quantity: 1 }));
    };

    useEffect(() => { }, []);

    return (
        <>
            <div className="container mt-3 body-content">
                <Link to='/' className="home ">Trang chủ</Link>
                <span style={{ fontSize: '16px', color: '#ccc' }}>/</span>
                <span className="type" >{type}</span>
                <div className="mt-5 row">
                    <div className="row col-10">

                        {products ?
                            <>
                                {products.Data.map((item, index) => {
                                    return (
                                        <div className="card col-3 m-3" style={{ width: "30rem" }} key={`product-${index}`}>
                                            <img role="button" src={item.image} className="card-img-top" alt="..." onClick={() => handleClickCart(item.id)} />
                                            <div className="card-body" onClick={() => handleClickCart(item.id)}>
                                                <h5 className="card-title" role="button" style={{ fontSize: "2rem" }}>{item.name}</h5>
                                                <p role="button" className="card-text">{item.price}</p>
                                            </div>
                                            <button className="btn btn-primary" style={{ fontSize: "2rem" }} onClick={() => handleClickAddCart(item)}> Add to cart</button>
                                        </div>
                                    )
                                })}
                            </>
                            :
                            <>
                                ...isLoading
                            </>}

                    </div>

                    <div className="col-2 ">

                    </div>

                </div>
            </div >
        </>
    )
};

export default Products;