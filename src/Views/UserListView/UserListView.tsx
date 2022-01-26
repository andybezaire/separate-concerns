import React, { useContext } from 'react';

type UserListViewProps = {
    users: string[]
}

export function UserListView({ users }: UserListViewProps) {

    return (
        <div>
            <ul>
                {users.map(user => <div key={user}>{user}</div>)}
            </ul>
        </div>
    )
}

export default UserListView;