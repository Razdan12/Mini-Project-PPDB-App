import {gql} from '@apollo/client';

export const UPDATE_PROFILE = gql`
    mutation MyMutation(
        $name: String = "", 
        $id: Int = 10, 
        $address: String = "", 
        $dob: date = "", 
        $email: String = "", 
        $image: String = "", 
        $noHp: String = "")
        {

        update_users_by_pk(
            pk_columns: {id: 1},
             _set: {
                name: $name, 
                address: $address, 
                dob: $dob, 
                email: $email, 
                image: $image, 
                noHp: $noHp}) {
        id
        }
    }




`