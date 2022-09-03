import React, { useEffect, useState } from 'react';
import Header from './Header';
import '../index.css';
import Workouts from './Workouts';
import Footer from './Footer';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from '@fortawesome/fontawesome';
import { faDumbbell } from '@fortawesome/fontawesome-free-solid'
import { Grow } from '@mui/material';

fontawesome.library.add(faDumbbell);

function App() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch('/')
     .then(res => res.ok ? setChecked(true) : console.log('Something went wrong!'))
     .catch(err => console.log(err))
  })

  return (
    <div className="Main bg-slate-50">
      <Header />
      <div className='grid gap-10 mt-40'> 
        <Grow in={checked} style={{transformOrigin: '0 5 0'}} {...(checked ? {timeout: 2000} : {})}>
          <h1 className="title text-3xl font-bold text-slate-900 text-center">Workout Of The Day</h1>
        </Grow>
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
