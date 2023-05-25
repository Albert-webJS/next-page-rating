import { useState, useEffect } from 'react';
import StarIcon from '../../assets/svg/star-icon.svg';
import styles from './StarRating.module.css';
import cn from 'classnames';

interface StarRatingProps {
	isEditable?: false;
	rating: number;
	setRating?: (rating: number) => void;
}

const initialCollection = new Array(5).fill(<></>);

export const StarRating = (
	{ isEditable, rating, setRating, ...props }: StarRatingProps
): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(initialCollection);

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((rating: JSX.Element, index: number) => {
			return (
				<StarIcon
					className={cn(styles.star, {
						[styles.filled]: index < currentRating
					})}
				/>
			);
		});
		setRatingArray(updatedArray);
	};

	return (
		<div {...props}>
			{ratingArray.map((raring, index) => (<span key={index}>{raring}</span>))}
		</div>
	);
};