import React from "react";
import './CssForAll.css';
import './News.css'
import EventCard from './EventCard'
import axios from 'axios'

class News extends React.Component {
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
        <div>
            <h1 id='news' className='NewsTitle'>NEWS</h1>
            <div className='eventCardContainer'>
                {(this.state.events.map((event) => (
                    <EventCard 
                        key={event.id}
                        date={event.creation_date}
                        article={event.article}
                        title={event.title}
                    />
                )))}
            </div>
        </div>
      )
    };
  }
   

export default News ;