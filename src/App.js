import React from 'react';
import './App.css';
import Home from './component/Home'
import TheFamily from './component/TheFamily'
import News from './component/News'
import Contact from './component/Contact'
import Navbar from './component/Navbar'
import axios from 'axios'
import Sidebar from './component/Sidebar'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events:[],
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:8000/events')
      .then(response => response.data)
      .then(data => {
        this.setState({
          events: data
        })
      })
  }    
  render(){
    return(
      <div className="App">
      <Sidebar />
      <Navbar />
      <Home />
      <TheFamily />
      <News events={this.state.events} />
      <Contact />
      </div>
    )
  };
}

export default App;
