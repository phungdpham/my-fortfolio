import React from 'react';
import './portfolio.css';

// importing project images
import TrainScheduler from '../../../assets/images/train-scheduler.jpg';
import AnimalGifStatic from '../../../assets/images/animal-gifstatic.jpg';
import CrystalCollector from '../../../assets/images/crystal-collector.jpg';
import FlipACoin from '../../../assets/images/flip-a-coin.png';
import LotteryDrawing from '../../../assets/images/lottery-drawing.jpg';
import MovieSearch from '../../../assets/images/movie-search.jpg';
import PsychicGame from '../../../assets/images/psychic-game.jpg';
import StarWars from '../../../assets/images/star-wars.jpg';
import StopWatch from '../../../assets/images/stop-watch.jpg';
import TriviaGame from '../../../assets/images/trivia-game.jpg';

const Portfolio = () => {
    return (
        <div className="container" style={{"margin-bottom": "25%"}}>
            {/* Heading */}
            <div className="p-3 bg-white text-dark mt-3">
                <div className="row my-2 mx-0" style="border-bottom: 2px solid grey">
                    <h2 className="col-md-12 font-weight-bold text-info pb-2">Portfolio</h2>
                </div>
    
                <div className="row">
                    {/* Train Scheduler */}
                    <div className="col-md-4 text-center my-3">
                            <div className="card">
                                <img className="card-img-top project-img" src={TrainScheduler} alt="train scheduler"></img>
                                <a href='https://phungdpham.github.io/train-scheduler/' target='_blank'>
                                    <div className='card-body'>
                                        <h5 className='card-title'>Train Scheduler</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
    
                    {/* Animal Gifstatic */}
                    <div className="col-md-4 text-center my-3">
                        <div className="card">
                            <img className="card-img-top project-img" src={AnimalGifStatic} alt="animal Gifstatic"></img>
                            <a href='https://phungdpham.github.io/animal-gifstatic/' target='_blank'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Animial Gifstatic</h5>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    {/* Star War Game */}
                    <div className="col-md-4 text-center my-3">
                        <div className="card">
                            <img className="card-img-top project-img" src={StarWars} alt="star war"></img>
                            <a href='https://phungdpham.github.io/star-wars-rpg-game/' target='_blank'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Star Wars RGP Game</h5>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    {/* Movie Search */}
                    <div className="col-md-4 text-center my-3">
                        <div className="card">
                            <img className="card-img-top project-img" src={MovieSearch} alt="movie search"></img>
                            <a href='https://phungdpham.github.io/movie-search/' target='_blank'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Movie Search</h5>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    {/* Lottery Number Drawing */}
                     <div className="col-md-4 text-center my-3">
                        <div className="card">
                            <img className="card-img-top project-img" src={LotteryDrawing} alt="lottery number drawing"></img>
                            <a href='https://phungdpham.github.io/lottery-number-drawing/' target='_blank'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Lottery Number Drawing</h5>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    {/* Flip a Coin */}
                    <div className="col-md-4 text-center my-3">
                        <div className="card">
                            <img className="card-img-top project-img" src={FlipACoin} alt="flip a coin"></img>
                            <a href='https://phungdpham.github.io/flip-a-coin/' target='_blank'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Flip a Coin Game</h5>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    {/* Crystal Collector */}
                     <div className="col-md-4 text-center my-3">
                        <div className="card">
                            <img className="card-img-top project-img" src={CrystalCollector} alt="crystal collector"></img>
                            <a href='https://phungdpham.github.io/crystals-collector/' target='_blank'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Crystal Collector</h5>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    {/* Psychic Game */}
                    <div className="col-md-4 text-center my-3">
                        <div className="card">
                            <img className="card-img-top project-img" src={PsychicGame} alt="psychic game"></img>
                            <a href='https://phungdpham.github.io/Psychic-Game/' target='_blank'>
                                <div className='card-body'>
                                    <h5 className='card-title'>psychic game</h5>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    {/* Stop watch */}
                    <div className="col-md-4 text-center my-3">
                        <div className="card">
                            <img className="card-img-top project-img" src={StopWatch} alt="stop watch"></img>
                            <a href='https://phungdpham.github.io/stop-watch/' target='_blank'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Stop Watch</h5>
                                </div>
                            </a>
                        </div>
                    </div>
    
                    {/* Trivia Game */}
                    <div className="col-md-4 text-center my-3">
                        <div className="card">
                            <img className="card-img-top project-img" src={TriviaGame} alt="trivia game"></img>
                            <a href='https://phungdpham.github.io/trivia-game/' target='_blank'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Trivia Game</h5>
                                </div>
                            </a>
                        </div>
                    </div>
    
                </div>
    
            </div>
        </div>
    )
}

export default Portfolio;