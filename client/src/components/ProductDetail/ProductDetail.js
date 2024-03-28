import './ProductDetail.scss';
import { Link } from "react-router-dom";


const ProductDetail = () => {
    return (
        <>
            <div className='container'>
                <Link to='/' className="home ">Trang chủ</Link>
                <span style={{ fontSize: '16px', color: '#ccc' }}>/</span>
                <span className="type" >abc</span>
            </div>
            <section className="py-5">
                <div className="container product-detail">
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div className="border rounded-4 mb-3 d-flex justify-content-center">
                                <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp">
                                    <img style={{ maxWidth: "100%", maxHeight: "100vh", margin: "auto" }} className="rounded-4 fit" src="http://localhost:8080/image/image-1710604376852-496188410.webp" />
                                </a>
                            </div>
                            <div className="d-flex justify-content-center mb-3">
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp">
                                    <img width="60" height="60" className="rounded-2" src="http://localhost:8080/image/image-1710604376852-496188410.webp" />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp">
                                    <img width="60" height="60" className="rounded-2" src="http://localhost:8080/image/image-1710604376852-496188410.webp" />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp">
                                    <img width="60" height="60" className="rounded-2" src="http://localhost:8080/image/image-1710604376852-496188410.webp" />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp">
                                    <img width="60" height="60" className="rounded-2" src="http://localhost:8080/image/image-1710604376852-496188410.webp" />
                                </a>
                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp">
                                    <img width="60" height="60" className="rounded-2" src="http://localhost:8080/image/image-1710604376852-496188410.webp" />
                                </a>
                            </div>
                            {/* <!-- thumbs-wrap.// --> */}
                            {/* <!-- gallery-wrap .end// --> */}
                        </aside>
                        <main className="col-lg-6">
                            <div className="ps-lg-3">
                                <h4 className="title text-dark font-20">
                                    Quality Men's Hoodie for Winter, Men's Fashion <br />
                                    Casual Hoodie
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

                                <div className="mb-3 font-20">
                                    <span className="h5">$75.00</span>
                                    <span className="text-muted">/per box</span>
                                </div>

                                <p style={{ fontSize: '16px' }}>
                                    Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                                    men.
                                </p>

                                <div className="row" style={{ fontSize: '16px' }}>
                                    <dt className="col-3">Type:</dt>
                                    <dd className="col-9">Regular</dd>

                                    <dt className="col-3">Color</dt>
                                    <dd className="col-9">Brown</dd>

                                    <dt className="col-3">Material</dt>
                                    <dd className="col-9">Cotton, Jeans</dd>

                                    <dt className="col-3">Brand</dt>
                                    <dd className="col-9">Reebook</dd>
                                </div>

                                <hr />

                                <div className="row mb-4 font-20">
                                    {/* <!-- col.// --> */}
                                    <div className="col-md-4 col-6 mb-3">
                                        <label className="mb-2 d-block">Quantity</label>
                                        <div className="input-group mb-3" style={{ width: "170px" }}>
                                            <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                                                <i class="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input type="text" className="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                            <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-warning shadow-0 font-20 m-2"> Buy now </button>
                                <button className="btn btn-primary shadow-0 font-20 m-2"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </button>
                                <button className="btn btn-light border border-secondary py-2 icon-hover px-3 font-20 m-2"> <i className="me-1 fa fa-heart fa-lg"></i> Save </button>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            {/* <!-- content --> */}

            <div class="container similar-products my-4">
                <hr />
                <p class="display-5">Similar Products</p>

                <div class="row">
                    <div class="col-md-3">
                        <div class="similar-product">
                            <img class="w-100" src="http://localhost:8080/image/image-1710604376852-496188410.webp" alt="Preview" />
                            <h4 class="title">Lovely black dress</h4>
                            <p class="price">$100</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="similar-product">
                            <img class="w-100" src="http://localhost:8080/image/image-1710604376852-496188410.webp" alt="Preview" />
                            <h4 class="title">Lovely Dress with patterns</h4>
                            <p class="price">$85</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="similar-product">
                            <img class="w-100" src="http://localhost:8080/image/image-1710604376852-496188410.webp" alt="Preview" />
                            <h4 class="title">Lovely fashion dress</h4>
                            <p class="price">$200</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="similar-product">
                            <img class="w-100" src="http://localhost:8080/image/image-1710604376852-496188410.webp" alt="Preview" />
                            <h4 class="title">Lovely red dress</h4>
                            <p class="price ">$120</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProductDetail;