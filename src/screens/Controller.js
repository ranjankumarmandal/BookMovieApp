import React, { useState, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home/Home'
import Details from './details/Details';

export default function Controller() {

    //UPCOMING MOVIES
    const [upcomingMovie, setUpcomingMovie] = useState([
        {
            id: 1,
            title: 'Inception',
            language: 'English',
            released: 'yes',
            releasedDate: '16-07-2010',
            imdb: '8.8',
            category: 'Movies',
            genre: ['science fiction', 'thriller', 'action', 'adventure'],
            imageUrl: 'https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg',
        },
        {
            id: 2,
            title: 'The Dark Knight',
            language: 'English',
            released: 'yes',
            releasedDate: '18-07-2008',
            imdb: '9',
            category: 'Movies',
            genre: ['action', 'adventure', 'super-hero'],
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg',
        },
        {
            id: 3,
            title: 'Avengers: Endgame',
            language: 'English',
            released: 'yes',
            releasedDate: '26-04-2016',
            imdb: '8.4',
            category: 'Movies',
            genre: ['action', 'super-hero', 'science fiction'],
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81ExhpBEbHL._SL1371_.jpg',
        },
        {
            id: 4,
            title: 'Iron Man',
            language: 'English',
            released: 'yes',
            releasedDate: '01-05-2008',
            imdb: '7.9',
            category: 'Movies',
            genre: ['action', 'super-hero', 'science fiction'],
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg',
        },
        {
            id: 5,
            title: 'Extraction',
            language: 'Hindi',
            released: 'yes',
            releasedDate: '24-04-2020',
            imdb: '6.7',
            category: 'Movies',
            genre: ['thriller', 'suspense'],
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        },
        {
            id: 6,
            title: 'Harry Potter 1',
            language: 'English',
            released: 'yes',
            releasedDate: '02-06-2021',
            imdb: '7.6',
            category: 'Kids',
            genre: ['drama', 'horror', 'suspense'],
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg',
        },
        {
            id: 7,
            title: 'The Conjuring',
            language: 'English',
            released: 'yes',
            releasedDate: '05-06-2021',
            imdb: '7.5',
            category: 'Movies',
            genre: ['horror', 'suspense'],
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Conjuring_poster.jpg',
        },
        {
            id: 8,
            title: 'Tenet',
            language: 'English',
            imdb: '7.4',
            released: 'yes',
            releasedDate: '04-12-2020',
            category: 'Movies',
            genre: ['spy', 'drama', 'epic'],
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
        },
    ])

    //RELEASED MOVIES
    const [releasedMovie, setReleasedMovie] = useState([
        {
            id: 1,
            title: 'Bandish Bandit',
            language: 'Hindi',
            released: 'yes',
            releasedDate: '04-08-2020',
            duration: '10 Episodes',
            imdb: '8.7',
            category: 'TV Shows',
            genre: ['drama', 'romance'],
            imageUrl: 'https://www.jagranimages.com/images/newimg/04082020/04_08_2020-bandish-bandits__20589432.jpg',
            plot: 'Bandish Bandits is an Indian romantic drama web series. Bandish Bandits follows the story of Radhe and Tamanna. Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather. Tamanna is a rising pop sensation desperate to become India\'s first international popstar. Radhe\'s world is turned upside down when he falls in love with Tamanna.',
            trailer: 'https://www.youtube.com/watch?v=UhU57OgGp50',
            trailerId: 'UhU57OgGp50',
            artists: [
                {
                    id: 1,
                    "artistName": 'Shreya Chaudary',
                    "artistImage": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhqJAK9ZDgJv4C06AVvpxENZg8hRai7kt4NTEMYJyMj6eqvof'
                },
                {
                    id: 2,
                    "artistName": 'Ritwik Bhowmik',
                    "artistImage": 'https://m.media-amazon.com/images/M/MV5BOTU2YjVlZWUtY2JiMC00YTZjLTkwZjQtNDA2NjIwNmFkMjYxXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg'
                }
            ]
        },
        {
            id: 2,
            title: 'Shakuntala Devi',
            language: 'Hindi',
            released: 'no',
            releasedDate: '',
            imdb: '6.1',
            category: 'Movies',
            genre: ['drama', 'comedy'],
            imageUrl: 'https://pyxis.nymag.com/v1/imgs/746/81f/110d5933298623461c500dd3d29e0c2026-shakuntala-devi.rvertical.w1200.jpg',
        },
        {
            id: 3,
            title: 'Karwaan',
            language: 'Hindi',
            released: 'yes',
            releasedDate: '03-08-2018',
            duration: '114 minutes',
            imdb: '7.6',
            category: 'Movies',
            genre: ['drama', 'comedy'],
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81vK75J4MXL._RI_.jpg',
            plot: 'The movie depicts a journey carried out from Bangalore to Kochi by two friends, the reserved Avinash played by Dulquer Salmaan, and his friend Shaukat played by Irrfan Khan with a lighter take on life, who pick up the chirpy teenager Mithila on the way.',
            trailer: 'https://www.youtube.com/watch?v=IUCeN7kelXs',
            trailerId: 'IUCeN7kelXs',
            artists: [
                {
                    id: 1,
                    "artistName": 'Mithila Palkar',
                    "artistImage": 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGGHNd1_Jc45giggYmVNSXTCDZ6-rzEzCMaJPrYXjO0sA-Vdbz'
                },
                {
                    id: 2,
                    "artistName": 'Irrfan Khan',
                    "artistImage": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWa2HmQzXl91DKR-Acc1TlFOo-sOVULdYHVDzurO0qog-dwtCg'
                },
                {
                    id: 3,
                    "artistName": 'Dulquer Salmaan',
                    "artistImage": 'https://upload.wikimedia.org/wikipedia/commons/8/85/Dulquer_Salmaan_at_Zoya_Factor_Trailer_Launch_function_%28cropped%29.jpg'
                }
            ]
        },
        {
            id: 4,
            title: 'Made in Heaven',
            language: 'Hindi',
            released: 'yes',
            releasedDate: '08-03-2019',
            duration: '9 episodes',
            imdb: '8.3',
            category: 'TV Shows',
            genre: ['drama', 'romance', 'suspense'],
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6b967ae5814e7430ae9248bd6dd1c927bfab260f1d4ff247666f2e68dcbe7419._RI_V_TTW_.jpg',
            plot: 'Made in Heaven portrays today\'s India as a blend of old and new, where tradition and modern aspirations are in tension. The series chronicles the lives of Tara and Karan, two wedding planners in Delhi running an agency named Made in Heaven.',
            trailer: 'https://www.youtube.com/watch?v=u0UkDQaR5KQ',
            trailerId: 'u0UkDQaR5KQ',
            artists: [
                {
                    id: 1,
                    "artistName": 'Sobhita Dhulipala',
                    "artistImage": 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXM5-pzRM6-zzTThfcVgVnbNhYOx9YQe6wMfkS4sTsPcaSNCPU'
                },
                {
                    id: 2,
                    "artistName": 'Arjun Mathur',
                    "artistImage": 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Arjun_Mathur_wiki.jpg/1200px-Arjun_Mathur_wiki.jpg',
                },
                {
                    id: 3,
                    "artistName": 'Jim Sarbh',
                    "artistImage": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZWh9pizDrPmAdE8zysqhJB94vwNRySS4Sg&usqp=CAU'
                },
                {
                    id: 4,
                    "artistName": 'Kalki Koechlin',
                    "artistImage": 'https://m.media-amazon.com/images/M/MV5BNzI4NDQyMjU2MF5BMl5BanBnXkFtZTgwMzc4ODEzOTE@._V1_.jpg'
                }
            ]
        },
        {
            id: 5,
            title: 'Mumbai Saga',
            language: 'Hindi',
            released: 'yes',
            releasedDate: '19-03-2021',
            imdb: '6.2',
            category: 'Movies',
            genre: ['Action and adventure', 'suspense'],
            imageUrl: 'https://stat2.bollywoodhungama.in/wp-content/uploads/2021/03/Mumbai-Saga-9.jpg',
            plot: 'MUMBAI SAGA is the story of a gangster (Amartya Rao) and his rivalry with a cop. Amartya Rao goes from living a simple life to that of a feared gangster in Mumbai during the \'90s.',
            trailer: 'https://www.youtube.com/watch?v=YTGO38DSIsc',
            trailerId: 'YTGO38DSIsc',
            artists: [
                {
                    id: 1,
                    "artistName": 'John Abraham',
                    "artistImage": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrXME-icP3YtyNcMjGw4X0HQjMNLwTUlDobyG5MoB1q5kHHe5'
                },
                {
                    id: 2,
                    "artistName": 'Kajal Aggarwal',
                    "artistImage": 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Kajal_Aggarwal_on_the_sets_of_Queen_Kannada_remake.jpg',
                },
                {
                    id: 3,
                    "artistName": 'Sunil Shetty',
                    "artistImage": 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/suniel-shetty-2291-09-09-2019-01-21-33.jpg?1'
                },
                {
                    id: 4,
                    "artistName": 'Emraan Hashmi',
                    "artistImage": 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR59uA62aCjOoUP0yzsx6K6ItlKtqW15lGCJqhk-vdB9aEHw6G4'
                }
            ]
        },
        {
            id: 6,
            title: 'Harry Potter 1',
            language: 'English',
            released: 'yes',
            releasedDate: '12-04-2002',
            duration: '128 minutes',
            imdb: '7.6',
            category: 'Kids',
            genre: ['drama', 'horror', 'suspense'],
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg',
            plot: 'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling. The film stars Daniel Radcliffe as Harry Potter, with Rupert Grint as Ron Weasley, and Emma Watson as Hermione Granger. Its story follows Harry\'s first year at Hogwarts School of Witchcraft and Wizardry as he discovers that he is a famous wizard and begins his education.',
            trailer: 'https://www.youtube.com/watch?v=VyHV0BRtdxo',
            trailerId: 'VyHV0BRtdxo',
            artists: [
                {
                    id: 1,
                    "artistName": 'Daniel Radcliffe',
                    "artistImage": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLQjqRAL2Gj8NGIt_bhmjaV3OfM73zIwC6JgTxGL6xBQqudDf'
                },
                {
                    id: 2,
                    "artistName": 'Emma Watson',
                    "artistImage": 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdR8EBtqfxKIj8-vazEROe6JEkpca-oJMaesCzmF3tni5KbwaW',
                },
                {
                    id: 3,
                    "artistName": 'Rupert Grint',
                    "artistImage": 'https://www.biography.com/.image/t_share/MTgxMDExNTAwNTc0NTE2NTg0/gettyimages-1042108258.jpg'
                },
                {
                    id: 4,
                    "artistName": 'Bonnie Wright',
                    "artistImage": 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTY8w3fYrItdVZTDnjcVvjei8s896Aqceb5TKkvyviNgxL9ddBT'
                }
            ]
        },
        {
            id: 7,
            title: 'The Conjuring',
            language: 'English',
            released: 'yes',
            releasedDate: '02-08-2013',
            imdb: '7.5',
            category: 'Movies',
            genre: ['horror', 'suspense'],
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Conjuring_poster.jpg',
            plot: 'The Conjuring is a 2013 American supernatural horror film directed by James Wan.',
            trailer: 'https://www.youtube.com/watch?v=k10ETZ41q5o',
            trailerId: 'k10ETZ41q5o',
            artists: [
                {
                    id: 1,
                    "artistName": 'Patrick Wilson',
                    "artistImage": 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuvmLbWaZ-xW8yh-x0U7LwzvfqgwfZt22zFaIezT7g0dbzFYBh'
                },
                {
                    id: 2,
                    "artistName": 'Vera Farmiga',
                    "artistImage": 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDcwaGtfKmtIrkeIQRheUgEtwVLUQF6dIcxIvzH3TYrCpTHIdX',
                },
            ]
        },
        {
            id: 8,
            title: 'Sonu Ke Titu Ki Sweety',
            language: 'Hindi',
            imdb: '7.1',
            release: 'yes',
            releasedDate: '23-02-2018',
            category: 'Movies',
            genre: ['comedy', 'drama'],
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/77/Sonu_Ke_Titu_Ki_Sweety_-_Movie_Poster.jpg',
        },
        {
            id: 9,
            title: 'Hanuman Immortal 2',
            language: 'Hindi',
            imdb: '4.4',
            category: 'Kids',
            genre: ['comedy', 'Action and adventure'],
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/812aG9gmUnL._SL1500_.jpg',
        },
    ])


    return (
        <Fragment>
            <Router>
                <div className='main-container'>
                    <Route exact path='/' render={(props) => <Home  {...props} releasedMovie={releasedMovie} setReleasedMovie={setReleasedMovie} upcomingMovie={upcomingMovie} />} />
                    <Route exact path='/detail/:id' render={(props) => <Details {...props} releasedMovie={releasedMovie} />} />
                </div>
            </Router>
        </Fragment>
    )
}
