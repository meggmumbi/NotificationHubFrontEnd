import { Helmet } from 'react-helmet-async';

import { NotificationView } from 'src/sections/notifications';

// ----------------------------------------------------------------------

export default function NotificationPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet>

      <NotificationView />
    </>
  );
}
