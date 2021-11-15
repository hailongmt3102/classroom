import React, {useEffect} from 'react'
import ClassImage from 'resources/images/classroom.jpg'
import KhtnImage from 'resources/images/khtn.jpeg'
import Doge from 'resources/images/doge.jpg'



export default function Home() {
    useEffect(() => {
    }, [])
    return (
        <div>
            <div className='bg-light bg-gradient'>
                <div className='row'>
                    <div className='col-3 m-4 mr-1'>
                        <img src={ClassImage} class="img-fluid" alt="..."/>
                    </div>
                    <div className='col m-4 ml-1 fs-4'>
                        App description 
                        App description 
                        App description 
                        App description 
                        App description 
                        App description 
                        App description 
                        App description 
                        ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, allowing you to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly growing. There’s never been a better time to learn React.
                        ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, allowing you to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly growing. There’s never been a better time to learn React.
                    </div>
                </div>
            </div>

            <div className='bg-info bg-gradient'>
                <div className='row'>
                    <div className='col-3 m-4 mr-1'>
                        <img src={KhtnImage} class="img-fluid" alt="..."/>
                    </div>
                    <div className='col m-4 ml-1 fs-4'>
                        About the university 
                        ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, allowing you to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly growing. There’s never been a better time to learn React.
                    </div>
                </div>
            </div>

            <div className='bg-secondary bg-gradient'>
                <div>
                <p class="text-center"><h3>About my groups</h3></p>
                </div>
                <div className='row m-4'>
                    <div className='col'>
                        <div className='text-center'>
                            <div class="card m-auto" style={{width : "18rem"}}>
                                <img src={Doge} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Name</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    <div className='col'>
                        <div class="card m-auto" style={{width : "18rem"}}>
                            <img src={Doge} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">name</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                <footer class="text-center text-lg-start bg-light text-muted">
                    <section
                        class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                    >
                        <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-github"></i>
                        </a>
                        </div>
                    </section>

                    <section class="">
                        <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-gem me-3"></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Laravel</a>
                            </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Help</a>
                            </p>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                        </div>
                    </section>

                    <div class="text-center p-4" style={{background: "#64000000"}}>
                        © 2021 
                    </div>
                    </footer>
                </div>
            </div>
    )
}
