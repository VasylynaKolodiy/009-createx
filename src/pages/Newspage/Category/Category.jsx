import React from "react";
import './Category.scss';
import {Link} from "react-router-dom";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Newsitem from "../../Homepage/News/Newsitem/Newsitem";

import image1 from "../../../assets/img/newspage/category/image1.jpg";
import image2 from "../../../assets/img/newspage/category/image2.jpg";
import image3 from "../../../assets/img/newspage/category/image3.jpg";
import image4 from "../../../assets/img/newspage/category/image4.jpg";
import image5 from "../../../assets/img/newspage/category/image5.jpg";
import image6 from "../../../assets/img/newspage/category/image6.jpg";


const tab2 = [
  {
    image: image1,
    link: "/news/how-to-build-climate-change-resilient-infrastructure",
    title: 'How to Build Climate Change-Resilient Infrastructure',
    category: 'Industry News',
    linkCategory: "#",
    data: 'June 24, 2020',
    linkData: "#",
    comments: '4 comments',
    linkComments: "#",
    description: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...'
  },

  {
    image: image2,
    link: "/news/how-construction-can-help-itself",
    title: 'How Construction Can Help Itself',
    category: 'Innovation',
    linkCategory: "#",
    data: 'June 12, 2020',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus...'
  },
  {
    image: image3,
    link: "/news/the-difference-between-a-digger-and-an-excavator",
    title: 'The Difference Between a Digger and an Excavator',
    category: 'Expert Tips',
    linkCategory: "#",
    data: 'May 16, 2020',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Cras est nisi purus velit facilisi vitae, dolor. Lorem scelerisque integer duis et nulla lobortis cursus. Viverra erat sollicitudin praesent viverra...'
  },
  {
    image: image4,
    link: "/news/building-construction-hand-tools",
    title: 'Building Construction Hand Tools',
    category: 'Expert Tips',
    linkCategory: "#",
    data: 'February 25, 2020',
    linkData: "#",
    comments: '1 comment',
    linkComments: "#",
    description: 'Tellus quis aliquet volutpat nunc pulvinar donec sed sapien. Vitae elit id dolor, tristique massa. Fames lobortis orci rutrum bibendum integer...'
  },
  {
    image: image5,
    link: "/news/top-10-construction-trends",
    title: 'Top 10 Construction Trends',
    category: 'Industry News',
    linkCategory: "#",
    data: 'January 14, 2020',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Dignissim sed enim, eleifend morbi condimentum. Congue id quis vulputate dignissim eget. Ac ullamcorper nunc habitasse enim interdum platea...'
  },
  {
    image: image6,
    link: "/news/types-of-flooring-materials",
    title: 'Types of Flooring Materials',
    category: 'Company News',
    linkCategory: "#",
    data: 'December 1, 2019',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Maecenas donec lacinia nunc, quam sit magnis mauris. Neque bibendum et mauris, aenean. Vel arcu amet in sem parturient  integer duis et nulla...'
  },
]



const tab3 = [

  {
    image: image2,
    link: "/news/how-construction-can-help-itself",
    title: 'How Construction Can Help Itself',
    category: 'Innovation',
    linkCategory: "#",
    data: 'June 12, 2020',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus...'
  },
  {
    image: image3,
    link: "/news/the-difference-between-a-digger-and-an-excavator",
    title: 'The Difference Between a Digger and an Excavator',
    category: 'Expert Tips',
    linkCategory: "#",
    data: 'May 16, 2020',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Cras est nisi purus velit facilisi vitae, dolor. Lorem scelerisque integer duis et nulla lobortis cursus. Viverra erat sollicitudin praesent viverra...'
  },
  {
    image: image4,
    link: "/news/building-construction-hand-tools",
    title: 'Building Construction Hand Tools',
    category: 'Expert Tips',
    linkCategory: "#",
    data: 'February 25, 2020',
    linkData: "#",
    comments: '1 comment',
    linkComments: "#",
    description: 'Tellus quis aliquet volutpat nunc pulvinar donec sed sapien. Vitae elit id dolor, tristique massa. Fames lobortis orci rutrum bibendum integer...'
  },
  {
    image: image5,
    link: "/news/top-10-construction-trends",
    title: 'Top 10 Construction Trends',
    category: 'Industry News',
    linkCategory: "#",
    data: 'January 14, 2020',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Dignissim sed enim, eleifend morbi condimentum. Congue id quis vulputate dignissim eget. Ac ullamcorper nunc habitasse enim interdum platea...'
  },
  {
    image: image6,
    link: "/news/types-of-flooring-materials",
    title: 'Types of Flooring Materials',
    category: 'Company News',
    linkCategory: "#",
    data: 'December 1, 2019',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Maecenas donec lacinia nunc, quam sit magnis mauris. Neque bibendum et mauris, aenean. Vel arcu amet in sem parturient  integer duis et nulla...'
  },
]



const tab4 = [

  {
    image: image3,
    link: "/news/the-difference-between-a-digger-and-an-excavator",
    title: 'The Difference Between a Digger and an Excavator',
    category: 'Expert Tips',
    linkCategory: "#",
    data: 'May 16, 2020',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Cras est nisi purus velit facilisi vitae, dolor. Lorem scelerisque integer duis et nulla lobortis cursus. Viverra erat sollicitudin praesent viverra...'
  },
  {
    image: image4,
    link: "/news/building-construction-hand-tools",
    title: 'Building Construction Hand Tools',
    category: 'Expert Tips',
    linkCategory: "#",
    data: 'February 25, 2020',
    linkData: "#",
    comments: '1 comment',
    linkComments: "#",
    description: 'Tellus quis aliquet volutpat nunc pulvinar donec sed sapien. Vitae elit id dolor, tristique massa. Fames lobortis orci rutrum bibendum integer...'
  },
  {
    image: image5,
    link: "/news/top-10-construction-trends",
    title: 'Top 10 Construction Trends',
    category: 'Industry News',
    linkCategory: "#",
    data: 'January 14, 2020',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Dignissim sed enim, eleifend morbi condimentum. Congue id quis vulputate dignissim eget. Ac ullamcorper nunc habitasse enim interdum platea...'
  },
  {
    image: image6,
    link: "/news/types-of-flooring-materials",
    title: 'Types of Flooring Materials',
    category: 'Company News',
    linkCategory: "#",
    data: 'December 1, 2019',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Maecenas donec lacinia nunc, quam sit magnis mauris. Neque bibendum et mauris, aenean. Vel arcu amet in sem parturient  integer duis et nulla...'
  },
]



const tab5 = [
  {
    image: image4,
    link: "/news/building-construction-hand-tools",
    title: 'Building Construction Hand Tools',
    category: 'Expert Tips',
    linkCategory: "#",
    data: 'February 25, 2020',
    linkData: "#",
    comments: '1 comment',
    linkComments: "#",
    description: 'Tellus quis aliquet volutpat nunc pulvinar donec sed sapien. Vitae elit id dolor, tristique massa. Fames lobortis orci rutrum bibendum integer...'
  },
  {
    image: image5,
    link: "/news/top-10-construction-trends",
    title: 'Top 10 Construction Trends',
    category: 'Industry News',
    linkCategory: "#",
    data: 'January 14, 2020',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Dignissim sed enim, eleifend morbi condimentum. Congue id quis vulputate dignissim eget. Ac ullamcorper nunc habitasse enim interdum platea...'
  },
  {
    image: image6,
    link: "/news/types-of-flooring-materials",
    title: 'Types of Flooring Materials',
    category: 'Company News',
    linkCategory: "#",
    data: 'December 1, 2019',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Maecenas donec lacinia nunc, quam sit magnis mauris. Neque bibendum et mauris, aenean. Vel arcu amet in sem parturient  integer duis et nulla...'
  },
]


const tab6 = [
  {
    image: image5,
    link: "/news/top-10-construction-trends",
    title: 'Top 10 Construction Trends',
    category: 'Industry News',
    linkCategory: "#",
    data: 'January 14, 2020',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Dignissim sed enim, eleifend morbi condimentum. Congue id quis vulputate dignissim eget. Ac ullamcorper nunc habitasse enim interdum platea...'
  },
  {
    image: image6,
    link: "/news/types-of-flooring-materials",
    title: 'Types of Flooring Materials',
    category: 'Company News',
    linkCategory: "#",
    data: 'December 1, 2019',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: 'Maecenas donec lacinia nunc, quam sit magnis mauris. Neque bibendum et mauris, aenean. Vel arcu amet in sem parturient  integer duis et nulla...'
  },
]


//const pages = document.getElementById('pagination');


const data = [
  {name: 'All News',},
  {name: 'Company News',},
  {name: 'Innovation',},
  {name: 'Industry News',},
  {name: 'Expert Tips',},
  {name: 'Marketing',},
]

const Category = () => {
  return (
    <section className="category">
      <div className="category__container container">
        <h1 className="category__title">
          Categories
        </h1>

        <Tabs className="category__tabs">
          <TabList className="category__list">
            {data.map((item, i) =>
              <Tab key={i}>
                <div className="category__item">
                  <p className="category__name">
                    {item.name}
                  </p>
                </div>
              </Tab>
            )}
          </TabList>


          <TabPanel>
            {[...tab2, ...tab3, ...tab4, ...tab5, ...tab6].map((item) =>
              <Newsitem item={item}/>
            )}
          </TabPanel>

          <TabPanel>
            {tab2.map((item, i) =>
            (i < 6) && (<Newsitem item={item}/>)
            )}

            {/*{(tab2.length < 6) && (pages.style.visibility='hidden')}*/}

          </TabPanel>


          <TabPanel>
            {tab3.map((item) =>
              <Newsitem item={item}/>
            )}
          </TabPanel>

          <TabPanel>
            {tab4.map((item) =>
              <Newsitem item={item}/>
            )}
          </TabPanel>

          <TabPanel>
            {tab5.map((item) =>
              <Newsitem item={item}/>
            )}
          </TabPanel>

          <TabPanel>
            {tab6.map((item) =>
              <Newsitem item={item}/>
            )}
          </TabPanel>
        </Tabs>

        <div className="category__pages" id='pagination'>
          <Link className="category__pages-number active" to='#'>1</Link>
          <Link className="category__pages-number" to='#'>2</Link>
          <Link className="category__pages-number" to='#'>3</Link>
          <Link className="category__pages-number" to='#'>4</Link>
        </div>


      </div>
    </section>
  )
};

export default Category