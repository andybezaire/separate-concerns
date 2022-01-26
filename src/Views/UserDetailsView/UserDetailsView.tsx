import React, { useContext } from 'react';
import { useObjectContext } from '../../Libraries/ObservableObject'
import { SelectedUserContext } from '../../Models/SelectedUser'

type UserDetailsViewProps = {
    name: string,
    address: string,
    phone: string,
}

export function UserDetailsView({ name, address, phone }: UserDetailsViewProps) {

    return (
        <div className="VStack">
            <div>{name}</div>
            <div>{address}</div>
            <div>{phone}</div>
        </div>
    )
}

function O_UserDetailsView() {
    const user = useObjectContext(SelectedUserContext)

    return (
        <div className="VStack">
            <div>{user.name}</div>
            <div>{user.address}</div>
            <div>{user.phone}</div>
        </div>
    )
}

export default O_UserDetailsView;