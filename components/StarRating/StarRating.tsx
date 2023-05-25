import { useState, useEffect } from 'react';
import { starRatingService } from '../../service';

interface StarRatingProps {
	isEditable?: boolean;
	rating: number;
	setRating?: (rating: number) => void;
}

export const StarRating = ({ isEditable, rating, setRating, ...props }: StarRatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>([]);

	useEffect(() => {
		if (isEditable && setRating) {
			starRatingService.setEditable(isEditable);
			starRatingService.setterPropertyRating(setRating);
		}
		setRatingArray(starRatingService.constructRating(rating));
	}, [rating, isEditable, setRating]);


	return (
		<div {...props}>
			{ratingArray.map((raring, index) => (<span key={index}>{raring}</span>))}
		</div>
	);
};