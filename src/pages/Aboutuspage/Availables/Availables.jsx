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
import Modal from "./Modal/Modal";
import Input from "../../../components/Input/Input";
import Textarea from "../../../components/Textarea/Textarea";

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

  const [isOpenSubscribeModal, setIsOpenSubscribeModal] = useState(false);
  const [isOpenCVModal, setIsOpenCVModal] = useState(false);

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
              <Vacancycard item={item}
                           isOpenCVModal={isOpenCVModal}
                           setIsOpenCVModal={setIsOpenCVModal}
              />
            )}
          </div>
          <Cta
            isOpenSubscribeModal={isOpenSubscribeModal}
            setIsOpenSubscribeModal={setIsOpenSubscribeModal}
            isOpenCVModal={isOpenCVModal}
            setIsOpenCVModal={setIsOpenCVModal}
          />
        </div>
        <OurSomething data={ourSomethingData}/>
      </div>


      {isOpenSubscribeModal && (
        <Modal
          close={() => setIsOpenSubscribeModal(false)}
          title = "Subscribe to our newsletter"
        >
          <Input
            id="subscribemodal__input-name"
            placeholder="Your name"
            type="text"
            length="default"
            color="light"
            label="Name*"
          />

          <Input
            id="subscribemodal__input-email"
            placeholder="Your working email"
            type="email"
            length="default"
            color="light"
            label="Email*"
          />
        </Modal>
      )}


      {isOpenCVModal && (
        <Modal
          close={() => setIsOpenCVModal(false)}
          title = "Send your CV"
        >
          <Input
            id="cvmodal__input-name"
            placeholder="Your name"
            type="text"
            length="default"
            color="light"
            label="Name*"
          />

          <Input
            id="cvmodal__input-location"
            placeholder="Choose your location"
            type="text"
            length="default"
            color="light"
            label="Location*"
          />

          <Input
            id="cvmodal__input-phone"
            placeholder="Your phone number"
            type="tel"
            length="default"
            color="light"
            label="Phone*"
          />

          <Input
            id="cvmodal__input-email"
            placeholder="Your working email"
            type="email"
            length="default"
            color="light"
            label="Email*"
          />

          <Textarea
            id="cvmodal__textarea"
            placeholder="Your covering letter"
            length="default"
            color="light"
            rows="3"
            label="Сovering letter"
          />

          {<div className="modal__file">
            <label className="modal__file-label" htmlFor="cv">Attach your CV*</label>
            <input className="modal__file-input" type="file" id="cv" name="cv" accept="image/png, image/jpeg"/>
          </div>}
        </Modal>
      )}
    </section>
  )
};

export default Availables