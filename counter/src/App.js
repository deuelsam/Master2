class App extends React.Component {
    constructor() {
        super();

        this.state = {
            counter: 1337
        }
    }



increment =() => {
    this.setState(currentState=> {
        const newState={
            counter:currentState.counter+1
        }
    
     return newState
    })
}

render() {
    return <div>
        <h2> Counter</h2>
        <hr/>
        <p>{this.state.counter}</p>
        <button onClick= {this.increment}>increment</button>
    </div>
}

}


