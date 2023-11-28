import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Notification',
    path: '/notifications',
    icon: icon('ic_notification'),
  }, 
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  }, 
  {
    title: 'Feedback',
    path: '/feedback',
    icon: icon('ic_feedback'),
  }, 
  
];

export default navConfig;
