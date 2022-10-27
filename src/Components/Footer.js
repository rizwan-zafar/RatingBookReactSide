const SocialMedias = [
    {
        icon: "facebook-logo-button.png",
        link: "https://www.facebook.com"
    },
    {
        icon: "twitter-logo-button.png",
        link: "https://www.twitter.com"
    },
    {
        icon: "linkedin.png",
        link: "https://www.linkedin.com"
    },
    {
        icon: "instagram.png",
        link: "https://www.instagram.com"
    }
]
function Footer() {
    return (
        <div>

            <section className="info_section layout_padding">
                <div className="container">
                    <div className="info_logo">
                        <h2>
                            NiNom
                        </h2>
                    </div>
                    <div className="info_contact">
                        <div className="row">
                            <div className="col-md-4">
                                <a href="/#">
                                    <img src="images/location.png" alt="" />
                                    <span>
                                        Passages of Lorem Ipsum available
                                    </span>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="/#">
                                    <img src="images/call.png" alt="" />
                                    <span>
                                        Call : +012334567890
                                    </span>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="/#">
                                    <img src="images/mail.png" alt="" />
                                    <span>
                                        demo@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-lg-9">
                            <div className="info_form">
                                <form action="">
                                    <input type="text" placeholder="Enter your email" />
                                    <button>
                                        subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="info_social">
                                {SocialMedias ? SocialMedias.map((media, key) => {
                                    return (<div key={key}>
                                        <a href={media.link} target="_blank" rel="noreferrer">
                                            <img src={"assests/images/" + media.icon} alt="" />
                                        </a>
                                    </div>)
                                }) : ""}




                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section className="container-fluid footer_section ">
                <p>
                    &copy; <span id="displayYear"></span> All Rights Reserved. Design by
                    <a href="/https://html.design/">Free Html Templates</a>
                </p>
            </section>
        </div>
    );
}

export default Footer;
