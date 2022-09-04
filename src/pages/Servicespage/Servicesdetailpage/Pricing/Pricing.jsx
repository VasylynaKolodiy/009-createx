import React from "react";
import './Pricing.scss';

import {ReactComponent as LineDone} from '../../../../assets/img/servicespage/pricing/line.svg';
import Button from "../../../../components/Button/Button";


const tableRows = [
  {
    name: 'Installation plan',
    basic: 'V',
    standard: 'V',
    business: 'V',
  },
  {
    name: 'Planning solutions (2-3 options)',
    basic: 'V',
    standard: 'V',
    business: 'V',
  },
  {
    name: 'Lighting plan',
    basic: 'V',
    standard: 'V',
    business: 'V',
  },
  {
    name: 'Flooring plan',
    basic: 'V',
    standard: 'V',
    business: 'V',
  },
  {
    name: 'Heating floor laying scheme',
    basic: 'V',
    standard: 'V',
    business: 'V',
  },
  {
    name: 'Air conditioner zones layout',
    basic: 'V',
    standard: 'V',
    business: 'V',
  },
  {
    name: '3D visualization of all rooms',
    basic: 'simplified',
    standard: 'V',
    business: 'V',
  },
  {
    name: 'Visualization of each room (3-4 angles)',
    basic: '',
    standard: '',
    business: 'V',
  },
  {
    name: 'Terms',
    basic: '10 days',
    standard: '20 days',
    business: '30 days',
  },

  ]

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing__container container">
        <h1 className="pricing__title">
          Pricing
        </h1>
        <p className="pricing__description">
          We offer you three categories of construction.
        </p>

        
        <div className="pricing__table">

          <div className="pricing__head">
            <div className="pricing__cell pricing__items">
              Items
            </div>

            <div className="pricing__cell pricing__basic">
              <div className="pricing__head-top">
                Basic
              </div>
              <div className="pricing__head-bottom">
                $20 per m2
              </div>
            </div>

            <div className="pricing__cell pricing__standard">
              <div className="pricing__head-top">
                STANDARD
              </div>
              <div className="pricing__head-bottom">
                $30 per m2
              </div>
            </div>

            <div className="pricing__cell pricing__business">
              <div className="pricing__head-top">
                BUSINESS
              </div>
              <div className="pricing__head-bottom">
                $40 per m2
              </div>
            </div>
          </div>



          <div className="pricing__body">
            {tableRows.map((cell, i) =>



            <div className="pricing__row" key={i}>
              <div className="pricing__cell pricing__items">{cell.name}</div>
              <div className="pricing__cell pricing__basic">
                {cell.basic === 'V' ? <LineDone/> : cell.basic}
              </div>
              <div className="pricing__cell pricing__standard">
                {cell.standard === 'V' ? <LineDone/> : cell.basic}
              </div>
              <div className="pricing__cell pricing__business">
                {cell.business === 'V' ? <LineDone/> : cell.basic}
              </div>
            </div>
            )}



            <div className="pricing__row">
              <div className="pricing__cell pricing__items">
              </div>
              <div className="pricing__cell pricing__basic">
                <Button
                  title = 'Send request'
                  type = 'submit'
                  color = 'inverse'
                  length = 'small'
                />
              </div>
              <div className="pricing__cell pricing__standard">
                <Button
                  title = 'Send request'
                  type = 'submit'
                  color = 'inverse'
                  length = 'small'
                />
              </div>
              <div className="pricing__cell pricing__business">
                <Button
                  title = 'Send request'
                  type = 'submit'
                  color = 'inverse'
                  length = 'small'
                />
              </div>
            </div>



          </div>

        </div>





      </div> {/*pricing__container*/}
    </section>
  )
};
export default Pricing


