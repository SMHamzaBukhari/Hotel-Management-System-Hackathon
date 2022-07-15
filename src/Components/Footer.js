import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

function Footer() {
    return (
        <footer className="border-top bg-white mt-5">
         
            <div className="py-3 mx-5 d-flex flex-row flex-wrap text-center align-items-center justify-content-around border-bottom">
                <div>
                    <h5>Designed by Hamza Bukhari</h5>
                    <div>
                       
                    </div>
                </div>
                <div>
                    <h5>Connect With Us</h5>
                    <div>
                        <a target="_blank" href="https://www.facebook.com/">
                                 <FaFacebookSquare className="connect text-dark" /></a>
                             <a target="_blank" href="https://www.linkedin.com/">
                                 <FaLinkedin className="connect text-dark" /></a>
                             <a target="_blank" href="https://www.instagram.com/">
                                 <AiFillInstagram className="connect text-dark" /></a>
                             <a target="_blank" href="https://www.youtube.com/watch?v=ScDWrogElmo&list=PLJT9n0q3md18xl4PWqzqNFUEp9DbBmogZ">
                                <IoLogoYoutube className="connect text-dark" /></a>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-white d-flex d-row justify-content-around align-items-center flex-wrap">
                <div>
                    <p className="text-center pt-3">&copy; 2022 Hotel Management App. All Right Reserved</p>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer