import { CDN_URL } from '../utils/constants';

const ItemList = ({ items }) => {
	// console.log(items);
	return (
		<div>
			{items.map((item) => (
				<div
					className="p-2 m-2  border-b-2 border-gray-200 text-left flex justify-between"
					key={item.card.info.id}
				>
					<div className="w-9/12">
						<div>
							<span>{item.card.info.name}</span> <br />
							<span>₹ {item.card.info.price / 100}</span>
						</div>
						<p className="text-xs">{item.card.info.description}</p>
					</div>
					<div className="w-3/12">
						<img className="rounded" src={CDN_URL + item.card.info.imageId} />
						<button className="p-2 bg-green-500 absolute ml-14 -my-8 rounded-md text-xs font-bold">
							Add +
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;
