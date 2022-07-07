import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import '../Components/video.css';
import Videomodal from './Modal';
import Videosecond from './Videosecond';

class Video extends React.Component{
    constructor(){
        super();
    }

    render(){
    return(
        <Container className='video-contain'>
            <div className='video-main'>
                <Grid className='vid-1' item xs={5}>
                    <div className='video-content'>
                        <h2><span className='video-star'>Star-Blue</span>
                        <span className='video-vid'> Video</span><br/>Presentation</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <Button className="req-btn">Contact us for a quotes</Button>
                    </div>
                </Grid>
                <Grid className='vid-2' item xs={7}>
                    {/* <Videomodal/> */}
                    <Videosecond/>
                </Grid>
            </div>
        </Container>
        )
    }
}

export default Video;