"use client";
import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import RootReducers from './reducer';
import Header from './components/header';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import Section6 from './components/section6';
import Footer from './components/footer';
import Modal from './components/modal';

const store = configureStore({
  reducer: RootReducers
});


export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Modal />
        <div id="bg-1"></div>      
        <div className="container px-xxl-5 px-xl-5 px-lg-4 px-sm-0">
          <Header />
          <main className="row">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
          </main>
          <Footer />
        </div>   
      </Provider>
    </>
  );
}
