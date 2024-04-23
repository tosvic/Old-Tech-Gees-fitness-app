import React from 'react'
import styles from './Gender.module.css'
import { IoMale } from "react-icons/io5";
import { MdSkipNext } from "react-icons/md";
import { IoFemaleSharp } from "react-icons/io5";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Gender = () => {
    const [gender, setGender] = useState(null)
    const [color, setColor] = useState("red")
    const navigate = useNavigate()

    const handleChange = (event) => {
        setGender(event.target.value)
        setColor("red")
    }

    const handleNext = () => {
        if (gender) {
            navigate.push('/nextpage')
        }


    }
    return (
        <>
            <div className={styles.main}>
                <div className={styles.text}>
                    <h4 className={styles.tellUs}>TELL US ABOUT YOURSELF!</h4>
                    <p className={styles.better}>TO GIVE YOU A BETTER EXPERIENCE WE NEED TO KNOW YOUR GENDER</p>
                </div>

                <div className={styles.picCont}>
                    <div className={`${styles.circle} ${styles.gender === "male" ? styles.males : styles.female} }`}
                        onChange={handleChange} >
                        <div className={styles.maleIcon}><IoMale /></div>
                            <p className={styles.male}>Male </p>
                        </div>

                        <div className={styles.circle2}>
                            <div className={styles.femaleIcon}><IoFemaleSharp /></div>
                            <p className={styles.female}>Female </p>
                        </div>
                    </div>

                    <div className="btn">
                        <button>Next </button>
                        <MdSkipNext />
                    </div>
                </div>
            </>
            )
}

            export default Gender
