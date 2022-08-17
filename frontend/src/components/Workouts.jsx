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
        // TODO: Output routine
        e.preventDefault();
        const generateCalExercise = Math.floor(Math.random() * calisthenic.length);
        const generateStretches = Math.floor(Math.random() * stretch.length);

        getTime > 15 ? setStat(() => (stretch[generateStretches])) : setStat(() => (calisthenic[generateCalExercise]));

        if (getTime === '12:00:00 AM' || getTime === '3:00:00 PM' || getTime === '5:10:00 PM') {
            setIsButton(true)
        } else {
            setIsButton(false)
            document.querySelector('.Button').style.backgroundColor = 'grey'
        }
    }

    useEffect(() => {
        const bData = localStorage.getItem("Button")
        const exData = localStorage.getItem('Exercise_Item')

        if (bData && exData) {
            try {
                setIsButton(JSON.parse(bData));
                setStat(JSON.parse(exData))
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("Button", JSON.stringify(isButton));
        localStorage.setItem('Exercise_Item', JSON.stringify(stat))
        if(!isButton) document.querySelector('.Button').style.backgroundColor = 'grey'
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