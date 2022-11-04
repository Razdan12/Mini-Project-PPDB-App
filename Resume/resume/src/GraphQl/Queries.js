import {gql} from '@apollo/client';

export const GET_USER = gql`
        query MyQuery {
            users {
            name
            }
            about {
            title
            }
        }
  
`