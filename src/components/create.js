import React from 'react';
import '../App.css';
import axios from 'axios';

export class Create extends React.Component{

    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this); // bind when called, has this keyword set to the provided value
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this); // bind when called, has this keyword set to the provided value
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this); // bind when called, has this keyword set to the provided value

        this.state = { // store property values that belongs to the component
            Title:'',
            Year:'',
            Poster:''
        }
    }// END constructor

    onChangeMovieName(e){
        this.setState({Title: e.target.value}); //update method and invoke state
    }// END onChangeMovieName

    onChangeMovieYear(e){
        this.setState({Year: e.target.value}); //update method and invoke state
    }// END onChangeMovieYear

    onChangeMoviePoster(e){
        this.setState({Poster: e.target.value}); //update method and invoke state
    }// END onChangeMoviePoster

    onSubmit(){ // event occurs when a form is submitted
        alert('Movie added' // alert pops up with Movie Title, Year and Poster
        + '\ntitle:  ' + this.state.Title
        + '\nYear: ' + this.state.Year 
        + '\nPoster: ' + this.state.Poster);

        const newMovie = { // newMovie object
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }

        axios.post('http://localhost:4000/api/movies', newMovie) // read data/send object to server
        .then((res) => {
            console.log(res); // responce
        })
        .catch((err) => {
            console.log(err); // error
        });

    }// END onSubmit

    render(){ // method of react - tells react what to display
        return( //output of the method
            <div>
                <h3>Hello from create component</h3> 
                <form onSubmit={this.onSubmit}> {/* form used to collect user input*/}
                
                    <div className="form-group">
                        <label>Please add movie title</label>
                        <input type="text" className="form-control" value={this.state.Title} onChange={this.onChangeMovieName}></input> 
                    </div> {/* form-control - Bootstrap’s form styles */}

                    <div className="form-group">
                        <label>Please add movie year</label>
                        <input type="text" className="form-control" value={this.state.Year} onChange={this.onChangeMovieYear}></input>
                    </div> {/* value attribute of a text field */}
                
                    <div className="form-group">
                        <label>Please add movie poster</label>
                        <input type="text" className="form-control" value={this.state.Poster} onChange={this.onChangeMoviePoster}></input>
                    </div> {/* onchange event occurs when the value of an element has been changed */}

                    <input type="submit" value="Add Movie"></input>
                </form>
            </div>
        );// END return
    }// END render
}// END create class