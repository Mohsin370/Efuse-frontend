import React from 'react'
import styles from './profileImg.module.css'
export default function ProfileImg(props) {
    return (
        <div>
            <img src={props.imgUrl} className={styles.ImgMain} style={{height:'50px', width:'50px'}} alt="dp"/>
        </div>
    )
}
