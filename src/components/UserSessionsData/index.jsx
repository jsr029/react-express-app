import React from 'react'
import UserSessionsDataItem from '../UserSessionsDataIem'

function UserSessionsData({ data }) {
    return (
        <>
                 <div className='sportSee-sessions'>
                    <UserSessionsDataItem
                        userId={data.userId}
                        sessions={data.sessions}
                    />
                </div>
         </>
    )
};

export default UserSessionsData