import type { Product } from './types';

export const products: Product[] = [
  {
    ID: '1',
    name: 'Stores',
    expanded: true,
  }, {
    ID: '1_1',
    categoryId: '1',
    name: 'Super Mart of the West',
    expanded: true,
  }, {
    ID: '1_1_1',
    categoryId: '1_1',
    name: 'Video Players',
  }, {
    ID: '1_1_1_1',
    categoryId: '1_1_1',
    name: 'HD Video Player',
    image: '/images/1.png',
    price: 220,
  }, {
    ID: '1_1_1_2',
    categoryId: '1_1_1',
    name: 'SuperHD Video Player',
    image: '/images/2.png',
    price: 270,
  }, {
    ID: '1_1_2',
    categoryId: '1_1',
    name: 'Televisions',
    expanded: true,
  }, {
    ID: '1_1_2_1',
    categoryId: '1_1_2',
    name: 'SuperLCD 42',
    image: '/images/7.png',
    price: 1200,
  }, {
    ID: '1_1_2_2',
    categoryId: '1_1_2',
    name: 'SuperLED 42',
    image: '/images/5.png',
    price: 1450,
  }, {
    ID: '1_1_2_3',
    categoryId: '1_1_2',
    name: 'SuperLED 50',
    image: '/images/4.png',
    price: 1600,
  }, {
    ID: '1_1_2_4',
    categoryId: '1_1_2',
    name: 'SuperLCD 55',
    image: '/images/6.png',
    price: 1750,
  }, {
    ID: '1_1_2_5',
    categoryId: '1_1_2',
    name: 'SuperLCD 70',
    image: '/images/9.png',
    price: 4000,
  }, {
    ID: '1_1_3',
    categoryId: '1_1',
    name: 'Monitors',
  }, {
    ID: '1_1_3_1',
    categoryId: '1_1_3',
    name: '19"',
  }, {
    ID: '1_1_3_1_1',
    categoryId: '1_1_3_1',
    name: 'DesktopLCD 19',
    image: '/images/10.png',
    price: 160,
  }, {
    ID: '1_1_4',
    categoryId: '1_1',
    name: 'Projectors',
  }, {
    ID: '1_1_4_1',
    categoryId: '1_1_4',
    name: 'Projector Plus',
    image: '/images/14.png',
    price: 550,
  }, {
    ID: '1_1_4_2',
    categoryId: '1_1_4',
    name: 'Projector PlusHD',
    image: '/images/15.png',
    price: 750,
  },
];
