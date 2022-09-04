import React from "react";
import './Construction.scss';
import Button from "../../../components/Button/Button";
import imageConstruction from "../../../assets/img/servicespage/construction/image1.jpg";
import imageDevelopment from "../../../assets/img/servicespage/construction/image2.jpg";
import imageDesign from "../../../assets/img/servicespage/construction/image3.jpg";
import imageRepairs from "../../../assets/img/servicespage/construction/image4.jpg";

const data = [
  {
    imageUrl: imageConstruction,
    title: 'Construction',
    description: 'Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum. ',
    buttonLink: '/services/construction',
  },
  {
    imageUrl: imageDevelopment,
    title: 'Project Development',
    description: 'Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget. ',
    buttonLink: '/services/project-development',
  },
  {
    imageUrl: imageDesign,
    title: 'Interior Design',
    description: 'Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. ',
    buttonLink: '/services/interior-design',
  },
  {
    imageUrl: imageRepairs,
    title: 'Repairs',
    description: 'Facilisis cursus feugiat sit pulvinar amet. Ac facilisi dictum commodo, tortor gravida pretium, orci. Nunc sit sollicitudin id egestas mattis. Turpis viverra nec urna ultrices urna. ',
    buttonLink: '/services/repairs',
  },
]
const Construction = () => {
  return (
    <section className="construction">
      <div className="construction__container container">
        <ul className="construction__list">
          {data.map((item, i) =>
          <li className="construction__item" key={i}>
            <div className="construction__item-imgwrapper">
              <img className="construction__item-img" src={item.imageUrl} alt="Image"/>
            </div>
            <div className="construction__item-info">
              <h2 className="construction__item-title">
                {item.title}
              </h2>
              <p className="construction__item-description">
                {item.description}
              </p>
              <Button
                title = 'Learn more'
                type = 'button'
                color = 'inverse'
                length = 'regular'
                link = {item.buttonLink}
              />
            </div>
          </li>
          )}
        </ul>
      </div> {/*construction__container*/}
    </section>
  )
};

export default Construction


