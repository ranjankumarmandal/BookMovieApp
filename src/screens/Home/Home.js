import React, { useState } from 'react';
import { Grid, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
//IMPORTS FOR GRIDLIST
import { makeStyles } from '@material-ui/styles';


//IMPORTS for CARD COMPONENT
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MenuItem, TextField } from '@material-ui/core'

import { FormControl, Input, InputLabel, Select, Checkbox, FormControlLabel } from '@material-ui/core';

//import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

import { Link } from 'react-router-dom';

import Header from '../../common/header/Header'
import './Home.css';


function Home(props) {

    const { upcomingMovie, setUpcomingMovie, releasedMovie, setReleasedMovie } = props;

    return (
        <div>
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="upcoming-movies">
                    <span>Upcoming Movies</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <SingleLineGridList upcomingMovie={upcomingMovie} />
                </div>
            </div>
            <div className="row">
                <FilteredGridList releasedMovie={releasedMovie} setReleasedMovie={setReleasedMovie} />
            </div>
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        // color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    title: {
        color: "#4791db",
    },
    rootFiltered: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflowX: "auto",
        overflowY: 'hidden',
        //  background: theme.palette.background.paper,
    },
    gridListFiltered: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        height: 250
    },
    rootMedia: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}));

//UPCOMING MOVIES
function SingleLineGridList(props) {
    const classes = useStyles();
    const { upcomingMovie } = props;
    const filteredMovies = upcomingMovie.filter((item) => item.released === 'yes');

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={6} style={{ marginRight: 40 }}>
                {filteredMovies.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.imageUrl} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${tile.title}`}>
                                    {/* <StarBorderIcon className={classes.title} /> */}
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}




//RELEASING MOVIES
function FilteredGridList(props) {
    const { releasedMovie, setReleasedMovie } = props;
    const filteredData = releasedMovie.filter((item) => item.released === 'yes');
    const classes = useStyles();
    return (
        <div className="row1">
            <div class="col1">
                <div>
                    <GridList cellHeight={300} cols={3} style={{ marginRight: 40 }}>
                        {filteredData.map((tile) => (
                            <GridListTile key={tile.imageUrl}>
                                <Link to={{ pathname: `/detail/:${tile.id} `, state: { movieData: tile } }}>
                                    <img className="imgSize" style={{ height: 300 }} src={tile.imageUrl} alt={tile.title} />
                                    <GridListTileBar
                                        title={tile.title}
                                        subtitle={`ReleasedDate : ${tile.releasedDate}`}
                                        classes={{
                                            root: classes.titleBar,
                                            title: classes.title,
                                        }}
                                    />
                                </Link>

                            </GridListTile>
                        ))}

                    </GridList>
                </div>
            </div>
            <div class="col2">
                <MediaCard releasedMovie={releasedMovie} setReleasedMovie={setReleasedMovie} />
            </div>
        </div>
    )
}

//Movie Filter Card
function MediaCard(props) {
    const classes = useStyles();
    const { releasedMovie, setReleasedMovie } = props;


    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(select);

        let filteredItems = releasedMovie.filter((item) => {
            // console.log("item genre:", item.genres);
            // console.log("select genres :", select.genres);
            // console.log("select artist :", select.artist);


            return item.title.toLocaleLowerCase().includes(select.movieName.toLocaleLowerCase()) || item.genre.includes(select.genres.toLocaleLowerCase())


        })
        setReleasedMovie(filteredItems);

    }
    const [select, setSelect] = React.useState({
        movieName: "",
        genres: "",
        artist: "",
        startDate: "",
        endDate: '',
    });
    const [genres, setGenres] = React.useState({
        drama: false,
        romance: false,
        horror: false,
        thriller: false,
        crime: false
    });


    const [artist, setArtist] = React.useState({
        ShreyaChaudary: false,
        RitwikBhowmik: false,
        MithilaPalkar: false,
        SobhitaDhulipala: false,
        JohnAbraham: false,
        EmmaWatson: false,
        PatrickWilson: false
    });
    const onInputCheckBoxGenresChange = (event) => {
        const State = select;
        setGenres({ ...genres, [event.target.name]: event.target.checked });
        State["genres"] = event.target.name;

        setSelect({ ...State })
    }
    const onInputCheckBoxArtistChange = (event) => {
        const State = select;
        setArtist({ ...artist, [event.target.name]: event.target.checked });
        State["artist"] = event.target.name;
        setSelect({ ...State })
    }
    const onInputChange = (event) => {
        const State = select;
        State[event.target.name] = event.target.value;
        setSelect({ ...State });
    };

    return (


        <Card className={classes.rootMedia}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    FIND MOVIES BY
                </Typography>
                <form onSubmit={onHandleSubmit}>
                    <FormControl>
                        <FormControl xs={12} className={classes.formControl}>
                            <InputLabel htmlFor="movie-name">Movie Name</InputLabel>
                            <Input onChange={onInputChange} id="movieName" name="movieName" value={select.movieName} />
                        </FormControl>

                        <FormControl xs={12} className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Genres</InputLabel>
                            <Select

                                // labelId="demo-simple-select-label"
                                id="genres"
                                name="genres"
                                value={select.genres}
                                onChange={onInputChange}
                            >
                                <FormControl>
                                    <FormControlLabel
                                        control={<Checkbox checked={genres.drama} onChange={onInputCheckBoxGenresChange} name="drama" />}
                                        label="drama"
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={genres.romance} onChange={onInputCheckBoxGenresChange} name="romance" />}
                                        label="romance"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={genres.horror} onChange={onInputCheckBoxGenresChange} name="horror" />}
                                        label="horror"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={genres.thriller} onChange={onInputCheckBoxGenresChange} name="thriller" />}
                                        label="thriller"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={genres.crimeś} onChange={onInputCheckBoxGenresChange} name="crime" />}
                                        label="crime"
                                    />
                                </FormControl>
                            </Select>
                        </FormControl>


                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Artist</InputLabel>
                            <Select

                                // labelId="demo-simple-select-label"
                                id="artist"
                                name="artist"
                                value={select.artist}
                                onChange={onInputChange}
                            >
                                <FormControl>
                                    <FormControlLabel
                                        control={<Checkbox checked={artist.ShreyaChaudary} onChange={onInputCheckBoxArtistChange} name="Shreya Chaudary" />}
                                        label="Shreya Chaudary"
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={artist.RitwikBhowmik} onChange={onInputCheckBoxArtistChange} name="Ritwik Bhowmik" />}
                                        label="Ritwik Bhowmik"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={artist.MithilaPalkar} onChange={onInputCheckBoxArtistChange} name="Mithila Palkar" />}
                                        label="Mithila Palkar"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={artist.SobhitaDhulipala} onChange={onInputCheckBoxArtistChange} name="Sobhita Dhulipala" />}
                                        label="Sobhita Dhulipala"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={artist.JohnAbraham} onChange={onInputCheckBoxArtistChange} name="John Abraham" />}
                                        label="John Abraham"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={artist.EmmaWatson} onChange={onInputCheckBoxArtistChange} name="Emma Watson" />}
                                        label="Emma Watson"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={artist.PatrickWilson} onChange={onInputCheckBoxArtistChange} name="Patrick Wilson" />}
                                        label="Patrick Wilson"
                                    />
                                </FormControl>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="releaseDate"
                                label="Release Date Start"
                                type="date"
                                name="startDate"
                                onChange={onInputChange}
                                defaultValue="dd-mm-yyyy"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="date"
                                label="Release Date End"
                                type="date"
                                name="endDate"
                                onChange={onInputChange}
                                defaultValue="dd-mm-yyyy"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </FormControl>

                        <Button variant="contained" color="primary" type="submit">
                            Primary
                        </Button>
                    </FormControl>
                </form>


            </CardContent>
        </Card>
    );
}






export default Home;



