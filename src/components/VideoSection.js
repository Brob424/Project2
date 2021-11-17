import Button from './Button'
import './VideoSection.css'

const  VideoSection = () => {
    return (
        <div className="vidSec">
            <video className='vid' src="https://cdn.videvo.net/videvo_files/video/free/2016-07/small_watermarked/160714_Pills_2_1080p_preview.webm" autoPlay loop muted /> 
            <div className="homeTitle">
            <h1>Med<span>Dex</span></h1> 
            <p>MedDex is a medication search reference site. With this multi-purpose search engine, you can find all the information needed for pills, topicals, liquids, and many more medications on mobile or desktop.</p>
            </div>
            <Button />
        </div>
    )
}

export default VideoSection
