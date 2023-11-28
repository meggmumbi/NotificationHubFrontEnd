import { faker } from '@faker-js/faker';
import axios from 'axios'; 

// ----------------------------------------------------------------------


const postTitles = await fetchPostTitles();

async function fetchPostTitles() {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/notifications');
    return response.data;
  } catch (error) {
    console.error('Error fetching post titles:', error);
    return [];
  }
}
const filteredNotifications = postTitles.filter(notification => notification.status === 'pinned');

export const posts = filteredNotifications.map((title, index) => ({
  id: title.notificationId,
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: title.title,
  createdAt: faker.date.anytime(),
  view: faker.number.int(99999),
  comment: faker.number.int(99999),
  share: faker.number.int(99999),
  favorite: faker.number.int(99999),
  author: {
    name: title.publisher,
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));
