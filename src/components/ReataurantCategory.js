import ItemList from './ItemList';

const ReataurantCategory = ({ data }) => {
	// console.log(data);
	return (
		<div>
			{/* Accordian Header */}
			<div className="w-6/12 bg-gray-50 shadow-md p-4 m-auto my-3">
				<div className=" flex justify-between">
					<span className="font-semibold text-lg">
						{data.title} ({data.itemCards.length})
					</span>
					<span>🔽</span>
				</div>
				{/* Accordian body */}
				<div>
					<ItemList items={data.itemCards} />
				</div>
			</div>
		</div>
	);
};

export default ReataurantCategory;
