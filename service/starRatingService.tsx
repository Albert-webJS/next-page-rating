import { KeyboardEvent } from 'react';
import StarIcon from '../assets/svg/star-icon.svg';
import styles from '../components/StarRating/StarRating.module.css';
import cn from 'classnames';

class StarRatingService {
	private ratingArray: JSX.Element[];
	private isEditable: boolean;
	private setRating: (rating: number) => void;

	constructor() {
		this.ratingArray = new Array(5).fill(<></>);
	}

	public constructRating(currentRating: number): JSX.Element[] {
		return this.ratingArray.map((_: JSX.Element, index: number) => {
			return (
				<span
					key={index}
					className={styles.lineRating}
					onMouseEnter={() => this.changeDisplay(index + 1)}
					onMouseLeave={() => this.changeDisplay(currentRating)}
					onClick={() => this.handleRatingElement(index + 1)}
					tabIndex={this.isEditable ? 0 : -1}
					onKeyDown={(event: KeyboardEvent<HTMLSpanElement>) =>
						this.isEditable && this.handleSpace(index + 1, event)
					}
				>
					<StarIcon
						className={cn(styles.star, {
							[styles.filled]: index < currentRating
						})}
					/>
				</span>
			);
		});
	}

	private changeDisplay(index: number) {
		if (!this.isEditable) return;

		this.ratingArray = this.constructRating(index);
	}

	private handleRatingElement(index: number) {
		if (!this.isEditable || !this.setRating) return;

		this.setRating(index);
	}

	private handleSpace(index: number, event: KeyboardEvent<HTMLSpanElement>) {
		if (event.code !== "Space" || !this.setRating) return;

		this.setRating(index);
	}

	public setEditable(isEditable: boolean) {
		this.isEditable = isEditable;
	}

	public setterPropertyRating(setRating: (rataing: number) => void) {
		this.setRating = setRating;
	}
}


export const starRatingService = new StarRatingService();