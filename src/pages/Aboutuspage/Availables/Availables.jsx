import React, {useState} from "react";
import './Availables.scss';
import Pagetitle from "../../../components/Pagetitle/Pagetitle";
import availableBg from "../../../assets/img/aboutuspage/available/available-bg.png";
import Vacancycard from "./Vacancycard/Vacancycard";
import Cta from "./Cta/Cta";
import OurSomething from "../../../components/OurSomething/OurSomething";

import {ReactComponent as Training} from "../../../assets/img/aboutuspage/available/training.svg";
import {ReactComponent as Growth} from "../../../assets/img/aboutuspage/available/growth.svg";
import {ReactComponent as Salary} from "../../../assets/img/aboutuspage/available/salary.svg";
import Subscribemodal from "../Subscribemodal/Subscribemodal";

const ourSomethingData =
  {
    title: 'Employee benefits',
    description: 'There’s always room for talent.',
    items: [
      {
        icon: <Training/>,
        subtitle: 'Training',
        subdescription: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.'
      },
      {
        icon: <Growth/>,
        subtitle: 'Professional Growth',
        subdescription: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.'
      },
      {
        icon: <Salary/>,
        subtitle: 'Growing Salary',
        subdescription: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.'
      }
    ]
  }

const dataVacancyCard = [
  {
    city: 'New York',
    time: 'Full Time',
    position: 'Heavy Equipment Operator',
    link: '#',
  },
  {
    city: 'San Francisco',
    time: 'Full Time',
    position: 'Financial Compliance Analyst',
    link: '#',
  },
  {
    city: 'New Jersey',
    time: 'Full Time',
    position: 'Project Manager - Buildings',
    link: '#',
  },
  {
    city: 'New York',
    time: 'Part Time',
    position: 'Environment Specialist',
    link: '#',
  },
  {
    city: 'New York',
    time: 'Full Time',
    position: 'Accountant',
    link: '#',
  },
]


const Availables = () => {

  const [isOpenSubscribeModal] = useState(false);

  return (
    <section className="availables">

      <Pagetitle
        description='Build your career with Createx Construction Bureau.'
        background={availableBg}
      />

      <div className="availables__container container">
        <div className="availables__wrapper">
          <div className="availables__vacancy">
            {dataVacancyCard.map((item) =>
              <Vacancycard item={item}/>
            )}
          </div>
          <Cta/>
        </div>

        <OurSomething data={ourSomethingData}/>
        <Subscribemodal/>



      </div>


      {isOpenSubscribeModal && (
        <div className="modal">
          <div className="modal__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit in maxime nostrum numquam odit perferendis, placeat quibusdam quos saepe totam? Alias blanditiis, cum dolore ducimus ea excepturi, facere nam nulla optio quas recusandae, unde voluptatem. A amet aperiam, aspernatur aut consequatur, dolorem eos eum eveniet exercitationem illum impedit incidunt ipsa iste iure modi nemo nisi nostrum nulla officiis possimus quaerat quasi quia quo quod rem tenetur voluptas. Aperiam assumenda aut dolor doloremque ea eaque eius error eum fuga hic illum inventore neque nihil nostrum odit placeat praesentium quae quas quasi quis rem reprehenderit, soluta suscipit tempora tenetur ut vitae voluptatibus!</p>
          </div>
        </div>
      )}

    </section>
  )
};

export default Availables