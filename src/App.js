import React,{Component} from 'react';
import axios from 'axios'


class App extends Component{
  constructor(){
    super()
    this.state={
      data:'',
      movieid:''

    }

  }

  handleId=(event)=>{
    this.setState({
      movieid:event.target.value
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault()

    let movieid=this.state.movieid

    axios.get('http://localhost:8090/info/new/'+movieid)
    .then(response=>response.data)
    .then(data=>this.setState({
      data:data
    }))

  }

  render(){
    let res=this.state.data
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Give Movie ID</label>
          <input type="text" value={this.state.movieid} onChange={this.handleId}/>
          <button>Get Movie</button>
          <hr/>
          <label>Details about the Movie:</label><br/><br/><hr/>
          <label>title:</label>
          <h4>{res.title}</h4>
          <label>plot:</label>
          <h4>{res.plot}</h4>
          <label>genre:</label>
          <h4>{res.genre}</h4>
          <label>IMDB Rating:</label>
          <h4>{res.imdbRating}</h4>
          <label>awards:</label>
          <h4>{res.awards}</h4>
          
        </form>
      </div>
    )
  }
}



export default App;
