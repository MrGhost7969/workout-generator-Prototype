import React, {useState} from 'react';
import Header from './Header';
import '../index.css';
import Workouts from './Workouts';
import exercises from '../exercises';
import Footer from './Footer';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from '@fortawesome/fontawesome';
import {faDumbbell} from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faDumbbell);

function App() {
  
  return (
    <div className="Main bg-slate-50">
      <Header />
      <div className='grid gap-10 mt-40'>
        <h1 className = "title text-3xl font-bold text-slate-900 text-center">Workout Of The Day</h1>
        <div className='grid justify-center ... text-4xl mb-5 title'>
          <FontAwesomeIcon icon="dumbbell" /> 
        </div>
      </div>
        <Workouts />
      <Footer />
    </div>
  );
}

export default App;
