import React, { useState } from 'react';
import ProfileImg from '../profileImg/profileImg';
import styles from './statusInputCard.module.css';
import { Button } from 'react-bootstrap';

export default function StatusInputCard(props) {
    const imgUrl = "https://res.cloudinary.com/khawaja/image/upload/v1631783754/cxuifpxdgokktcwfxipn.jpg"
    const [status, setStatus] = useState('')

    const getStatusInput = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div>
            <div className={styles.InputCardcontainer}>
                <div className="d-flex justify-content-between pt-2 col-md-11 m-auto">
                    <div>
                        <ProfileImg imgUrl={imgUrl} size="lg"></ProfileImg>
                    </div>
                    <textarea className={styles.statusInputField} placeholder="What is on your mind?" onChange={getStatusInput} value={status} />
                </div>
                <hr />
                <div className="d-flex justify-content-between col-md-11 m-auto mt-3">
                    <div><p className={styles.tag}>Photo/Video</p></div>
                    <div><Button onClick={() => { props.onsubmit(status); setStatus('') }} disabled={!status} >Post It</Button></div>
                </div>
            </div>
        </div>
    )
}
