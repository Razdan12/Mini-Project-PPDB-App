import {gql} from '@apollo/client';

export const GET_USER = gql`
        query MyQuery {
            users {
                name
                image
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
                image
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


export const GET_MESSAGE = gql`
        query MyQuery {
            message {
            email
            message
            name
            phone
            subject
            id
            }
        }
  

`

export const GET_EDUCATIONS = gql`

        query MyQuery {
            educations {
            description
            education
            first_year
            last_year
            sub_description
            id
            }
        }
  
`

export const GET_EXPERIENCE = gql`
    query MyQuery {
        experience {
        description
        experience
        first_year
        id
        last_year
        workplace
        }
    }
  
`

export const GET_SKILLS = gql`
    query MyQuery {
        skills {
        name_skill
        id
        range
        }
    }
`


