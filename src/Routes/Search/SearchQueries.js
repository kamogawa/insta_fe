import { gql } from "apollo-boost";

export const SEARCH = gql`
  query search($term: String!) {
    searchPost(term: $term) {
      files {
        url
      }
      likeCount
      commentCount
    }
    searchUser(term: $term) {
      avatar
      username
      isFollowing
      isSelf
    }
  }
`;