import React from "react";
import './Mediatabs.scss';

import { Link } from "react-router-dom";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {ReactComponent as Allprojects} from '../../../assets/img/homepage/services/allprojects.svg';
import {ReactComponent as Construction} from '../../../assets/img/homepage/services/construction.svg';
import {ReactComponent as Development} from '../../../assets/img/homepage/services/project.svg';
import {ReactComponent as Design} from '../../../assets/img/homepage/services/design.svg';
import {ReactComponent as Repairs} from '../../../assets/img/homepage/services/repairs.svg';

import Portfolioitem from "../../Homepage/Portfolio/Portfolioitem/Portfolioitem";
import image1 from "../../../assets/img/workpage/mediatabs/image1.jpg";
import image2 from "../../../assets/img/workpage/mediatabs/image2.jpg";
import image3 from "../../../assets/img/workpage/mediatabs/image3.jpg";
import image4 from "../../../assets/img/workpage/mediatabs/image4.jpg";
import image5 from "../../../assets/img/workpage/mediatabs/image5.jpg";
import image6 from "../../../assets/img/workpage/mediatabs/image6.jpg";
import image7 from "../../../assets/img/workpage/mediatabs/image7.jpg";
import image8 from "../../../assets/img/workpage/mediatabs/image8.jpg";
import image9 from "../../../assets/img/workpage/mediatabs/image9.jpg";
import {ReactComponent as LoadBtn} from '../../../assets/img/workpage/mediatabs/load.svg';

const tab2 = [
  {
    link: '/work/cubes-building',
    image: image1,
    title: 'Cubes Building',
    description: 'Business Centers',
    linkbutton: '/work/cubes-building',
  },
  {
    link: '/work/modern-cottage',
    image: image2,
    title: 'Modern Cottage',
    description: 'Private houses',
    linkbutton: '/work/modern-cottage',
  },
]

const tab3 = [
  {
    link: '/work/luxury-beach-house',
    image: image3,
    title: 'Luxury Beach House',
    description: 'Private houses',
    linkbutton: '/work/luxury-beach-house',
  },

  {
    link: '/work/modern-double-bedroom',
    image: image4,
    title: 'Modern Double Bedroom',
    description: 'Apartments & flats',
    linkbutton: '/work/modern-double-bedroom',
  },
  {
    link: '/work/kids-bedroom-with-decorations',
    image: image5,
    title: 'Kids Bedroom With Decorations',
    description: 'Apartments & flats',
    linkbutton: '/work/kids-bedroom-with-decorations',
  },
]

const tab4 = [
  {
    link: '/work/the-pencil-building',
    image: image6,
    title: 'The Pencil Building',
    description: 'Stores & Malls',
    linkbutton: '/work/the-pencil-building',
  },
]


const tab5 = [
  {
    link: '/work/red-finger-building',
    image: image7,
    title: 'Red Finger Building',
    description: 'Business Centers',
    linkbutton: '/work/red-finger-building',
  },
  {
    link: '/work/scandinavian-style-interior',
    image: image8,
    title: 'Scandinavian Style Interior',
    description: 'Private houses',
    linkbutton: '/work/scandinavian-style-interior',
  },
  {
    link: '/work/brown-and-gray-painted-house',
    image: image9,
    title: 'Brown and Gray Painted House',
    description: 'Private houses',
    linkbutton: '/work/brown-and-gray-painted-house',
  },
]


const data = [
  {
    link: '#',
    icon: <Allprojects/>,
    description: 'All projects',
  },
  {
    link: '#',
    icon: <Construction/>,
    description: 'Construction',
  },
  {
    link: '#',
    icon: <Development/>,
    description: 'Project Development',
  },
  {
    link: '#',
    icon: <Design/>,
    description: 'Interior Design',
  },
  {
    link: '#',
    icon: <Repairs/>,
    description: 'Repairs',
  }
]


const Mediatabs = () => {
  return (
    <section className="mediatabs">
      <div className="mediatabs__container container">

        <Tabs className="mediatabs__tabs">
          <TabList className="mediatabs__list">
            {data.map((item, i) =>
              <Tab key={i}>
                <div className="mediatabs__item">
                  <div className="mediatabs__group">
                    {item.icon}
                    <p className="mediatabs__description">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Tab>
            )}
          </TabList>


          <TabPanel>
            {[...tab2, ...tab3, ...tab4, ...tab5].map((item) =>
              <Portfolioitem item={item}/>
            )}
          </TabPanel>

          <TabPanel>
            {tab2.map((item) =>
              <Portfolioitem item={item}/>
            )}
          </TabPanel>

          <TabPanel>
            {tab3.map((item) =>
              <Portfolioitem item={item}/>
            )}
          </TabPanel>

          <TabPanel>
            {tab4.map((item) =>
              <Portfolioitem item={item}/>
            )}
          </TabPanel>

          <TabPanel>
            {tab5.map((item) =>
              <Portfolioitem item={item}/>
            )}
          </TabPanel>
        </Tabs>


        <Link className="mediatabs__load" to="#">
          <LoadBtn/>
          Load more
        </Link>
      </div>{/*mediatabs__container*/}
    </section>
  )
};

export default Mediatabs


