import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import exercises from '../exercises'
// import {app} from '../app'

function Workouts () {

    const [stat, setStat] = useState()
    const [isButton, setIsButton] = useState(true);

    const [stretches, calisthenics] = exercises;

    const stretch = stretches.basicStretches
    const calisthenic = calisthenics.basicCalisthenics;

    let getTime = new Date().toLocaleTimeString();

    useEffect(() => {
        fetch("/api/workouts")
            // .then(res => res.json())
            // .then(stat => setStat(stat.message));
            .then(console.log('Hello World'));
    }, [])

    function handleClick (e) {
        // TODO: Output routine
        const generateCalExercise = Math.floor(Math.random() * calisthenic.length);
        const generateStretches = Math.floor(Math.random() * stretch.length);

        getTime > 15 ? setStat(() => (stretch[generateStretches])) : setStat(() => (calisthenic[generateCalExercise]));
        e.preventDefault()

        if (getTime === '12:00:00 AM' || getTime === '3:00:00 PM' || getTime === '8:00:00 PM'){
            return () => {
                setIsButton(true)
            }
        } else {
            setIsButton(false)
            document.querySelector('.Button').style.backgroundColor = 'grey'
        }
    }

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
                        <div>
                            <p className='mt-4'>{stat}</p>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default Workouts;