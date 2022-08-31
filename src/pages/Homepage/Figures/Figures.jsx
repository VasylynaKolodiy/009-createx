import React from "react";
import './Figures.scss';

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  // CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Figures = () => {
  
  return (
    <section className="figures">
      <div className="figures__container container">
        <h1 className="figures__title">
          Some facts and figures
        </h1>
        <div className="figures__circles">
          <div className="figures__block">
            <CircularProgressbar className="figures__circularprogressbar"
                                 value='90'
                                 text='98%'
                                 strokeWidth={6}
                                 styles={buildStyles({
                                   textColor: 'var(--color-gray-900)',
                                   pathColor: '#F89828',
                                   trailColor: '#fde0bf',
                                   strokeLinecap: "butt",
                                 })}
            />
            <p className="figures__label">Totally satisfied clients</p>
          </div>

          <div className="figures__block">
            <CircularProgressbar className="figures__circularprogressbar"
                                 value='75'
                                 text='20'
                                 strokeWidth={6}
                                 styles={buildStyles({
                                   textColor: 'var(--color-gray-900)',
                                   pathColor: '#F52F6E',
                                   trailColor: '#fcc1d4',
                                   strokeLinecap: "butt",
                                 })}
            />
            <p className="figures__label">Years of experience</p>
          </div>

          <div className="figures__block">
            <CircularProgressbar className="figures__circularprogressbar"
                                 value='80'
                                 text='9452'
                                 strokeWidth={6}
                                 styles={buildStyles({
                                   textColor: 'var(--color-gray-900)',
                                   pathColor: '#5A87FC',
                                   trailColor: '#cedbfe',
                                   strokeLinecap: "butt",
                                 })}
            />
            <p className="figures__label">Working hours spent</p>
          </div>

          <div className="figures__block">
            <CircularProgressbar className="figures__circularprogressbar"
                                 value='100'
                                 text='100%'
                                 strokeWidth={6}
                                 styles={buildStyles({
                                   textColor: 'var(--color-gray-900)',
                                   pathColor: '#03CEA4',
                                   trailColor: '#b3f0e4',
                                   strokeLinecap: "butt",
                                 })}
            />
            <p className="figures__label">Succeeded projects</p>
          </div>



        </div>
      </div> {/*figures__container*/}
    </section>
  )
};

export default Figures


