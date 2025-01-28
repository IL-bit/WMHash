"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Section5 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState([]);
  const lang = useSelector((state) => state.language);
    const section5Eng = {
        h2: {
            1: 'Frequently',
            2: 'Asked',
            3: 'Questions'
        },
        items: [
            {
                question: 'Do I need to install powerful software?',
                answer: "Everything operates through Telegram, so there's no need for a powerful computer or complex configurations. Just launch the bot and start mining!"
            },
            {
                question: 'How can I increase my mining efficiency?',
                answer: "Participate in game challenges and events, utilize boosts (Turbo, Supersonic, Nitrocore), and monitor your energy level. The more active you are in the game, the higher your potential token earnings."
            },
            {
                question: 'Are there any plans to allow tokens to be used outside of the game?',
                answer: "Currently, we are focusing on developing the in-game economy, but we are also working on features that will allow players more flexibility in managing their tokens in the future. Keep an eye on our roadmap for updates!"
            },
            {
                question: 'What should I do if I have a question or need help?',
                answer: "Use the in-built help system in the bot or ask a question in our official community. We strive to provide timely support to all players."
            }
        ]
    };
    const section5Rus = {
      h2: {
        1: 'Ответы на',
        2: 'популярные',
        3: 'вопросы'
      },
      items: [
        {
          question: 'Нужно ли мне устанавливать какое-либо дополнительное оборудование или специальное программное обеспечение?',
          answer: 'Все работает через Telegram, поэтому нет необходимости в мощном компьютере или сложных конфигурациях. Просто запустите бота и начните майнить!'
        },
        {
          question: 'Как я могу повысить эффективность майнинга?',
          answer: 'Участвуйте в игровых испытаниях и событиях, используйте усиления (Турбо, Сверхзвук, Нитрокор) и следите за уровнем своей энергии. Чем активнее вы участвуете в игре, тем выше ваш потенциальный доход в токенах.'
        },
        {
          question: 'Планируется ли разрешить использование жетонов вне игры?',
          answer: 'В настоящее время мы концентрируемся на развитии внутриигровой экономики, но также работаем над функциями, которые дадут игрокам большую гибкость в управлении своими токенами в будущем. Следите за обновлениями нашей дорожной карты!'
        },
        {
          question: 'Что мне делать, если у меня есть вопрос или мне нужна помощь?',
          answer: 'Воспользуйтесь встроенной системой помощи в боте или задайте вопрос в нашем официальном сообществе. Мы стремимся оказывать своевременную поддержку всем игрокам.'
        }
      ]
    };
    const itemsRef = useRef([]);
    const sectionRef = useRef(null);
    const section5 = lang === 'eng' ? section5Eng : section5Rus;
  
    useEffect(() => {
      const items = itemsRef.current;
      items.forEach((item, index) => {
        item.style.transform = 'translateY(100%)';
        item.style.opacity = 0;
      });
  
      const animation = () => {
        items.forEach((item, index) => {
          setTimeout(() => {
            item.style.transform = 'translateY(0)';
            item.style.opacity = 1;
            item.style.transition = 'all 0.5s ease-in-out';
          }, 200 + index * 200);
        });
      };
  
      const handleScroll = () => {
        if (sectionRef.current) {
          const sectionTop = sectionRef.current.offsetTop;
          const sectionHeight = sectionRef.current.offsetHeight;
          const windowScrollTop = window.scrollY;
          const windowHeight = window.innerHeight;
  
          if (windowScrollTop + windowHeight > sectionTop && windowScrollTop < sectionTop + sectionHeight) {
            animation();
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const handleOpen = (event) => {
      const currentItem = event.target.closest('.item');
      currentItem.classList.toggle('open');
    };
  return (
    <>
        <section ref={sectionRef} className="col-xxl-5 col-xl-4 col-lg-7 col-sm-12 col-12" id="fifth_1">
      <h2><span>{section5.h2[1]}</span><br/>{section5.h2[2]}<br/>{section5.h2[3]}</h2>
    </section>
    <section ref={sectionRef} className="col-xxl-7 col-xl-8 col-lg-5 col-sm-12 col-12" id="fifth_2">
      <div className="items">
        {section5.items.map((item, index) => (
          <div
            ref={(ref) => (itemsRef.current[index] = ref)}
            className={`item item-${index}`}
            key={index}
          >
            <button onClick={handleOpen} />
            <div className="text">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>

  )
}
export default Section5;