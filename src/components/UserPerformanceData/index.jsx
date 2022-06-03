import React from 'react'
import UserPerformanceItem from '../UserPerformanceItem'

function UserPerformanceData({ perfData, performance }) {
    return (
        <>
                <div className='sportSee-performance'>
                    <UserPerformanceItem
                        userId={perfData.userId}
                        kind={perfData.kind}
                        perfData={perfData.data}
                        performance={performance}
                    />
                </div>
        </>
    )
};

export default UserPerformanceData