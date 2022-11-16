const allTestimonial = [
    {
        image: "client-img.png",
        name: "Jone Mark",
        profession: "TEACHER 1",
        review: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
    },
    {
        image: "client-img.png",
        name: "Jone Mark",
        profession: "TEACHER 2",
        review: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
    },
    {
        image: "client-img.png",
        name: "Jone Mark",
        profession: "TEACHER 3",
        review: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
    },
    {
        image: "client-img.png",
        name: "Jone Mark",
        profession: "TEACHER 4",
        review: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
    },
    {
        image: "client-img.png",
        name: "Jone Mark",
        profession: "TEACHER 5",
        review: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
    },
]

function Testimonial() {
    return (
        <><br />
            <section className="client_section layout_padding-bottom">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            WHAT SAYS CUSTOMRE
                        </h2>
                        <hr />
                    </div><br /><br /><br />
                    <div className="container text-center testimonialDescription">
                        <h1><strong>Read some reviews from our beloved clients about our work</strong></h1><br />
                        <p>Mayonity is trusted by multiple companies, universities and government agencies.</p>
                    </div>
                    <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">

                            {allTestimonial ? allTestimonial.map((testimonial, key) => {
                                let status = key === 0 ? "active" : "";
                                return (

                                    <div className={"carousel-item" + status} key={key}>
                                        <div className="client_container layout_padding-top">
                                            <div className="img-box">
                                                <img src={"assests/images/" + testimonial.image} alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    {testimonial.name}
                                                </h5>
                                                <p>
                                                    <img src="assests/images/left-quote.png" alt="" />
                                                    <span>

                                                        {testimonial.profession}
                                                    </span>
                                                    <img src="assests/images/right-quote.png" alt="" /> <br />
                                                    {testimonial.review}
                                                </p>
                                            </div>
                                        </div>
                                    </div>)
                            }) : <p>Loading. . .</p>}

                        </div>





                        <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Testimonial;
