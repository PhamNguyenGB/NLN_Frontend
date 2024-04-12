import './Home.scss';
import './assets/css/font-awesome.min.css';
import './assets/css/linearicons.css';
import './assets/css/flaticon.css';
import './assets/css/animate.css';
// import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/bootsnav.css';
import './assets/css/style.css';
import './assets/css/responsive.css';


const HomePage = () => {
    return (
        <>
            <div className="home-page ">
                {/* <!--welcome-hero start --> */}
                <section id="home" className="welcome-hero">

                    <div className="container">
                        <div className="welcome-hero-txt">
                            <h2>get your desired car in resonable price</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore   magna aliqua.
                            </p>
                            <button className="welcome-btn font-18">contact us</button>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="model-search-content">
                                    <div className="row">
                                        <div className="col-md-offset-1 col-md-2 col-sm-12">
                                            <div className="single-model-search">
                                                <h2>select year</h2>
                                                <div className="model-select-icon">
                                                    <select className="form-control">

                                                        <option value="default">year</option>
                                                        {/* <!-- /.option--> */}

                                                        <option value="2018">2018</option>
                                                        {/* <!-- /.option--> */}

                                                        <option value="2017">2017</option>
                                                        {/* <!-- /.option--> */}
                                                        <option value="2016">2016</option>
                                                        {/* <!-- /.option--> */}

                                                    </select>
                                                    {/* <!-- /.select--> */}
                                                </div>
                                                {/* <!-- /.model-select-icon --> */}
                                            </div>
                                            <div className="single-model-search">
                                                <h2>body style</h2>
                                                <div className="model-select-icon">
                                                    <select className="form-control">

                                                        <option value="default">style</option>
                                                        {/* <!-- /.option--> */}

                                                        <option value="sedan">sedan</option>
                                                        {/* <!-- /.option--> */}

                                                        <option value="van">van</option>
                                                        {/* <!-- /.option--> */}
                                                        <option value="roadster">roadster</option>
                                                        {/* <!-- /.option--> */}

                                                    </select>
                                                    {/* <!-- /.select--> */}
                                                </div>
                                                {/* <!-- /.model-select-icon --> */}
                                            </div>
                                        </div>
                                        <div className="col-md-offset-1 col-md-2 col-sm-12">
                                            <div className="single-model-search">
                                                <h2>select make</h2>
                                                <div className="model-select-icon">
                                                    <select className="form-control">

                                                        <option value="default">make</option>
                                                        {/* <!-- /.option--> */}

                                                        <option value="toyota">toyota</option>
                                                        {/* <!-- /.option--> */}

                                                        <option value="holden">holden</option>
                                                        {/* <!-- /.option--> */}
                                                        <option value="maecedes-benz">maecedes-benz.</option>
                                                        {/* <!-- /.option--> */}

                                                    </select>
                                                    {/* <!-- /.select--> */}
                                                </div>
                                                {/* <!-- /.model-select-icon --> */}
                                            </div>
                                            <div className="single-model-search">
                                                <h2>car condition</h2>
                                                <div className="model-select-icon">
                                                    <select className="form-control">

                                                        <option value="default">condition</option>
                                                        {/* <!-- /.option--> */}

                                                        <option value="something">something</option>
                                                        {/* <!-- /.option--> */}

                                                        <option value="something">something</option>
                                                        {/* <!-- /.option--> */}
                                                        <option value="something">something</option>
                                                        {/* <!-- /.option--> */}

                                                    </select>
                                                    {/* <!-- /.select--> */}
                                                </div>
                                                {/* <!-- /.model-select-icon --> */}
                                            </div>
                                        </div>
                                        <div className="col-md-offset-1 col-md-2 col-sm-12">
                                            <div className="single-model-search">
                                                <h2>select model</h2>
                                                <div className="model-select-icon">
                                                    <select className="form-control">

                                                        <option value="default">model</option>
                                                        {/* <!-- /.option--> */}

                                                        <option value="kia-rio">kia-rio</option>
                                                        {/* <!-- /.option--> */}

                                                        <option value="mitsubishi">mitsubishi</option>
                                                        {/* <!-- /.option--> */}
                                                        <option value="ford">ford</option>
                                                        {/* <!-- /.option--> */}

                                                    </select>
                                                    {/* <!-- /.select--> */}
                                                </div>
                                                {/* <!-- /.model-select-icon --> */}
                                            </div>
                                            <div className="single-model-search">
                                                <h2>select price</h2>
                                                <div className="model-select-icon">
                                                    <select className="form-control">

                                                        <option value="default">price</option>
                                                        {/* <!-- /.option--> */}

                                                        <option value="$0.00">$0.00</option>
                                                        {/* <!-- /.option--> */}

                                                        <option value="$0.00">$0.00</option>
                                                        {/* <!-- /.option--> */}
                                                        <option value="$0.00">$0.00</option>
                                                        {/* <!-- /.option--> */}

                                                    </select>
                                                    {/* <!-- /.select--> */}
                                                </div>
                                                {/* <!-- /.model-select-icon --> */}
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-12">
                                            <div className="single-model-search text-center">
                                                <button className="welcome-btn model-search-btn font-18" >
                                                    search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* <!--/.welcome-hero--> */}

                {/* <!--welcome-hero end --> */}


                {/* <!--service start --> */}
                <section id="service" className="service">
                    <div className="container">
                        <div className="service-content">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="single-service-item">
                                        <div className="single-service-icon">
                                            <i className="flaticon-car"></i>
                                        </div>
                                        <h2><a href="#">largest dealership <span> of</span> car</a></h2>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="single-service-item">
                                        <div className="single-service-icon">
                                            <i className="flaticon-car-repair"></i>
                                        </div>
                                        <h2><a href="#">unlimited repair warrenty</a></h2>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="single-service-item">
                                        <div className="single-service-icon">
                                            <i className="flaticon-car-1"></i>
                                        </div>
                                        <h2><a href="#">insurence support</a></h2>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--/.container--> */}

                </section>
                {/* <!--/.service--> */}

                {/* <!--service end--> */}


                {/* <!--new-cars start --> */}
                <section id="new-cars" className="new-cars">
                    <div className="container">
                        <div className="section-header">
                            <p>checkout <span>the</span> latest cars</p>
                            <h2>newest cars</h2>
                        </div>
                        {/* <!--/.section-header--> */}
                        <div className="new-cars-content">
                            <div className="owl-carousel owl-theme" id="new-cars-carousel">
                                <div className="new-cars-item">
                                    <div className="single-new-cars-item">
                                        <div className="row">
                                            <div className="col-md-7 col-sm-12">
                                                <div className="new-cars-img">
                                                    <img src="assets/images/new-cars-model/ncm1.png" alt="img" />
                                                </div>
                                                {/* <!--/.new-cars-img--> */}
                                            </div>
                                            <div className="col-md-5 col-sm-12">
                                                <div className="new-cars-txt">
                                                    <h2><a href="#">chevrolet camaro <span> za100</span></a></h2>
                                                    <p>
                                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </p>
                                                    <p className="new-cars-para2">
                                                        Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                                    </p>
                                                    <button className="welcome-btn new-cars-btn">
                                                        view details
                                                    </button>
                                                </div>
                                                {/* <!--/.new-cars-txt--> */}
                                            </div>
                                            {/* <!--/.col--> */}
                                        </div>
                                        {/* <!--/.row--> */}
                                    </div>
                                    {/* <!--/.single-new-cars-item--> */}
                                </div>
                                {/* <!--/.new-cars-item--> */}
                                <div className="new-cars-item">
                                    <div className="single-new-cars-item">
                                        <div className="row">
                                            <div className="col-md-7 col-sm-12">
                                                <div className="new-cars-img">
                                                    <img src="assets/images/new-cars-model/ncm2.png" alt="img" />
                                                </div>
                                                {/* <!--/.new-cars-img--> */}
                                            </div>
                                            <div className="col-md-5 col-sm-12">
                                                <div className="new-cars-txt">
                                                    <h2><a href="#">BMW series-3 wagon</a></h2>
                                                    <p>
                                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </p>
                                                    <p className="new-cars-para2">
                                                        Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                                    </p>
                                                    <button className="welcome-btn new-cars-btn">
                                                        view details
                                                    </button>
                                                </div>
                                                {/* <!--/.new-cars-txt--> */}
                                            </div>
                                            {/* <!--/.col--> */}
                                        </div>
                                        {/* <!--/.row--> */}
                                    </div>
                                    {/* <!--/.single-new-cars-item--> */}
                                </div>
                                {/* <!--/.new-cars-item--> */}
                                <div className="new-cars-item">
                                    <div className="single-new-cars-item">
                                        <div className="row">
                                            <div className="col-md-7 col-sm-12">
                                                <div className="new-cars-img">
                                                    <img src="assets/images/new-cars-model/ncm3.png" alt="img" />
                                                </div>
                                                {/* <!--/.new-cars-img--> */}
                                            </div>
                                            <div className="col-md-5 col-sm-12">
                                                <div className="new-cars-txt">
                                                    <h2><a href="#">ferrari 488 superfast</a></h2>
                                                    <p>
                                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </p>
                                                    <p className="new-cars-para2">
                                                        Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                                    </p>
                                                    <button className="welcome-btn new-cars-btn">
                                                        view details
                                                    </button>
                                                </div>
                                                {/* <!--/.new-cars-txt--> */}
                                            </div>
                                            {/* <!--/.col--> */}
                                        </div>
                                        {/* <!--/.row--> */}
                                    </div>
                                    {/* <!--/.single-new-cars-item--> */}
                                </div>
                                {/* <!--/.new-cars-item--> */}
                            </div>
                            {/* <!--/#new-cars-carousel--> */}
                        </div>
                        {/* <!--/.new-cars-content--> */}
                    </div>
                    {/* <!--/.container--> */}

                </section>
                {/* <!--/.new-cars--> */}

                {/* <!--new-cars end --> */}


                {/* <!--featured-cars start --> */}
                <section id="featured-cars" className="featured-cars">
                    <div className="container">
                        <div className="section-header">
                            <p>checkout <span>the</span> featured cars</p>
                            <h2>featured cars</h2>
                        </div>
                        {/* <!--/.section-header--> */}
                        <div className="featured-cars-content">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-featured-cars">
                                        <div className="featured-img-box">
                                            <div className="featured-cars-img">
                                                <img src="assets/images/featured-cars/fc1.png" alt="cars" />
                                            </div>
                                            <div className="featured-model-info">
                                                <p>
                                                    model: 2017
                                                    <span className="featured-mi-span"> 3100 mi</span>
                                                    <span className="featured-hp-span"> 240HP</span>
                                                    automatic
                                                </p>
                                            </div>
                                        </div>
                                        <div className="featured-cars-txt">
                                            <h2><a href="#">BMW 6-series gran coupe</a></h2>
                                            <h3>$89,395</h3>
                                            <p>
                                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-featured-cars">
                                        <div className="featured-img-box">
                                            <div className="featured-cars-img">
                                                <img src="assets/images/featured-cars/fc2.png" alt="cars" />
                                            </div>
                                            <div className="featured-model-info">
                                                <p>
                                                    model: 2017
                                                    <span className="featured-mi-span"> 3100 mi</span>
                                                    <span className="featured-hp-span"> 240HP</span>
                                                    automatic
                                                </p>
                                            </div>
                                        </div>
                                        <div className="featured-cars-txt">
                                            <h2><a href="#">chevrolet camaro <span>wmv20</span></a></h2>
                                            <h3>$66,575</h3>
                                            <p>
                                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-featured-cars">
                                        <div className="featured-img-box">
                                            <div className="featured-cars-img">
                                                <img src="assets/images/featured-cars/fc3.png" alt="cars" />
                                            </div>
                                            <div className="featured-model-info">
                                                <p>
                                                    model: 2017
                                                    <span className="featured-mi-span"> 3100 mi</span>
                                                    <span className="featured-hp-span"> 240HP</span>
                                                    automatic
                                                </p>
                                            </div>
                                        </div>
                                        <div className="featured-cars-txt">
                                            <h2><a href="#">lamborghini <span>v520</span></a></h2>
                                            <h3>$125,250</h3>
                                            <p>
                                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-featured-cars">
                                        <div className="featured-img-box">
                                            <div className="featured-cars-img">
                                                <img src="assets/images/featured-cars/fc4.png" alt="cars" />
                                            </div>
                                            <div className="featured-model-info">
                                                <p>
                                                    model: 2017
                                                    <span className="featured-mi-span"> 3100 mi</span>
                                                    <span className="featured-hp-span"> 240HP</span>
                                                    automatic
                                                </p>
                                            </div>
                                        </div>
                                        <div className="featured-cars-txt">
                                            <h2><a href="#">audi <span> a3</span> sedan</a></h2>
                                            <h3>$95,500</h3>
                                            <p>
                                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-featured-cars">
                                        <div className="featured-img-box">
                                            <div className="featured-cars-img">
                                                <img src="assets/images/featured-cars/fc4.png" alt="cars" />
                                            </div>
                                            <div className="featured-model-info">
                                                <p>
                                                    model: 2017
                                                    <span className="featured-mi-span"> 3100 mi</span>
                                                    <span className="featured-hp-span"> 240HP</span>
                                                    automatic
                                                </p>
                                            </div>
                                        </div>
                                        <div className="featured-cars-txt">
                                            <h2><a href="#">infiniti <span>z5</span></a></h2>
                                            <h3>$36,850</h3>
                                            <p>
                                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-featured-cars">
                                        <div className="featured-img-box">
                                            <div className="featured-cars-img">
                                                <img src="assets/images/featured-cars/fc5.png" alt="cars" />
                                            </div>
                                            <div className="featured-model-info">
                                                <p>
                                                    model: 2017
                                                    <span className="featured-mi-span"> 3100 mi</span>
                                                    <span className="featured-hp-span"> 240HP</span>
                                                    automatic
                                                </p>
                                            </div>
                                        </div>
                                        <div className="featured-cars-txt">
                                            <h2><a href="#">porsche <span>718</span> cayman</a></h2>
                                            <h3>$48,500</h3>
                                            <p>
                                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-featured-cars">
                                        <div className="featured-img-box">
                                            <div className="featured-cars-img">
                                                <img src="assets/images/featured-cars/fc7.png" alt="cars" />
                                            </div>
                                            <div className="featured-model-info">
                                                <p>
                                                    model: 2017
                                                    <span className="featured-mi-span"> 3100 mi</span>
                                                    <span className="featured-hp-span"> 240HP</span>
                                                    automatic
                                                </p>
                                            </div>
                                        </div>
                                        <div className="featured-cars-txt">
                                            <h2><a href="#"><span>bmw 8-</span>series coupe</a></h2>
                                            <h3>$56,000</h3>
                                            <p>
                                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-featured-cars">
                                        <div className="featured-img-box">
                                            <div className="featured-cars-img">
                                                <img src="assets/images/featured-cars/fc8.png" alt="cars" />
                                            </div>
                                            <div className="featured-model-info">
                                                <p>
                                                    model: 2017
                                                    <span className="featured-mi-span"> 3100 mi</span>
                                                    <span className="featured-hp-span"> 240HP</span>
                                                    automatic
                                                </p>
                                            </div>
                                        </div>
                                        <div className="featured-cars-txt">
                                            <h2><a href="#">BMW <span> x</span>series-6</a></h2>
                                            <h3>$75,800</h3>
                                            <p>
                                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="button" className="btn btn-link font-18">Xem thêm</button>
                    </div>
                    {/* <!--/.container--> */}

                </section>
                {/* <!--/.featured-cars--> */}

                {/* <!--featured-cars end --> */}


                {/* <!-- clients-say strat --> */}
                <section id="clients-say" className="clients-say">
                    <div className="container">
                        <div className="section-header">
                            <h2>what our clients say</h2>
                        </div>
                        {/* <!--/.section-header--> */}
                        <div className="row">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="col-sm-3 col-xs-12">
                                    <div className="single-testimonial-box">
                                        <div className="testimonial-description">
                                            <div className="testimonial-info">
                                                <div className="testimonial-img">
                                                    <img src="assets/images/clients/c1.png" alt="image of clients person" />
                                                </div>
                                                {/* <!--/.testimonial-img--> */}
                                            </div>
                                            {/* <!--/.testimonial-info--> */}
                                            <div className="testimonial-comment">
                                                <p>
                                                    Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
                                                </p>
                                            </div>
                                            {/* <!--/.testimonial-comment--> */}
                                            <div className="testimonial-person">
                                                <h2><a href="#">tomas lili</a></h2>
                                                <h4>new york</h4>
                                            </div>
                                            {/* <!--/.testimonial-person--> */}
                                        </div>
                                        {/* <!--/.testimonial-description--> */}
                                    </div>
                                    {/* <!--/.single-testimonial-box--> */}
                                </div>
                                {/* <!--/.col--> */}
                                <div className="col-sm-3 col-xs-12">
                                    <div className="single-testimonial-box">
                                        <div className="testimonial-description">
                                            <div className="testimonial-info">
                                                <div className="testimonial-img">
                                                    <img src="assets/images/clients/c2.png" alt="image of clients person" />
                                                </div>
                                                {/* <!--/.testimonial-img--> */}
                                            </div>
                                            {/* <!--/.testimonial-info--> */}
                                            <div className="testimonial-comment">
                                                <p>
                                                    Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
                                                </p>
                                            </div>
                                            {/* <!--/.testimonial-comment--> */}
                                            <div className="testimonial-person">
                                                <h2><a href="#">romi rain</a></h2>
                                                <h4>london</h4>
                                            </div>
                                            {/* <!--/.testimonial-person--> */}
                                        </div>
                                        {/* <!--/.testimonial-description--> */}
                                    </div>
                                    {/* <!--/.single-testimonial-box--> */}
                                </div>
                                {/* <!--/.col--> */}
                                <div className="col-sm-3 col-xs-12">
                                    <div className="single-testimonial-box">
                                        <div className="testimonial-description">
                                            <div className="testimonial-info">
                                                <div className="testimonial-img">
                                                    <img src="assets/images/clients/c3.png" alt="image of clients person" />
                                                </div>
                                                {/* <!--/.testimonial-img--> */}
                                            </div>
                                            {/* <!--/.testimonial-info--> */}
                                            <div className="testimonial-comment">
                                                <p>
                                                    Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
                                                </p>
                                            </div>
                                            {/* <!--/.testimonial-comment--> */}
                                            <div className="testimonial-person">
                                                <h2><a href="#">john doe</a></h2>
                                                <h4>washington</h4>
                                            </div>
                                            {/* <!--/.testimonial-person--> */}
                                        </div>
                                        {/* <!--/.testimonial-description--> */}
                                    </div>
                                    {/* <!--/.single-testimonial-box--> */}
                                </div>
                                {/* <!--/.col--> */}
                            </div>
                            {/* <!--/.testimonial-carousel--> */}
                        </div>
                        {/* <!--/.row--> */}
                    </div>
                    {/* <!--/.container--> */}

                </section>
                {/* <!--/.clients-say--> */}

                {/* <!-- clients-say end --> */}

                {/* <!--blog start --> */}
                <section id="blog" className="blog"></section>
                {/* <!--/.blog--> */}

                {/* <!--blog end --> */}
            </div>

        </>
    )
};

export default HomePage;