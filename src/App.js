import Header from './Components/Header';
import MainPage from './Pages/MainPage';
import Testimonial from './Pages/TestimonialPage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Help from './Pages/Help';
import PageNotFound from './Pages/PageNotFound';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import BooksContext from "./ContextApis/allRatedBooksContext"

function App() {
  return (

    <BooksContext>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/testimonials" element={<Testimonial />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/help" element={<Help />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </BooksContext>

  );
}

export default App;
