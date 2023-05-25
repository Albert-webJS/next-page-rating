import { useState, useEffect, KeyboardEvent } from 'react';
import StarIcon from '../../assets/svg/star-icon.svg';
import styles from './StarRating.module.css';
import cn from 'classnames';

interface StarRatingProps {
	isEditable?: boolean;
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

	const constructRating = (currentRating: number): void => {
		const updatedArray = ratingArray.map((_: JSX.Element, index: number) => {
			return (
				<span
					className={styles.lineRating}
					onMouseEnter={() => changeDisplay(index + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => handleClick(index + 1)}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(event: KeyboardEvent<HTMLSpanElement>) => isEditable && handleSpace(index + 1, event)}
				>
					<StarIcon
						className={cn(styles.star, {
							[styles.filled]: index < currentRating
						})}
					/>
				</span>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (index: number) => {
		if (!isEditable) return;

		constructRating(index);
	};

	const handleClick = (index: number) => {
		if (!isEditable || !setRating) return;

		setRating(index);
	};

	const handleSpace = (index: number, event: KeyboardEvent<HTMLSpanElement>) => {
		if (event.code !== "Space" || !setRating) return;

		setRating(index);
	};

	return (
		<div {...props}>
			{ratingArray.map((raring, index) => (<span key={index}>{raring}</span>))}
		</div>
	);
};