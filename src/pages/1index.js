import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import { localePersister } from '../translations';

const Index = () => {
  const { query: { lang } } = useRouter();

  useEffect(() => {
    const locale = lang ?? localePersister.get();
    window.location.replace(`/${locale}`);
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;