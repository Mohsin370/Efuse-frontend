import React from 'react'
import styles from './profileImg.module.css'
export default function ProfileImg(props) {
    return (
        <div>
            <img src={props.imgUrl} className={styles.ImgMain} style={  props.size ==='lg'? {height:'50px', width:'50px'}: {height:'40px', width:'40px'} } alt="dp"/>
        </div>
    )
}
