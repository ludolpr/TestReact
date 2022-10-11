class Field extends React.Component{
    render () {
        const {name,value, onChange} = this.props
        return <div className="form-group">
            <label htmlFor={name}>Le libellé</label>
            <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control"/>
        </div>
    }
}


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // nom: "Jean"  
            // nom: "demo2"

            // nom:["demo2", "demo1"]

            // checked : true
            nom: "",
            prenomù: "",
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            // nom: e.target.value
            // ou avec les spread opérateur [.....]     // en dessous je map o et récupere la valeur 
            // nom: Array.from(e.target.selectedOptions).map(o => o.value)
            // checked: e.target.checked
            [name]: value
        })
    }


    render() {
        return <div>
            {JSON.stringify(this.state.nom)}
            <label htmlFor="nom">Mon nom</label>
            <textarea type="texte" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange}></textarea>



            <select value={this.state.nom} onChange={this.handleChange} multiple>
                <option value="demo1"> demo1</option>
                <option value="demo2"> demo2</option>
                <option value="demo3"> demo3</option>
 
            </select>


            <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
            {this.state.checked ? <div> Mon super message !! Technique de la licorne </div>: null}
            <Field name="nom" value={this.state.nom} onChange={this.handleChange}/>
            <div>
                <label htmlFor="nom">Nom</label>
                <input type="text" value={this.state.nom} onChange={this.handleChange} id="nom" name="nom" />
            </div>
            <div>
                <label htmlFor="prenom">Prenom</label>
                <input type="text" value={this.state.prenom} onChange={this.handleChange} id="prenom" name="prenom" />
            </div>
            <div>
                <label htmlFor="newsletter">s'abonné à la newsletter ?</label>
                <input type="checkbox" checked={this.state.newsletter} onChange={this.handleChange} id="newsletter" name="newsletter" />
            </div>
            <input type="text" defaultValue="Salut"/>
            <input type="text" Value="Salut"/>

            {JSON.stringify(this.state)}

        </div>

    }
}
ReactDOM.render(<Home />, document.querySelector("#app"))