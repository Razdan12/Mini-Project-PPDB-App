import {gql} from '@apollo/client';

export const UPDATE_PROFILE = gql`
mutation MyMutation(
    $name: String = "",
    $address: String = "", 
    $dob: date = "", 
    $email: String = "", 
    $image: String = "", 
    $noHp: String = "") {
    update_users_by_pk(pk_columns: {id: 1}, _set: {
        name: $name, 
        address: $address, 
        dob: $dob, 
        email: $email, 
        image: $image, 
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