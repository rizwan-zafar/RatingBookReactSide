import React from "react";
import { insertContactUsMessage } from "../servieces"
import Testimonial from "../Components/Testimonial";

const submitForm = () => {
  console.log("working")
}

function ContactUs() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  async function submitHandler(e) {
    e.preventDefault()
    if (name === "") {
      alert("Enter Your Name")
      return false
    } else if (email === "") {
      alert("Enter email")
      return false
    } else if (message === "") {
      alert("Enter Message")
      return false
    }
    else {
      const data = {
        name: name,
        email: email,
        phone: phone,
        message: message
      }
    
    let submittedData = await insertContactUsMessage(data)
    if (submittedData) {
      setName('')
      setEmail('')
      setPhone("")
      setMessage("")
    }
  }



  }





  return (
    <div>
      <div className="text-center" style={{ marginTop: "10vh", marginBottom: "10vh" }}>
        <h1><strong>FEEL FREE TO CONTACT</strong></h1>
      </div>
      <section className="contact_section layout_padding-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="offset-lg-2 col-md-10 offset-md-1">
              <div className="heading_container">
                <hr />
                <h2>
                  Request A call back
                </h2>
              </div>
            </div>
          </div>

          <div className="layout_padding2-top">
            <div className="row">
              <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-1">
                <form onSubmit={submitHandler}>
                  <div className="contact_form-container">
                    <div>
                      <div>
                        <input type="text" placeholder="Full Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                      </div>
                      <div>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                      </div>
                      <div>
                        <input type="text" placeholder="Phone Number(Optional)" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                      </div>
                      <div>
                        <input type="text" className="message_input" placeholder="Message" value={message} onChange={(e) => { setMessage(e.target.value) }} />
                      </div>
                      <div>
                        <button type="submit" >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-4 px-0">
                <div className="map_container">
                  <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="300" frameborder="0" style={{ border: 0, width: "100%", height: "100%" }} allowfullscreen title="myFrame"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />

    </div>
  );
}


export default ContactUs;
