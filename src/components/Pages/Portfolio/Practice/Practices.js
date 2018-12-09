import React from 'react';
import './practice.css';

// importing project images
import TrainScheduler from '../../../../assets/images/train-scheduler.jpg';
import AnimalGifStatic from '../../../../assets/images/animal-gifstatic.jpg';
import CrystalCollector from '../../../../assets/images/crystal-collector.jpg';
import FlipACoin from '../../../../assets/images/flip-a-coin.png';
import LotteryDrawing from '../../../../assets/images/lottery-drawing.jpg';
import MovieSearch from '../../../../assets/images/movie-search.jpg';
import PsychicGame from '../../../../assets/images/psychic-game.jpg';
import StarWars from '../../../../assets/images/star-wars.jpg';
import StopWatch from '../../../../assets/images/stop-watch.jpg';
import TriviaGame from '../../../../assets/images/trivia-game.jpg';

const Practices = () => {
	return (
		<div className="row">
			<div className='col-md-12' id='practices'>
				<div className='practice-div'>
					{/* Train Scheduler */}
					<div className='practice'>
						<img className="group-img" src={TrainScheduler} alt="train scheduler"></img>
						<a href='https://phungdpham.github.io/train-scheduler/' target='_blank'>
							<div className='img-overlay-content'>
								<div className='app-name'>
									<h5 className='h5-text'>TrainScheduler</h5>
								</div>
							</div>
						</a>
					</div>
					
					{/* Trivia Game */}
					<div className='practice'>
						<img className="group-img" src={TriviaGame} alt="trivia game"></img>
						<a href='https://phungdpham.github.io/trivia-game/' target='_blank'>
							<div className='img-overlay-content'>
								<div className='app-name'>
									<h5 className='h5-text'>Trivia Game</h5>
								</div>
							</div>
						</a>
					</div>

					{/* Animal Gifstatic */}
					<div className='practice'>
						<img className="group-img" src={AnimalGifStatic} alt="animal Gifstatic"></img>
						<a href='https://phungdpham.github.io/animal-gifstatic/' target='_blank'>
							<div className='img-overlay-content'>
								<div className='app-name'>
									<h5 className='h5-text'>Animial Gifstatic</h5>
								</div>
							</div>
						</a>
					</div>

					{/* Star War Game */}
					<div className='practice'>
						<img className="group-img" src={StarWars} alt="star war"></img>
						<a href='https://phungdpham.github.io/star-wars-rpg-game/' target='_blank'>
							<div className='img-overlay-content'>
								<div className='app-name'>
									<h5 className='h5-text'>Star Wars RGP Game</h5>
								</div>
							</div>
						</a>
					</div>
					
					{/* Stop watch */}
					<div className='practice'>
						<img className="group-img" src={StopWatch} alt="stop watch"></img>
						<a href='https://phungdpham.github.io/stop-watch/' target='_blank'>
							<div className='img-overlay-content'>
								<div className='app-name'>
									<h5 className='h5-text'>Stop Watch</h5>
								</div>
							</div>
						</a>
					</div>

					{/* Movie Search */}
					<div className='practice'>
						<img className="group-img" src={MovieSearch} alt="movie search"></img>
						<a  href='https://phungdpham.github.io/movie-search/' target='_blank'>
							<div className='img-overlay-content'>
								<div className='app-name'>
									<h5 className='h5-text'>Movie Search</h5>
								</div>
							</div>
						</a>
					</div>

					{/* Lottery Number Drawing */}
					<div className='practice'>
						<img className="group-img" src={LotteryDrawing} alt="lottery number drawing"></img>
						<a href='https://phungdpham.github.io/lottery-number-drawing/' target='_blank'>
							<div className='img-overlay-content'>
								<div className='app-name'>
									<h5 className='h5-text'>Lottery Number Drawing</h5>
								</div>
							</div>
						</a>
					</div>

					{/* Flip a Coin */}
					<div className='practice'>
						<img className="group-img" src={FlipACoin} alt="flip a coin"></img>
						<a href='https://phungdpham.github.io/flip-a-coin/' target='_blank'>
							<div className='img-overlay-content'>
								<div className='app-name'>
									<h5 className='h5-text'>Flip a Coin Game</h5>
								</div>
							</div>
						</a>
					</div>
					{/* Crystal Collector */}
					<div className='practice'>
						<img className="group-img" src={CrystalCollector} alt="crystal collector"></img>
						<a href='https://phungdpham.github.io/crystals-collector/' target='_blank'>
							<div className='img-overlay-content'>
								<div className='app-name'>
									<h5 className='h5-text'>Crystal Collector</h5>
								</div>
							</div>
						</a>
					</div>
					{/* Psychic Game */}
					<div className='practice'>
						<img className="group-img" src={PsychicGame} alt="psychic game"></img>
						<a href='https://phungdpham.github.io/Psychic-Game/' target='_blank'>
							<div className='img-overlay-content'>
								<div className='app-name'>
									<h5 className='h5-text'>Psychic Game</h5>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Practices;