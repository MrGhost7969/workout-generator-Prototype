import React, {useState} from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import exercises from '../exercises'
import {Card, CardContent} from '@mui/material';
import {TextField} from '@mui/material';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';

function Workouts () {

    const [stretches, calisthenics] = exercises;
    const [stat, setStat] = useState([])

    const [stretch, setStretch] = useState(stretches.basicStretches);
    const [exercise, setExercise] = useState(calisthenics.basicCalisthenics);

    const [isButton, setIsButton] = useState(true);

    let getTime = new Date().getHours();

    const handleClick = (e) => {
        // TODO: Output routine
        const generateCalExercise = Math.floor(Math.random() * exercise.length);
        const generateStretches = Math.floor(Math.random() * stretch.length);

        // Conditions
        getTime >= 15 ? setStat(() => (stretch[generateStretches])) : setStat(() => (exercise[generateCalExercise]));

        // Applied when backend is implemented

        // if(getTime === 1 || getTime >= 12 || getTime >= 18) {
        //     setIsButton(true)
        // }

        return setIsButton(false)
            
        e.preventDefault()
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