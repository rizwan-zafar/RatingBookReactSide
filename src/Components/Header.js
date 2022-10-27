import Navbar from "./Navbar";
const sliders = [
  {
    slide: "book-slide1.jpg",

  },
  {
    slide: "book-slide2.jpg",

  },
  {
    slide: "book-slide3.jpg",

  },
]
function Header() {
  return (
    <>
    
    <div className="hero_area">

      <div className="brand_box">
        <a className="navbar-brand" href="/">
          <span>
            Top Rated Books
          </span>
        </a>
      </div>

      <section className=" slider_section position-relative">
        <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
          <div className="carousel-inner">

            {sliders ? sliders.map((slide, key) => {
              let status = key === 0 ? 'active' : '';
              return (<div className={"carousel-item " + status} key={key}>
                <div className="img-box" key={key}>
                  <img src={"assests/images/" + slide.slide} alt="" />
                </div>
              </div>
              )
            }) : <p>Loading. . . </p>}



          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

    </div>
    <Navbar />
    </>
  );
}

export default Header;
