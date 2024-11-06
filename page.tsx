import FavColor from "./components/favColor";
import Galery from "./components/galery";
import Hero from "./components/hero";
import Informasi from "./components/informasi";
import ContactForm from "./components/quiz";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import Skill from "./components/skill";
import "./insho-style.css";

export default function MyApp(){
  return(
    <section>
      <Hero/>
      <RiwayatPendidikan/>
    <RiwayatPekerjaan/>
    <Skill/>
    <Informasi/>
    <Galery/>
    
    <FavColor/>
  
    <ContactForm/>

    </section>
  );
}