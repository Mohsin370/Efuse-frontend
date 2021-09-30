import React, { useState } from 'react';
import StatusInputCard from '../components/statusInputCard/statusInputCard';
import FeedPost from '../components/feedpost/feedPost';

export default function Feed() {
    const [status, setStatus] = useState([])

    const onSubmitStatus = (submitStatus) => {
        let statusArray = [...status,submitStatus]
        setStatus(statusArray)
    }

    return (
        <div>
            <StatusInputCard onsubmit={onSubmitStatus}></StatusInputCard>
            {status.map((item, index) => {
                return <FeedPost postContent={item} key={index}></FeedPost>
            })
            }
        </div>
    )
}
