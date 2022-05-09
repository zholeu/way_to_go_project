import React  from "react";
import { useState } from "react";
import './HeroSection.css';
import {Button} from "./Button";
import '../App.css';
import SearchBar from "./SearchBar";


const HeroSection = ({ type }) => {


    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Путешествуй с нами </h1>
            <p> Приглашаем в незабываемые приключения </p>


            <SearchBar/>

            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--medium'
                >
                    Найти маршрут
                </Button>

            </div>

            {/*<div className="headerSearchItem">*/}
            {/*    <button className="headerBtn" onClick={handleSearch}>*/}
            {/*        Search*/}
            {/*    </button>*/}
            {/*</div>*/}

        </div>

        );

}

export default HeroSection;

