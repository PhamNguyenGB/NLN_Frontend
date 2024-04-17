import './ProductDetail.scss';
import { Link, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProductByID, getSimilarProduct } from '../../redux/slices/productSlice';
import { addCart } from "../../redux/slices/cartSlice";
import numeral from 'numeral';

const ProductDetail = () => {
    const product = useSelector((state) => state.product.product);
    const similarProducts = useSelector((state) => state.product.similarProducts);
    const [quantity, setQuantity] = useState(1);

    const history = useHistory();
    const disPatch = useDispatch();

    const handleClickCart = async (type, idProduct) => {
        history.push(`/product/${type}/${idProduct}`);
        await disPatch(getProductByID(idProduct));
        await disPatch(getSimilarProduct({ type, idProduct }));
        setQuantity(1);
    };

    const handleClickPlus = () => {
        setQuantity(quantity + 1);
    };

    const handleClickMinus = () => {
        if (quantity <= 2) {
            setQuantity(1);
        } else {
            setQuantity(quantity - 1);
        }
    };

    const handleClickAddCart = async (product) => {
        await disPatch(addCart({ product, quantity: quantity }));
    };

    const goBack = () => {
        history.goBack();
    };

    const formatNumber = (number) => {
        return numeral(number).format('0,0');
    }


    return (
        <>
            {product ?
                <>
                    <div className='container'>
                        <Link to='/' className="home ">Trang chủ</Link>
                        <span style={{ fontSize: '16px', color: '#ccc' }}>/ </span>
                        <span onClick={goBack} className='home' role='button' style={{ fontSize: '16px' }}> Trở về</span>
                        <span style={{ fontSize: '16px', color: '#ccc' }}>/</span>
                        <span className="type" >{product.Data.name}</span>
                    </div>
                    <section className="py-5">
                        <div className="container product-detail">
                            <div className="row gx-5">
                                <aside className="col-lg-6">
                                    <div className="border rounded-4 mb-3 d-flex justify-content-center">
                                        <img style={{ maxWidth: "100%", maxHeight: "100vh", margin: "auto" }} className="rounded-4 fit" src={product.Data.image} />
                                    </div>
                                    {/* <!-- thumbs-wrap.// --> */}
                                    {/* <!-- gallery-wrap .end// --> */}
                                </aside>
                                <main className="col-lg-6">
                                    <div className="ps-lg-3">
                                        <h4 className="title text-dark font-20">
                                            {product.Data.name}
                                        </h4>
                                        <div className="d-flex flex-row my-3">
                                            <div className="text-warning mb-1 me-2 font-20">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <span className="ms-1">
                                                    4.5
                                                </span>
                                            </div>
                                            <span className="text-muted font-20"><i className="me-1 fa fa-shopping-basket"></i>154 orders</span>
                                            <span className="text-success ms-2 font-20 ">In stock</span>
                                        </div>

                                        <div className="mb-3">
                                            <span className="h5" style={{ fontSize: '24px', color: '#ff1414' }}>{formatNumber(product.Data.price)} đ</span>
                                        </div>

                                        <p style={{ fontSize: '16px' }}>
                                            {product.Data.destruction}
                                        </p>

                                        <div className="row" style={{ fontSize: '16px' }}>
                                            <dt className="col-3">Type:</dt>
                                            <dd className="col-9">{product.Data.type}</dd>
                                        </div>

                                        <hr />

                                        <div className="row mb-4 font-20">
                                            {/* <!-- col.// --> */}
                                            <div className="col-md-4 col-6 mb-3">
                                                <label className="mb-2 d-block">Quantity</label>
                                                <div className="input-group mb-3" style={{ width: "170px" }}>
                                                    <button
                                                        className="btn btn-white border border-secondary px-3" type="button"
                                                        id="button-addon1" data-mdb-ripple-color="dark"
                                                        onClick={() => handleClickMinus()}
                                                    >
                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input type="text"
                                                        className="form-control text-center border border-secondary font-20"
                                                        aria-label="Example text with button addon" aria-describedby="button-addon1"
                                                        value={quantity}
                                                        onChange={(event) => setQuantity(event.target.value)}
                                                    />
                                                    <button
                                                        className="btn btn-white border border-secondary px-3" type="button"
                                                        id="button-addon2" data-mdb-ripple-color="dark"
                                                        onClick={() => handleClickPlus()}
                                                    >
                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-warning shadow-0 font-20 m-2" onClick={() => handleClickAddCart(product.Data)}>
                                            <Link to='/cart' style={{ textDecoration: 'none', color: '#000' }}>Mua ngay</Link>
                                        </button>
                                        <button className="btn btn-primary shadow-0 font-20 m-2" onClick={() => handleClickAddCart(product.Data)}>
                                            <i className="me-1 fa fa-shopping-basket"></i> Add to cart
                                        </button>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </section>
                    {/* <!-- content --> */}

                    <div className="container similar-products my-4">
                        <hr />
                        <p className="display-5">Sản phẩm tương tự</p>

                        <div className="row">
                            {similarProducts ?
                                <>
                                    {similarProducts.Data.map((item, index) => {
                                        return (
                                            <div className="col-md-3" key={`similar-${index}`}>
                                                <div className="similar-product">
                                                    <img className="w-100" src={item.image} role='button' alt="Preview" onClick={() => handleClickCart(item.type, item.id)} />
                                                    <h4 className="title" role='button' onClick={() => handleClickCart(item.type, item.id)}>{item.name}</h4>
                                                    <p className="price" role='button' onClick={() => handleClickCart(item.type, item.id)}>{item.price}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </>
                                :
                                <>
                                    ...isLoading
                                </>
                            }
                        </div>
                    </div>
                </>
                :
                <>
                    ...isLoading
                </>
            }
        </>
    )
};

export default ProductDetail;