import React from "react";
import './Article.scss';

import image1 from "../../../../assets/img/newspage/category/image1.jpg";

import {ReactComponent as Facebook} from "../../../../assets/img/newspage/newsdetailpage/facebook.svg";
import {ReactComponent as Linkedin} from "../../../../assets/img/newspage/newsdetailpage/linkedin.svg";
import {ReactComponent as Twitter} from "../../../../assets/img/newspage/newsdetailpage/twitter.svg";


const Article = () => {
  return (
    <section className="article">
      <div className="article__container container">
        <div className="article__imgwrapper">
          <img className="article__img" src={image1} alt="Article image"/>
        </div>

        <div className="article__info smallcontainer">
          <p className="article__text">
            Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio.
            Interdum aenean sit malesuada ornare sed gravida rhoncus, congue.
            Purus auctor nullam diam quis est hendrerit ac euismod.
          </p>
          <p className="article__text">
            At facilisi sapien posuere eget nunc senectus proin nullam.
            Tortor senectus in et sagittis, vitae diam cras dignissim.
            Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra,
            neque, fermentum. Vel nec rhoncus, non nunc, neque in massa.
            Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.
          </p>
          <p className="article__text">
            Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum
            feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis,
            porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus.
            In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit
            pharetra, nisi nunc, non.
          </p>


          <figure className="quotation__figure">
            <blockquote className="quotation__blockquote" cite="Courtney Alexander">
              <p className="quotation__blockquote-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Justo, amet lectus quam viverra mus lobortis fermentum amet, eu.
                Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non.
                Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.
              </p>
            </blockquote>
          </figure>

          <p className="article__text">
            Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis.
            Vitae mus blandit in neque amet non fringilla blandit:
          </p>

          <ul className="article__list">
            <li className="article__item">
              A fermentum in morbi pretium aliquam adipiscing donec tempus.
            </li>
            <li className="article__item">
              Vulputate placerat amet pulvinar lorem nisl.
            </li>
            <li className="article__item">
              Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
            </li>
            <li className="article__item">
              Etiam duis lobortis in fames ultrices commodo nibh.
            </li>
          </ul>

          <p className="article__text">
            Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo.
            Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus.
            Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros,
            purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus.
            Facilisi at porttitor volutpat natoque proin amet, nulla.
            Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.
          </p>

         <div className="article__share">
           <p className="article__share-text">
             Share:
           </p>

           <div className="metadescription__social">
             <a className="metadescription__social-facebook" href='#'>
               <Facebook/>
             </a>

             <a className="metadescription__social-linkedin" href='#'>
               <Linkedin/>
             </a>

             <a className="metadescription__social-twitter" href='#'>
               <Twitter/>
             </a>
           </div>

         </div>

        </div>


      </div>
    </section>
  )
};

export default Article