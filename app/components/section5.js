"use client";
import React, { useState, useEffect } from 'react';

const Section5 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [itemsVisible, setItemsVisible] = useState([]);
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
    useEffect(() => {
        const handleScroll = () => {
          const fifth2 = document.getElementById('fifth_2');
          const rect = fifth2.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            setIsVisible(true);
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    useEffect(() => {
        if (isVisible) {
          const intervalId = setInterval(() => {
            const nextItem = section5Eng.items[itemsVisible.length];
            if (nextItem) {
              setItemsVisible([...itemsVisible, nextItem]);
              const item = document.querySelector(`.item:nth-child(${itemsVisible.length + 1})`);
              item.classList.add('animate');
            } else {
              clearInterval(intervalId);
            }
          }, 500);
          return () => {
            clearInterval(intervalId);
          };
        }
      }, [isVisible, itemsVisible]);
      const handleOpen = (event) => {
        const currentItem = event.target.closest('.item');
        currentItem.classList.toggle('open');
      };
  return (
    <>
        <section className="col-xxl-5" id="fifth_1">
            <h2><span>{section5Eng.h2[1]}</span><br/>{section5Eng.h2[2]}<br/>{section5Eng.h2[3]}</h2>
        </section>  
        <section className="col-xxl-7" id="fifth_2">
            <div className="items">
            {itemsVisible.map((item, index) => (
                <div
                className={`item ${isVisible ? 'animate' : ''} item-${index}`}
                key={index}
                style={{ animationDelay: `${index * 0.5}s` }}
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