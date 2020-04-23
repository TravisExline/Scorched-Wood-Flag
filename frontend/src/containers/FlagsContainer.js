import React from 'react'
import FlagCard from '../components/FlagCard'
import NavBar from '../components/NavBar'
import {connect} from 'react-redux'
import {fetchFlags} from '../actions/FlagActions'

class FlagsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchFlags()
    }

    render() {
        return (
            <div className='flag-container'>
                <NavBar />
                {this.props.flags.map((flag) => (
                    <FlagCard key={flag.id} flag={flag}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {flags: state.flagReducer}
}

export default connect(mapStateToProps, {fetchFlags})(FlagsContainer)