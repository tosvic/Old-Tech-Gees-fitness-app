import React from 'react'
import styles from './Gender.module.css'
import { IoMale } from "react-icons/io5";
import { MdSkipNext } from "react-icons/md";
import { IoFemaleSharp } from "react-icons/io5";




const Gender = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.text}>
                    <h4 className={styles.tellUs}>TELL US ABOUT YOURSELF!</h4>
                    <p className={ styles.better}>TO GIVE YOU A BETTER EXPERIENCE WE NEED TO KNOW YOUR GENDER</p>
                </div>

                <div className={styles.picCont}>
                    <div className={styles.circle}>
                        <div className={styles.maleIcon}><IoMale /></div>
                        <p className={styles.male}>Male </p>
                    </div>

                    <div className={styles.circle2}>
                        <div className={styles.femaleIcon}><IoFemaleSharp /></div>
                        <p className={styles.female}>Female </p>
                    </div>
               
                <div className="btn">
                <button>Next </button>
                <MdSkipNext />
                </div>
                </div>
            </div>
        </>
    )
}

export default Gender
