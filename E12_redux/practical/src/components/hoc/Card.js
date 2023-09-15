import Button from "./Button";

const Card = () => {
	return (
		<div className="mt-3 n-card">
			<h5>Iam a Card</h5>
			<button className="btn btn-primary mt-3	">Go to Dashboard</button>
		</div>
	)
}

export const HocCard = (Card) => {
	return () => {
		return (
			<div className="card m-4" style={{ width: 300, height: 200 }}>
				<div className="card-body">
					<h4 className="card-heading">I am a HOC Card</h4>
					<Card />
				</div>
			</div>
		)
	}
}

export default Card;
