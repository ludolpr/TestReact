class Incrementer extends React.Component {

    constructor(props) {
        super(props)
        this.state = { n: props.start, timer: null }
    }
    componentDidMount() {
        this.play()
    }
    componentWillUnmount() {
        this.pause()
    }
    increment() {
        this.setState((state, props) => ({ n: state.n + props.step }))
    }
    pause() {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }
    play() {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000)
        })
    }

    toggle() {
        return this.state.timer ? this.pause() : this.play()
    }
    label() {
        return this.state.timer ? "Pause" : "Lecture"
    }

    reset() {
        this.pause()
        this.play()
        this.setState((state, props) => ({ n: props.start }));
    }

    render() {
        console.log("render");
        return <div>
            Valeur: {this.state.n}
            <button onClick={this.toggle.bind(this)}>{this.label()}</button>
            <button onclick={this.reset.bind(this)}>Réinitilaiser</button>

        </div>
    }

}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}

class ManuelIncrementer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { n: 0 }
    }

    componentDidMount() {
        this.play()
    }
    componentWillUnmount() {
        this.pause()
        this.setState({
            timer: null
        })
    }
    increment(e) {
        // preventDefault retire l'etat ou l'action explemple un lien http ne fonctionnerais pas
        e.preventDefault()
        this.setState((state, props) => ({ n: state.n + 1 }))
    }

    render() {
        return <div>Valeur: {this.state.n}
            <button onClick={this.increment.bind(this)}>Incrémenter</button></div>
    }
}


function Home() {
    return <div>
        <Incrementer />
        {/* <ManuelIncrementer /> */}

    </div>
}

ReactDOM.render(<Home />, document.querySelector("#app"))