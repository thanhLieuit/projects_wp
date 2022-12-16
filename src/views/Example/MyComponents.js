import React from 'react';



/**
 * jsx => return block
 * fragment
 */
class MyComponents extends React.Component {
    state = {
        name: '',
        study: 'math',
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnClickButton = () => {
        alert('Click me');
    }
    render() {

        return (
            <>
                <div className="firt">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    my name is {this.state.name}
                </div>
                <div className="second">
                    i love study {this.state.study}
                </div>
                <div className='third'>
                    <button onClick={() => this.handleOnClickButton()}>click Me !!</button>
                </div>
            </>
        )
    }
}

export default MyComponents;