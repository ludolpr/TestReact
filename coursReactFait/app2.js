// const { func } = require("prop-types");

// const { func } = require("prop-types");
let n = 0
function WelcomeFunc({ name, children }) {
    return <div>
        <h1>Bonjour:  {name}</h1>
        <p>
            {children}
        </p>
    </div>

}

class Welcome extends React.Component {

    constructor(props) {
        super(props)
        console.log(props);
    }

    render() {
        return <div>
            <h1>Bonjour: {this.props.name}</h1>
            <p>
                {this.props.children}
            </p>
        </div>
    }
}

class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = { date: new Date() }
        this.timer = null
    }
    componentDidMount() {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }
    componentWillUnmount() {
        window.clearInterval(this.timer)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        const date = new Date()
        return <div>
            Nous sommes le {this.state.date.toLocaleDateString()}, il est {this.state.date.toLocaleTimeString()}
        </div>
    }
}

class Incrementer extends React.Component {

    constructor(props) {
        super(props)
        this.state = { n: props.start }
        this.timer = null
    }
    componentDidMount() {
        window.setInterval(this.increment.bind(this), 1000)
    }
    componentWillUnmount() {
        window.clearInterval(this.timer)
    }
    increment() {

        this.setState((state, props) => ({ n: state.n + props.step }))
    }
    render() {
        return <div> Valeur: {this.state.n}</div>
    }

}

Incrementer.defaultProps = {
    start: 0,
    step:1
}

class ManuelIncrementer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {i:0}
    }
    increment (e) {
        e.preventDefault()
        this.setState((state, props) => ({i: state.i +1}))
    }
    render() {
        return <div>Valeur:  {this.state.i}<button onClick={this.increment.bind(this)}>Incrémenter</button></div>
    }
}


function Home() {
    return <div>
        <Welcome name="Dorothée" />
        <Welcome name="Jean" />
        <Clock />
        {/* <Incrementer start={n} />
        <Incrementer start={n+100} step={10} /> */}
        <ManuelIncrementer/>

    </div>
}

ReactDOM.render(<Home />, document.querySelector("#app"))