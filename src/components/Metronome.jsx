import React, { useState } from 'react'
import './Metronome.css'

const Metronome = () => {
    const [ bpm, setBpm ] = useState(100)
    const [ playing, setPlaying ] = useState(false)
    const [ count, setCount ] = useState(0)
    const [ beatsPerMeasure, setBeatsPerMeasure ] = useState(4)

    const handleBpmChange = e => {
        const bpm = e.target.value
        setBpm(bpm)
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
            <button>{playing ? 'Stop' : 'Start'}</button>
        </div>
    )
}

export default Metronome
