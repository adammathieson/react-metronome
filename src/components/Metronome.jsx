import React, { useState } from 'react'
import './Metronome.css'
import click1 from '../assets/click1.wav'
import click2 from '../assets/click2.wav'


const Metronome = () => {
    const [ bpm, setBpm ] = useState(100)
    const [ playing, setPlaying ] = useState(false)
    const [ count, setCount ] = useState(0)
    const [ beatsPerMeasure, setBeatsPerMeasure ] = useState(4)

    const clickOne = new Audio(click1)
    const clickTwo = new Audio(click2)
    // console.log(clickOne, clickTwo)

    const handleBpmChange = e => {
        const bpm = e.target.value
        setBpm(bpm)
    }

    const startStop = () => {
        let timer
        if (playing) {
            // Stop the timer
            clearInterval(timer)
            setPlaying(false)
        } else {
            // Start a timer with the current BPM
            let timer = setInterval(
                playClick,
                (60 / bpm) * 1000
            )
            setCount(0)
            setPlaying(true)
            playClick()
        }
    }

    const playClick = () => {
        // The first beat of interval will be different than the others
        if (count % beatsPerMeasure === 0) {
            clickTwo.play()
        } else {
            clickOne.play()
        }

        // Keep track of which beat we're on
        setCount((count+1) % beatsPerMeasure)
    }

    return (
        <div className="metronome">
            <div className="bpm-slider">
                <div>{bpm} BPM</div>
                <input 
                    type="range" 
                    min="60" max="240" 
                    value={bpm}
                    onChange={handleBpmChange}
                />
            </div>
            <button onClick={startStop}>
                {playing ? 'Stop' : 'Start'}
            </button>
        </div>
    )
}

export default Metronome
