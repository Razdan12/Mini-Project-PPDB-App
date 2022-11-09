import {gql} from '@apollo/client';


export const UPDATE_PROFILE = gql`
mutation MyMutation(
    $name: String = "",
    $address: String = "", 
    $dob: date = "", 
    $email: String = "", 
    $noHp: String = "") {
    update_users_by_pk(pk_columns: {id: 1}, _set: {
        name: $name, 
        address: $address, 
        dob: $dob, 
        email: $email, 
        noHp: $noHp}) {
      id
      name
    }
  }

`

export const ADD_MESSAGE = gql`
    mutation addMessage(
      $email: String = "", 
      $message: String = "", 
      $name: String = "", 
      $phone: String = "", 
      $subject: String = "") {
      insert_message_one(object: {
        email: $email, 
        message: $message, 
        name: $name, 
        phone: $phone, 
        subject: $subject}) {
        email
        id
        message
        name
        phone
        subject
      }
    }
`

export const UPDATE_ABOUT = gql`
    mutation MyMutation(
      $description: String = "", 
      $link_cv: String = "", 
      $sub_title: String = "", 
      $title: String = "") {
      update_about_by_pk(pk_columns: {id: 1}, _set: {
        description: $description, 
        link_cv: $link_cv, 
        sub_title: $sub_title, 
        title: $title}) {
          description
          id
          title
      }
    }


`

export const UPDATE_IMAGE = gql`

    mutation MyMutation($image: String = "") {
      update_users(where: {}, _set: {
        image: $image}) {
        affected_rows
      }
    }


`

export const DELETE_MESSAGE = gql`
    mutation MyMutation($id: Int = 10) {
      delete_message_by_pk(id: $id) {
        id
        email
        message
      }
    }
`

export const UPLOAD_CV = gql`
mutation MyMutation($link_cv: String = "") {
  update_about_by_pk(pk_columns: {id: 1}, _set: {
    link_cv: $link_cv}) {
    link_cv
  }
}

`
export const DELETE_EDUCATION = gql`
  mutation MyMutation($id: Int = 10) {
    delete_educations_by_pk(id: $id) {
      id
    }
  }
`

export const DELETE_EXP = gql`
  mutation MyMutation($id: Int = 10) {
    delete_experience_by_pk(id: $id) {
      id
    }
  }
`

export const DELETE_SKL = gql`
  mutation MyMutation($id: Int = 10) {
    delete_skills_by_pk(id: $id) {
      id
    }
  }
`

export const ADD_EDUCATION = gql`
mutation MyMutation(
  $description: String = "", 
  $education: String = "", 
  $first_year: String = "", 
  $last_year: String = "", 
  $sub_description: String = "") {
    insert_educations_one(object: {
      description: $description, 
      education: $education, 
      first_year: $first_year, 
      last_year: $last_year, 
      sub_description: $sub_description}) {
      id
  }
}


`

export const ADD_EXPERIENCE = gql`
  mutation MyMutation(
    $description: String = "", 
    $experience: String = "", 
    $first_year: String = "", 
    $last_year: String = "", 
    $sub_desk: String = "", 
    $workplace: String = "") {
    insert_experience_one(object: {
      description: $description, 
      experience: $experience, 
      first_year: $first_year, 
      last_year: $last_year, 
      sub_desk: $sub_desk, 
      workplace: $workplace}) {
      id
    }
  }
`

export const ADD_SKILLS = gql`
mutation MyMutation(
  $name_skill: String = "", 
  $range: String = "") {
  insert_skills_one(object: {
    name_skill: $name_skill, 
    range: $range}) {
    id
  }
}
`

export const EDIT_EDUCATION = gql`
  mutation MyMutation(
    $id: Int = 10, 
    $description: String = "", 
    $education: String = "", 
    $first_year: String = "", 
    $last_year: String = "", 
    $sub_description: String = "") {
    update_educations_by_pk(pk_columns: {id: $id}, _set: {
      description: $description, 
      education: $education, 
      first_year: $first_year, 
      last_year: $last_year, 
      sub_description: $sub_description}) {
      id
      education
      first_year
    }
  }
`