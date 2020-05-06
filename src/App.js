import React, { Component } from 'react';
import uuid from 'uuid-random';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      title:"",
      description:"",
      ended:false,
      items:[],
      date: "2020-05-05"
    }

  }

  handleSubmit = (event) => {
    event.preventDefault();

    let item = {
      id: uuid(),
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      ended: this.state.ended
    } 

    this.setState({
        items: this.state.items.concat(item),
        title:"",
        description:"",
        ended:false,
        date: "2020-05-05"       
    }, () => console.log(this.state.items))
    
  }  


  handleChange = (event) => {
    const { name } = event.target;
    const value = name === "ended" ? event.target.checked : event.target.value;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} > 
          <label htmlFor="title">Titulo:</label>
          <br/>
          <input 
            type="text" 
            onChange={this.handleChange}
            value={this.state.title}
            name="title"
            id="title"
          />
          <br/>
          <label htmlFor="description">Descripcion:</label>
          <br/>
          <textarea rows="3" 
            onChange={this.handleChange}
            value={this.state.description}
            name="description"
            id="description">

          </textarea>
          <br/>
          <label htmlFor="ended">Finalizado?</label>
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={this.state.ended}
            name="ended"
            id="ended"
          />

          <br/>
          <label htmlFor="date">Finalizar antes de:</label>
          <input
            type="date"
            onChange={this.handleChange}
            value={this.state.date}
            name="date"
            id="date"
            />
            <br/>
          <button type="submit">Crear Tarea</button>
        </form>
          <br/>
          <table>
            <thead>
            <tr>
              <th>Titulo</th>
              <th>Descripcion</th>
              <th>Completada</th>
            </tr>
            </thead>
            <tbody>
            {this.state.items.map( item =>
              <tr key={item.id} >
                <td> {item.title} </td>
                <td> {item.description}  </td>
                <td> {item.ended ===false ? "Por completar" : "Completada"}  </td>
              </tr>
             )}  
          </tbody>
          </table>

        

      </div>
    );
  }
}

export default App;
