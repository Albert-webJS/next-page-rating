import { FirstLevelMenu, TopLevelCategory } from '../interfaces';
import CoursesIcon from '../assets/svg/courses-icon.svg';
import ServiceIcon from '../assets/svg/service-icon.svg';
import BookIcon from '../assets/svg/books-icon.svg';
import ProductIcon from '../assets/svg/products-svg.svg';


export const FIRST_LEVEL_MENU: FirstLevelMenu[] = [
	{ route: 'courses', name: 'Courses', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Services', icon: <ServiceIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Books', icon: <BookIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Products', icon: <ProductIcon />, id: TopLevelCategory.Products }
];

