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

export const GET_ABOUT = gql`
        query MyQuery {
            users {
                name
                noHp
                email
                dob
                address
            }
            about {
                description
                link_cv
                sub_title
                title
            }
        }
  
`

export const GET_RESUME = gql`

        query MyQuery {
            educations {
                education
                first_year
                last_year
                sub_description
                description
            }
            experience {
                experience
                first_year
                last_year
                sub_desk
                description
                workplace
            }
            skills {
                range
                name_skill
            }
        }
        
`

export const GET_SERVICE = gql`
        query MyQuery {
            service {
                description
                name
            }
        }
  

`