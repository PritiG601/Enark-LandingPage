import './App.css';
import StickyHeader from './component/StickyHeader';
import Home from './component/Home';
import Webinarfor from './component/Webinarfor';
import Whatlearn from './component/Whatlearn'
import Register from './component/Register'
import Reviews from './component/Reviews';
import Questionnaire from './component/Questionnaire';
import Testimonial from './component/Testimonial';
import FAQ from './component/FAQ';
import Footer from './component/Footer';
import StickyFooter from './component/StickyFooter';

function App() {
  return (
   <div>
      <StickyHeader />
      <Home />
      <Webinarfor />
      <Whatlearn />
      <Register />
      <Reviews />
      <Questionnaire />
      <Testimonial />
      <FAQ />
      <Footer />
      <StickyFooter />
   </div>
  )
}

export default App;
