let n = 0 

function numberFormat(n) {
   return n.toString().padStart(2,'0')
}

function render() {
    const items = [ 
        "Tache 1",
        "Tache 2",
        "Tache 3"
    ]
    const lis = items.map((items,k) => <li key={k}>{items}</li>)
    const title = <div>
       <React.Fragment>
        
         <h1 id="title">
        Bonjour le gens <span>{numberFormat(n)}</span>
    </h1>
<ul>
    {lis}
</ul>
        </React.Fragment>
    </div> 
    ReactDOM.render(title, document.querySelector("#app"))
}

render()


window.setInterval(() => {
    n++
    render()
},1000)