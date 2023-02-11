import React, { useState } from 'react';
import "./Details.css";
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ReactYoutube from './ReactYoutube';
import { Grid, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import ReactStars from "react-rating-stars-component";


export default function Details(props) {

    console.log(props.match.params.id);
    //DUMMY DATA FOR TRIAL
    // const [upcomingMovie, setUpcomingMovie] = useState(
    //     {
    //         id: 1,
    //         title: 'Inception',
    //         language: 'English',
    //         released: 'yes',
    //         releasedDate: '16-07-2010',
    //         duration: '148',
    //         imdb: '8.8',
    //         category: 'Movies',
    //         genre: ['science fiction', 'thriller', 'action', 'adventure'],
    //         imageUrl: 'https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg',
    //         plot: 'Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.',
    //         trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    //         trailerId: 'YoHD9XEInc0',
    //     })

    //ANOTHER WAY FOR FILTERING ITEMS BASED ON ID.
    // const {releasedMovie} = props;
    // //console.log(releasedMovie);
    // const id = props.match.params.id.split(':');
    // const searchId = id[1];
    // console.log(searchId);
    // const filteredData = releasedMovie.filter((item) => item.released === 'yes');
    // const movieDataArray = filteredData.filter((item)=> item.id.toString() === searchId.toString() );
    // const movieData = movieDataArray[0];
    // console.log(filteredData);
    // console.log(movieData);

    const { movieData } = props.location.state;
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div>
            <Link to="/">
                <div className="backButton" >
                    <Button >Back to Home</Button>
                </div >
            </Link>
            <div className="row1V">
                <div className="column1">
                    <img width="100%" src={movieData.imageUrl} alt={movieData['title']} />
                </div>
                <div className="column2">

                    <Typography variant="headline" component='h2'>
                        {movieData.title}
                    </Typography>
                    <Typography variant="textPrimary" component='h5' style={{ display: 'inline-block' }}>Genres:</Typography>
                    <Typography variant="textPrimary" component='p' style={{ display: 'inline-block' }}>{movieData.genre.map((item) => item + ',')} </Typography>

                    <br />
                    <Typography variant="textPrimary" component='h5' style={{ display: 'inline-block' }}>Release Date:</Typography>
                    <Typography variant="textPrimary" component='p' style={{ display: 'inline-block' }}>{movieData.releasedDate}</Typography>
                    <br />

                    <Typography variant="textPrimary" component='h5' style={{ display: 'inline-block' }}>Rating:</Typography>
                    <Typography variant="textPrimary" component='p' style={{ display: 'inline-block' }}>{movieData.imdb}</Typography>
                    <br />
                    <br />
                    <Typography variant="textPrimary" component='h5' style={{ display: 'inline-block' }}>plot:</Typography>
                    <Typography variant="textPrimary" component='p' style={{ display: 'inline-block' }}> {movieData.plot}</Typography>
                    <br />
                    <br />
                    <Typography variant="textPrimary" component='p'>
                        <h5>Trailer:</h5> {<ReactYoutube trailerId={movieData.trailerId} />}
                    </Typography>
                </div>
                <div className="column3">
                    <Typography variant="headline" component='h2'>
                        <h5>Rate this movie:</h5>
                    </Typography>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                    />
                    <br />
                    <br />
                    <Typography variant="headline" component='h2'>
                        <h5>Artists: </h5>
                    </Typography>
                    <GridList cellHeight={250} cols={2} style={{ marginRight: 10, marginTop: 16, marginBottom: 16 }}>
                        {movieData.artists.map((artist) => (
                            <GridListTile key={artist.id}>

                                <img style={{ height: 250 }} src={artist.artistImage} alt={artist.artistImage} />
                                <GridListTileBar
                                    title={artist.artistName}
                                    className="gridlisttitle gridlisttitlebar"
                                    actionIcon={
                                        <IconButton aria-label={`star ${artist.artistName}`}>
                                            {/* <StarBorderIcon className="gridlisttitle" /> */}
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}

                    </GridList>
                </div>
            </div>
        </div>
    )
}