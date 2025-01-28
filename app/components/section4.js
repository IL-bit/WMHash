"use client";
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
const Section4 = () => {
    const lang = useSelector((state) => state.language);
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
    const section4Rus = {
        h2: 'Планы развития',
        p: 'Кратко о ближайших обновлениях:',
        plans: [
          {
            h3: 'Q1 – Запуск и масштабирование',
            p: 'Запуск бота, отладка функций (майнинг, энергия, задания), интеграция антибот-системы, платёжных сервисов, масштабирование серверов, локализация для разных стран, первые конкурсы и рекламные кампании.'
          },
          {
            h3: 'Q2 – Активный период майнинга',
            p: 'Продолжение геймифицированного майнинга (4–5 месяцев), регулярные игровые события, формирование крупного сообщества, доработка функционала (новые режимы, кэшбэки и т.д.), закрепление позиций на рынке.'
          },
          {
            h3: 'Q3 – Завершение майнинга и выход на биржи',
            p: 'Постепенное сворачивание PoW-фазы, листинг на биржах (DEX/CEX), частичная разблокировка (размещение) токенов, разработка нового продукта на базе WildMinerHash, расширение возможностей для держателей токенов.'
          },
          {
            h3: 'Q4 – Новые горизонты',
            p: 'Детальная информация скоро будет раскрыта. Предполагаются важные апдейты экосистемы и новые сценарии участия для игроков и инвесторов.'
          }
        ]
      };
    const plansRef = useRef(null);
    const section4 = lang === 'eng' ? section4Eng : section4Rus;
  useEffect(() => {
    const plans = plansRef.current;
    plans.style.opacity = 0;

    const animation = () => {
      plans.style.opacity = 1;
      plans.style.transition = 'all 1s ease-in-out';
    };

    const handleScroll = () => {
      if (plansRef.current) {
        const plansTop = plansRef.current.offsetTop;
        const plansHeight = plansRef.current.offsetHeight;
        const windowScrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        if (windowScrollTop + windowHeight > plansTop && windowScrollTop < plansTop + plansHeight) {
          animation();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-12 text-center" id="fourth">
        <h2>{section4.h2}</h2>
      <p>{section4.p}</p>
      <div className="plans" ref={plansRef}>
        <div className="left_bar"></div>
        <div className="plan">
          <div className="case"></div>
          <div className="text">
            <h3>{section4.plans[0].h3}</h3>
            <p>{section4.plans[0].p}</p>
          </div>
        </div>
        <div className="plan disactiv">
          <div className="case"></div>
          <div className="text">
            <h3>{section4.plans[1].h3}</h3>
            <p>{section4.plans[1].p}</p>
          </div>
        </div>
        <div className="plan disactiv">
          <div className="case"></div>
          <div className="text">
            <h3>{section4.plans[2].h3}</h3>
            <p>{section4.plans[2].p}</p>
          </div>
        </div>
        <div className="plan disactiv">
          <div className="case"></div>
          <div className="text">
            <h3>{section4.plans[3].h3}</h3>
            <p>{section4.plans[3].p}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Section4;