import type { Service } from '@/interfaces/service'

export const data: Array<Service> = [
  {
    id: 1,
    cover: '/images/services/corporate.png',
    title: 'Corporate Training',
    rating: 5,
    ratingCount: 8,
    price: 25,
    category: 'Beginner',
  },
  {
    id: 2,
    cover: '/images/services/counseling.png',
    title: 'Counseling',
    rating: 5,
    ratingCount: 15,
    price: 20,
    category: 'Intermediate',
  },
  {
    id: 3,
    cover: '/images/services/coaching.png',
    title: 'Coaching',
    rating: 4,
    ratingCount: 7,
    price: 30,
    category: 'Beginner',
  },
  {
    id: 4,
    cover: '/images/services/consulting.png',
    title: 'Consulting',
    rating: 4,
    ratingCount: 12,
    price: 30,
    category: 'Intermediate',
  }
]
