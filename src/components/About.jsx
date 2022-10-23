import React from 'react';
import { NavLink } from 'react-router-dom';
import appleImage from "../images/apple.png"


import {motion} from 'framer-motion';
import { pageAnimation} from "./Animation"
const About = () => {
    return (
        <motion.div exit = "exit" variants={pageAnimation} initial ="hidden" animate = "show">
<div className="container py-5 my-5">
    <div className="row">
        <div className="col-md-6">
            <h1 className = "text-primary fw-bold mb-4">About Us</h1>
            <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, accusantium corporis possimus labore repellat velit, iste ipsam eum at eius quam saepe fugiat, earum in corrupti aperiam! Quia repudiandae quae eum repellendus asperiores error illum sed ex libero? Illum sapiente facere amet fugiat magni commodi eligendi harum suscipit, voluptates dignissimos, sit corporis itaque ratione reprehenderit perspiciatis natus impedit voluptas. Nam itaque veniam tenetur et laborum minima porro libero! Error eum cum doloremque nihil officiis labore facilis iste. Explicabo temporibus ex et quae, exercitationem, voluptate quam minima cum voluptas porro sunt dignissimos officia provident mollitia neque enim quasi, accusantium consequuntur quisquam.
            </p>
            <NavLink to = "/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
            <img src = {appleImage} alt = "about us" height = "400px" width = "400px"></img>
        </div>
    </div>
</div>
</motion.div>
    )
}

export default About
