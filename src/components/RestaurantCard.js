import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
	const { resData } = props;

	const {
		cloudinaryImageId,
		name,
		avgRating,
		cuisines,
		costForTwo,
		deliveryTime,
	} = resData.info;

	return (
		<div className="m-4 p-4 w-60 bg-red-100 rounded">
			<img
				className="rounded"
				alt="res-logo"
				src={CDN_URL + cloudinaryImageId}
			/>
			<h3 className="font-bold py-2">{name}</h3>
			<h4>{cuisines.join(', ')}</h4>
			<h4>{avgRating} stars</h4>
			<h4>₹{costForTwo / 100} FOR TWO</h4>
			<h4>{deliveryTime} minutes</h4>
		</div>
	);
};

export default RestaurantCard;
