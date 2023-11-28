import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';
import axios from 'axios';


import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Slider from 'react-slick';




import Iconify from 'src/components/iconify';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { posts } from 'src/_mock/blog';
import PostCard from 'src/sections/blog/post-card';
import PostSearch from 'src/sections/blog/post-search';
import PostSort from 'src/sections/blog/post-sort';


import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';


// ----------------------------------------------------------------------

export default function AppView() {
  const [notifications, setNotifications] = useState([]);

  
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/notifications');
      setNotifications(response.data); 
    
    } catch (error) {
      console.error(error);
      
    }
  };
  fetchData();
}, []); 

const filteredNotifications = notifications.filter(notification => notification.status === 'scheduled');
const CurrentNotifications = notifications.filter(notification => notification.status === 'published');

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  return (
 
    <Container maxWidth="xl">
 <head>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
</head>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <PostSearch posts={posts} />
        <PostSort
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        />
      </Stack>

      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </Grid>

      <Grid container spacing={3}>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={CurrentNotifications.map((notification, index) => ({
              id: notification.notificationId,
              title: notification.title,
              description: notification.description,
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
              
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Notitifation Timeline"
            list={filteredNotifications.map((notification, index) => ({
              id: notification.notificationId,
              title: [`${notification.title}`],
              type: 'scheduled',
              time: faker.date.soon(),
            }))}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
