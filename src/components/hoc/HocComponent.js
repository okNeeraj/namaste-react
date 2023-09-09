import { useState } from 'react';
import Card, { HocCard } from "./Card";

const HocComponent = () => {
	const [isAuthenticate, setIsAuthenticate] = useState(true);
	const MyHocCard = HocCard(Card);
	return (
		isAuthenticate ? <MyHocCard /> : <Card />
	)
}

export default HocComponent;
