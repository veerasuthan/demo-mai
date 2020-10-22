import Numeric from './Numeric';
import Rating from './Rating';
import SingleSelect from './SingleSelect';

// Component mapping
export const ResponseTemplates = {
    'single': SingleSelect,
    'numeric': Numeric,
    'rating': Rating
}