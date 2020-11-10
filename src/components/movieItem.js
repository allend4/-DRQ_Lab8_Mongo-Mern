import React from 'react';
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component {

    render() {
        return (
            <div>
                
                {/* basic html */}
                {/* <h3>{this.props.movie.Title}</h3> {/* js pulls title from movie object*/}
                {/* <p>{this.props.movie.Year}</p> {/* js pulls Year from movie object*/}
                {/* <img src={this.props.movie.Poster} width="200" height="300"></img> {/*js pulls poster from movie object */}
            
                {/* bootstrap card */}
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header> {/* props how you pass data from one comp to another */}
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="300" alt=" "></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

            </div>
        );// END return
    }// END render
}// END class MovieItem