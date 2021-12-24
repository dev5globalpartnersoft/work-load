import { HomePage } from 'modules/main/layouts/HomePage';

// Api
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

export default HomePage;

export async function getStaticProps({ locale }) {
  const queryClient = new QueryClient();

  return {
    props: {
      queryDehydratedState: dehydrate(queryClient),
      messages: require(`languages/${locale}/pages/home.js`).home,
    },
    revalidate: 300,
  };
}
