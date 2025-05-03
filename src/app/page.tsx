import About from "@/components/About/About";
import Appoinment from "@/components/Appoinment/Appoinment";
import Counter from "@/components/Counter/Counter";
import Features from "@/components/Features/Features";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Services from "@/components/Services/Services";
import BookList from "@/components/book/book";
import Gallery from "@/components/gallery/gallery";
import Testimonial from "@/components/Testimonial/Testimonial";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {

  return (
    <div className="main mt-[10vh]">
      <HeroBanner />
      <Features />
      <About />
      <Testimonial />
      <Counter/>
      <Services />
      <Gallery />
     
      <Appoinment />
    </div>
  );
}
