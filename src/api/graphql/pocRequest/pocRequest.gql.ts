// vendors
import { gql } from '@apollo/client';

const RICK_AND_MORTY_EPISODES = gql`
  query GetEpisodes {
    episodes {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export default RICK_AND_MORTY_EPISODES;
