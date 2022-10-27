import Testimonial from "../Components/Testimonial";
function AboutUs() {
  return (
    <div>


      {/* WHO WE ARE */}
      <div className="container text-center" style={{ marginTop: "10vh", marginBottom: "10vh" }}>
        <div className="text-center" style={{ marginBottom: "10vh" }}>
          <h1><strong>WHO WE ARE</strong></h1>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-md-6">
            <img className="img-fluid" src="https://subitis-solutions.com/wp-content/uploads/2021/02/who-we-are.png" alt="" />
          </div>
          <div className="col-sm-12 col-md-6 col-md-6 text-justify">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>

        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="container text-center" style={{ marginTop: "10vh", marginBottom: "10vh" }}>
        <div className="text-center" style={{ marginBottom: "10vh" }}>
          <h1><strong>WHAT WE DO</strong></h1>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-md-12 text-justify">

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          </div>
          <div className="col-sm-12 col-md-12 col-md-12 ">
            <img className="img-fluid" src="http://www.philandreoudigital.com/assets/wwd-row-one-image.png" alt="" />
          </div>

        </div>
      </div>

      <Testimonial />

    </div>
  );
}

export default AboutUs;
