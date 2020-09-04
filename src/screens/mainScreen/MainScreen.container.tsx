// vendors
import React from 'react';
import { useQuery } from '@apollo/client';

// api
import RICK_AND_MORTY_EPISODES from '../../api/graphql/pocRequest/pocRequest.gql';

// screens
import MainScreen from './MainScreen';

// types
import Episode from '../../types/Episode';

const MainScreenContainer: React.FunctionComponent<{}> = () => {
  const {
    loading,
    error,
    data,
    refetch,
  } = useQuery<{ episodes: { results: Episode[] }}>(RICK_AND_MORTY_EPISODES, { nextFetchPolicy: 'network-only' });

  return <MainScreen error={error} loading={loading} episodes={data?.episodes?.results} refetch={refetch} />;
};

export default MainScreenContainer;
