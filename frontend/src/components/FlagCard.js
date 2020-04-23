import React from 'react'

class FlagCard extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.flag.picture} />
            </div>
        )
    }
}

export default FlagCard