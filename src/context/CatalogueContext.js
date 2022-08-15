import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch(action.type){
    default:
      return state;
  }
}

const initialState = {
  products: [
    {
      id: 1,
      catId: 1,
      source : require('../../assets/model.png'),
      name : 'Stitch Detail Tunic Dress',
      price : 99.00,
      discounted : 88.00,
      sizes: ['XL', 'L', 'S', 'M'],
      reviews: [
        {star: 1, comment: 'Good'},
        {star: 3, comment: 'OK'},
        {star: 2, comment: 'Bad'}
      ],
      description: [
        'Soft',
        'Soft',
        'Soft',
        'Cotton'
      ],
      features: [
        'Strong',
        'Warm'
      ]
    },
    {
      id: 2,
      catId: 1,
      source : require('../../assets/model.png'),
      name : 'Stitch Detail Tunic Dress',
      price : 99.00,
      discounted : 88.00,
      sizes: ['XL', 'L', 'S', 'M'],
      reviews: [
        {star: 1, comment: 'Good'},
        {star: 3, comment: 'OK'},
        {star: 2, comment: 'Bad'}
      ],
      description: [
        'Soft',
        'Soft',
        'Soft',
        'Cotton'
      ],
      features: [
        'Strong',
        'Warm'
      ]
    },
    {
      id: 3,
      catId: 1,
      source : require('../../assets/model.png'),
      name : 'Stitch Detail Tunic Dress',
      price : 99.00,
      discounted : 88.00,
      sizes: ['XL', 'L', 'S', 'M'],
      reviews: [
        {star: 1, comment: 'Good'},
        {star: 3, comment: 'OK'},
        {star: 2, comment: 'Bad'}
      ],
      description: [
        'Soft',
        'Soft',
        'Soft',
        'Cotton'
      ],
      features: [
        'Strong',
        'Warm'
      ]
    },
    {
      id: 4,
      catId: 3,
      source : require('../../assets/model.png'),
      name : 'Stitch Detail Tunic Dress',
      price : 99.00,
      discounted : 88.00,
      sizes: ['XL', 'L', 'S', 'M'],
      reviews: [
        {star: 1, comment: 'Good'},
        {star: 3, comment: 'OK'},
        {star: 2, comment: 'Bad'}
      ],
      description: [
        'Soft',
        'Soft',
        'Soft',
        'Cotton'
      ],
      features: [
        'Strong',
        'Warm'
      ]
    },
  ],
  categories: [
    {id: 1, name: 'Men', products: 44, icon: require('../../assets/cat.png'), bg: require('../../assets/thumbnail.jpg')},
    {id: 2, name: 'Women', products: 60, icon: require('../../assets/cat.png'), bg: require('../../assets/thumbnail.jpg')},
    {id: 3, name: 'Clothing', products: 12, icon: require('../../assets/cat.png'), bg: require('../../assets/thumbnail.jpg')},
    {id: 4, name: 'Music', products: 6, icon: require('../../assets/cat.png'), bg: require('../../assets/thumbnail.jpg')},
    {id: 5, name: 'TV', products: 10, icon: require('../../assets/cat.png'), bg: require('../../assets/thumbnail.jpg')},
  ]
}

export const {Context, Provider} = createDataContext(
  reducer,
  {},
  initialState,
);