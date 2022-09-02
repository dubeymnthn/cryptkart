import axios from 'axios';
import { useEffect, useState } from 'react';
import Coin from './Coin';

import './App1.css';

function App1() {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState('');
	useEffect(() => {
		axios
			.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=25&page=1&sparkline=false'
			)
			.then((res) => {
				setCoins(res.data);
			})
			.catch((error) => {
				alert(error.message);
			}, []);
	});

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filterCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);
	return (
		<div className="a">
		<div className="coin-app">
			<div className="coin-search">
				<h1 className="coin-text">Search a Currency</h1>
				<form>
					<input
						type="text"
						className="coin-input"
						onChange={handleChange}
						placeholder="Search"
					/>
				</form>
			</div>
			{/* <ul>
				<li>
					<p className="coin img">Image</p>
				</li>
				<li className="coin">
					<p>Name</p>
				</li>
				<li className="coin-symbol">
					<p>Symbol</p>
				</li>
				<li className="coin-price">
					<p>Price</p>
				</li>
				<li className="coin-volume">
					<p>Volume Of Coin</p>
				</li>
				<li className="coin rank">
					<p>Rank of Coin</p>
				</li>
				<li className="coin-percent">
					<p>Price Change in %</p>
				</li>
				<li className="coin-marketcap">
					<p>Market Cap Coin</p>
				</li>
			</ul> */}
			{filterCoins.map((coin) => {
				return (
					<Coin
						key={coin.id}
						name={coin.name}
						image={coin.image}
						symbol={coin.symbol}
						price={coin.current_price}
						volume={coin.total_volume}
						marketcap={coin.market_cap}
						rank={coin.market_cap_rank}
						priceChange={coin.price_change_percentage_24h}
					/>
				);
			})}
		</div>
		</div>
	);
}

export default App1;
