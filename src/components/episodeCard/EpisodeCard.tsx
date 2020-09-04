// vendors
import React from 'react';
import { Text, View } from 'react-native';

// styles
import styles from './EpisodeCard.styles';

// types
import Episode from '../../types/Episode';

interface EpisodeCardProps {
  episodeData: Episode
}

const EpisodeCard: React.FunctionComponent<EpisodeCardProps> = (props: EpisodeCardProps) => {
  const { episodeData } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.episodeText}>{episodeData.episode}</Text>
      <Text style={styles.nameText}>{episodeData.name}</Text>
      <Text style={styles.dateText}>{episodeData.air_date}</Text>
    </View>
  );
};

export default EpisodeCard;
