import React from 'react'
import UserActivityDataItem from '../UserActivityDataItem'

function UserActivityData({ data }) {
    return (
        <>
                 <div className='sportSee-activity'>
                    <UserActivityDataItem
                        userId={data.userId}
                        sessions={data.sessions}
                    />
                </div>
         </>
    )
};

export default UserActivityData