import React from 'react';
import { UserGrid } from './UserGrid/UserGrid'
import { UserList } from './UserList/UserList'
import { Loading } from './Loading/Loading'


const View = ({ isListView, users, isLoading }) => (
    <div>
        {isLoading ? < Loading /> : null}
        {isListView
            ? <UserList users={users} />
            : <UserGrid data={users} />}
    </div>
);

export { View }