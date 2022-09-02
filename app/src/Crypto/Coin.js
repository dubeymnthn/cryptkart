import React from 'react';
import './coin.css';

const Coin = ({
	name,
	image,
	symbol,
	price,
	volume,
	rank,
	priceChange,
	marketcap,
}) => {
	return (
        <div>
            
		<div className="coin-cointainer">
			
			<div className="coin-row">
				<div className="coin">
					<img src={image} alt="crypto" />
					<h1>{name}</h1>
					<p className="coin-symbol">{symbol}</p>
				</div>
				<div className="coin-data">
					<p className="coin-price">₹{price}</p>
					<p className="coin-volume">₹{volume.toLocaleString()}</p>
					<p className="coin-rank">{rank}</p>

					{priceChange > 0 ? (
						<p className="coin-percent red">{priceChange.toFixed(2)}%</p>
					) : (
						<p className="coin-percent green">{priceChange.toFixed(2)}%</p>
					)}
					<p className="coin-marketcap">
						Mkt Cap:₹{marketcap.toLocaleString()}
					</p>
				</div>
			</div>
		</div>
        </div>
	);
};

export default Coin;
