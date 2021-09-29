import React from 'react';
import StatusInputCard from '../components/statusInputCard/statusInputCard';
import FeedPost from '../components/feedpost/feedPost';

export default function feed() {
    return (
        <div>
            <StatusInputCard></StatusInputCard>
            <FeedPost></FeedPost>
        </div>
    )
}
