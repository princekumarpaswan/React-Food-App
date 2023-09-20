import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ReataurantCategory from './ReataurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);

	const [showIdex, setShowIndex] = useState(1);

	if (!resInfo) {
		return <Shimmer />;
	}
	// destruvturing the API data
	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[0]?.card?.card?.info;

	// Item cards
	// const { itemCards } =
	// 	resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

	// console.log(
	// 	'This is item card',
	// 	resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
	// );

	const categories =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(c) =>
				c.card?.card?.['@type'] ===
				'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
		);

	// console.log(categories);

	return (
		<div className="menu text-center">
			<h1 className="font-bold my-6 text-2xl">{name}</h1>
			<p className="font-bold text-lg">
				{cuisines.join(', ')} - {costForTwoMessage}
			</p>
			{/* categories accordian */}
			{categories.map((category, index) => (
				// Controlled Component
				<ReataurantCategory
					key={category?.card?.card?.title}
					data={category?.card?.card}
					showItems={index === showIdex && true}
					setShowIndex={() => setShowIndex(index)}
				/>
			))}
		</div>
	);
};

export default RestaurantMenu;
