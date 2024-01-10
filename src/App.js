import './App.css';
import Card from "./card";
import Port from "./portfolio";
import Box from "./box";
import htmlcss from "./pngwing.com.png";
import html3 from "./html5-logo-31816.png";
import impact from "./impact.png";
import net from "./net.png";
import foot from "./foot.png";
import boot from "./boot.png";
import collage from "./collage.png"
import tour from "./tour.png";


function App() {

  return (

    <div>
      <div>
        <Port />

        
        <div className='edu' >
          <Card year="Jun 2017-Apr 2018" study="SSLC" about="I scored 72% on the secondary school leaving certificate exam. studied in Government boys heigher secondary school in kadathur, Dharmapuri(dt)-635303,Tamil nadu." />
          <Card year="Mar 2019-Apr 2020" study="Higher Secondary " about="I scored 58% on the higher secondary board exam. And I am very much interested in computer science.Acquired practical knowledge through various training and projects." />
          <Card year="Jun 2020-May 2022" study="Diploma Engeneering" about="I completed Electrical and Electonics Diploma Engeneering with 79% in Government polytehnic collage in kadathur,Dharmapuri(dt)-635303,Tamil Nadu, India." />
        </div>
        <h1 className='pro' id="p4">PROJECTS</h1>
        <div className='project'>
          <Box photo={impact} link="https://shajithdev.github.io/impact_site/" image={html3} head="Impact-site" para="Created a responsive and visually appealing travel website using HTML, CSS and javascript .Designed to provide users with an immersive experience and easy navigation." />
          <Box photo={net} link="https://shajithdev.github.io/Netfilex-clone/" image={htmlcss} head="Netflix-clone" para="Developed a responsive front-end clone of the popular streaming platform Netflix using HTML and CSS to replicate its user interface and functionality." />
          <Box photo={boot} link="https://shajithdev.github.io/Bootstrap-website/" image={htmlcss} head="Bootstrap-website" para="A Bootstrap education website is a sleek and user-friendly online platform designed to provide seamless access to educational resources." />
          <Box photo={collage} image={htmlcss} head="Collage-website" para="Created a responsive and visually appealing collage website using HTML and CSS.Designed to provide users with an immersive experience and easy navigation." />
          <Box photo={foot} link="https://shajithdev.github.io/FOOTBALLPLAYER/" image={htmlcss} head="Fooball-Goats" para="Created a responsive and visually appealing football goats website using HTML and CSS.Designed to provide users with an immersive experience and easy navigation." />
          <Box photo={tour} image={htmlcss} head="Tourism-website" para="Created a responsive and visually appealing travel website using HTML and CSS.Designed to provide users with an immersive experience and easy navigation." />
        </div>
      </div>
    </div>

  )

}

export default App;