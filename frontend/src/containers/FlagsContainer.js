import React from 'react'
import FlagCard from '../components/FlagCard'
import NavBar from '../components/NavBar'
import {connect} from 'react-redux'
import {fetchFlags} from '../actions/FlagActions'
import '../style/AllFlags.css'
import PhotoOne from '../Flag Photos/3.jpg'
import PhotoTwo from '../Flag Photos/4.jpg'
import PhotoThree from '../Flag Photos/7.jpg'
import PhotoFour from '../Flag Photos/11.jpg'
import PhotoFive from '../Flag Photos/12.jpg'
import PhotoSix from '../Flag Photos/slide5.jpg'
import PhotoSeven from '../Flag Photos/unnamed.jpg'

class FlagsContainer extends React.Component {

    render() {
        const flags = [PhotoOne, PhotoTwo, PhotoThree, PhotoFour, PhotoFive, PhotoSix, PhotoSeven]
        return (
            <div className='navbar-container'>
                <NavBar />
                <div className='flag-container'>
                {flags.map((flag) => (
                    <FlagCard flag={flag}/>
                ))}
                </div>
            </div>
        )
    }
}



export default connect(null, {fetchFlags})(FlagsContainer)