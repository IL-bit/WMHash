import React from 'react';
import Image from 'next/image';

const Section3 = () => {
  const section3Eng = {
    h2: 'Achievements and Reviews',
    items: [
      {
        p: {
          1: 'Blocks Mined',
        }
      },
      {
        p: {
          1: 'Join thousands',
          2: 'of players in',
          3: 'global rankings.'
        }
      },
      {
        p: {
          1: 'Regular Events',
          2: 'and Contests'
        }
      }
    ]
  }
  return (
    <section className="col-xxl-12 text-center" id="third">
        <h2>{section3Eng.h2}</h2>
        <div className="items">
          <div className="item item-1">
            <div className="text">
              <h4>{section3Eng.items[0].p[1]}</h4>
            </div>
          </div>
          <div className="item item-2">
            <div className="text">
              <h4>{section3Eng.items[1].p[1]}<br/>{section3Eng.items[1].p[2]}<br/>{section3Eng.items[1].p[3]}</h4>
            </div>
          </div>
          <div className="item item-3">
            <div className="text">
              <h4>{section3Eng.items[2].p[1]}<br/>{section3Eng.items[2].p[2]}</h4>
            </div>
          </div>
        </div>
    </section>
  )
}
export default Section3;