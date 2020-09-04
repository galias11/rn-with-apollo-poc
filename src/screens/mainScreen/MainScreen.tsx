// vendors
import React, { ReactElement, useCallback } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  ListRenderItem,
  Text,
  View,
} from 'react-native';
import { ApolloError } from '@apollo/client';

// components
import EpisodeCard from '../../components/episodeCard/EpisodeCard';

// styles
import styles from './MainScreen.styles';

// types
import Episode from '../../types/Episode';

interface MainScreenProps {
  error?: ApolloError;
  loading: boolean;
  episodes?: Episode[];
  refetch: () => void;
}

const MainScreen: React.FunctionComponent<MainScreenProps> = (props: MainScreenProps) => {
  const {
    error,
    loading,
    episodes,
    refetch,
  } = props;

  const renderEpisodeCard: ListRenderItem<Episode> = ({ item }) => <EpisodeCard episodeData={item} />;

  const handleRefetch = useCallback((): void => {
    refetch();
  }, [refetch]);

  const renderContent = (): ReactElement => {
    if (loading) {
      return (
        <View style={styles.transitionContainer}>
          <ActivityIndicator />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.transitionContainer}>
          <Text>An error has occurred while loading data!</Text>
        </View>
      );
    }

    if (!episodes || !episodes.length) {
      return (
        <View style={styles.transitionContainer}>
          <Text>No results where found</Text>
        </View>
      );
    }

    return (
      <View>
        <Button onPress={handleRefetch} title="Reload!" />
        <FlatList
          data={episodes}
          renderItem={renderEpisodeCard}
        />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      { renderContent() }
    </View>
  );
};

MainScreen.defaultProps = {
  error: undefined,
  episodes: [],
};

export default MainScreen;
