import React from 'react';

const Section4 = () => {
    const section4Eng = {
        h2: 'Development Plans',
        p: 'Upcoming Updates Brief',
        plans: [
            {
                h3: 'Q1 – Launch and Scaling',
                p: 'Initiation of the bot, debugging of features (mining, energy, tasks), integration of anti-bot systems, payment services, server scaling, localization for different countries, initial contests, and advertising campaigns.'
            },
            {
                h3: 'Q2 – Active Mining Period',
                p: 'Continuation of gamified mining (4–5 months), regular gaming events, building a large community, enhancements to functionality (new modes, cashbacks, etc.), consolidating market presence.'
            },
            {
                h3: 'Q3 – Conclusion of Mining and Entry to Exchanges',
                p: 'Gradual winding down of the PoW phase, listings on exchanges (DEX/CEX), partial token unlocking (placement), development of a new product based on WildMinerHash, expanding options for token holders.'
            },
            {
                h3: 'Q4 – New Horizons',
                p: 'Detailed information will be disclosed soon. Important updates to the ecosystem and new participation scenarios for players and investors are anticipated.'
            }
        ]
    };
  return (
    <section className="col-xxl-12 text-center" id="fourth">
        <h2>{section4Eng.h2}</h2>
        <p>{section4Eng.p}</p>
        <div className="plans">
            <div className="left_bar"></div>
            <div className="plan">
                <div className="case"></div>
                <div className="text">
                    <h3>{section4Eng.plans[0].h3}</h3>
                    <p>{section4Eng.plans[0].p}</p>
                </div>
            </div>
            <div className="plan disactiv">
                <div className="case"></div>
                <div className="text">
                    <h3>{section4Eng.plans[1].h3}</h3>
                    <p>{section4Eng.plans[1].p}</p>
                </div>
            </div>
            <div className="plan disactiv">
                <div className="case"></div>
                <div className="text">
                    <h3>{section4Eng.plans[2].h3}</h3>
                    <p>{section4Eng.plans[2].p}</p>
                </div>
            </div>
            <div className="plan disactiv">
                <div className="case"></div>
                <div className="text">
                    <h3>{section4Eng.plans[3].h3}</h3>
                    <p>{section4Eng.plans[3].p}</p>
                </div>
            </div>

        </div>
    </section>
  )
}
export default Section4;