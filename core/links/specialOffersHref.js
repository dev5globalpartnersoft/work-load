import { SPECIAL_OFFERS_DISCOUNT_MIN, SPECIAL_OFFERS_DISCOUNT_MAX } from 'config';

export const specialOffersHref = {
  pathname: '/special-offers',
  query: {
    sort: 'discount_desc',
    discount_min: SPECIAL_OFFERS_DISCOUNT_MIN,
    discount_max: SPECIAL_OFFERS_DISCOUNT_MAX,
  },
};
