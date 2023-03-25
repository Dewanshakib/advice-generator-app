import React, { useEffect, useState } from 'react'
import DividerD from "../../assets/pattern-divider-desktop.svg"
import DividerM from "../../assets/pattern-divider-desktop.svg"
import Dice from "../../assets/icon-dice.svg"
import axios from 'axios'


const Advice = () => {
    const [text,setText] = useState([])
    const getAdvice = () => {
        axios.get("https://api.adviceslip.com/advice").then((res) => {
            setText(res.data.slip)
        })
    }
    useEffect(() => {
        getAdvice()
    },[])
   
  return (
    <div>
        <div className="w-full h-screen font-Manrope bg-Dark-Blue grid place-items-center">
            <div className="relative bg-Dark-Grayish-Blue w-[360px] h-[370px] rounded-2xl lg:w-[600px] lg:h-[340px]">
                <div className="text-center px-4 mt-12 lg:px-8">
                    <p className='text-Neon-Green uppercase tracking-[4px] text-xs mb-10 lg:mb-8 lg:text-sm lg:tracking-[6px]'>Advice # {text.id}</p>
                    <h4 className='text-[22px] h-44 text-Light-Cyan lg:h-[160px] lg:text-2xl'>“{text.advice}”</h4>
                </div>
                <div className="grid place-items-center">
                    <img src={DividerM} alt="divider" className='w-4/5 h-4 lg:hidden'/>
                    <img src={DividerD} alt="divider" className='hidden lg:block'/>
                </div>
                <button onClick={getAdvice} className="absolute top-[21rem] left-[9.6rem] grid place-items-center w-14 h-14 bg-Neon-Green duration-100 hover:outline-dotted hover:outline-Neon-Green rounded-full lg:top-[19.3rem] lg:left-[17rem]">
                    <img src={Dice} alt="dice" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Advice