import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import exercises from '../exercises'

function Workouts() {

    const [stat, setStat] = useState()
    const [isButton, setIsButton] = useState(true);
    
    const [stretches, calisthenics] = exercises;

    const stretch = stretches.basicStretches
    const calisthenic = calisthenics.basicCalisthenics;

    let getTime = new Date().toLocaleTimeString();

    function handleClick(e) {
        e.preventDefault();
        const generateCalExercise = Math.floor(Math.random() * calisthenic.length);
        const generateStretches = Math.floor(Math.random() * stretch.length);
        getTime > 15 ? setStat(() => (stretch[generateStretches])) : setStat(() => (calisthenic[generateCalExercise]));
        setIsButton(false)
    }
    
    useEffect(() => {
        let bData = localStorage.getItem("Button")
        let exData = localStorage.getItem('Exercise_Item')
        if (bData != null && exData != null) {
            try {
                // Add some sort of delay when getTime is true
                if (getTime >= "12:00:00 AM"
                    || getTime >= "3:00:00 PM"
                    || getTime >= "6:00:00 PM") {
                    bData = true
                    localStorage.removeItem("Button")
                }
                bData = false;
                setIsButton(JSON.parse(bData));
                setStat(JSON.parse(exData));
            } 
            catch (error) { console.log(error) }
        }
    }, [getTime])

    useEffect(() => {
        if (!isButton) document.querySelector('.Button').style.backgroundColor = 'grey'
        localStorage.setItem("Button", JSON.stringify(isButton));
        localStorage.setItem('Exercise_Item', JSON.stringify(stat))
    }, [isButton, stat]);

    return (
        <>
            <form className='flex justify-center ...'>
                <div className='grid grid-cols-1 gap-4'>
                    <Button
                        onClick={handleClick}
                        size='large'
                        className='Button'
                        variant='outlined'
                        type='submit'
                        disabled={!isButton}
                    >
                        <p className='m-2 text-white'>Generate!</p>
                    </Button>
                    <div>
                        <p className='mt-4'>{stat}</p>
                    </div>
                </div>
            </form>
        </>
    )
}
export default Workouts;

// -----------FOR REFERENCE--------- 

// function timeRange(a, b) {
    //     for (let i = a; i < b.length; i++) {
    //         console.log(b[i])
    //         return b[i]
    //     }
    // }
