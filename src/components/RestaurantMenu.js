import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ReataurantCategory from './ReataurantCategory';

const RestaurantMenu = () => {
	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);

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

			{/* <h2>Menu</h2>
			<ul>
				{itemCards.map((item) => (
					<li key={item.card.info.id}>
						{item.card.info.name} - ₹
						{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
					</li>
				))}
				
			</ul> */}
			{/* categories accordian */}
			{categories.map((category) => (
				<ReataurantCategory data={category?.card?.card} />
			))}
		</div>
	);
};

export default RestaurantMenu;
