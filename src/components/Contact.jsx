import React from 'react'
import staff from "../images/staff.jpg"

import {motion} from 'framer-motion';
import { pageAnimation} from "./Animation"
const Contact = () => {
    return (
        <motion.div exit = "exit" variants={pageAnimation} initial ="hidden" animate = "show">
          <div className="container mb-5">
        <div className="row">
            <div className="col-12 text-center py-4 my-4">
                <h1>Have some questions?</h1>
                <hr />
            </div>
            <div className="row">
                <div className="col-md 5 d-flex justify-content-center">
                    <img src = {staff} alt = "contact us" height = "300px" width = "300px"></img>
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor ="exampleFormControlInput1" className = " form-label">FullName</label>
                       <input type="text" className = "form-control" id = "exampleFormCont" placeholder = "John Doe" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor ="exampleFormControlInput1" className = " form-label">Email address</label>
                       <input type="email" className = "form-control" id = "exampleFormCont" placeholder = "name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor ="exampleFormControlTextarea1" className = " form-label">Message</label>
                       <textarea className = "form-control" id = "exampleFormControlTextArea1" rows= "5" ></textarea>
                        </div>
                        <button type="submit" className = "btn btn-outline-primary">Send message</button>
                    </form>
                </div>
            </div>
        </div>
              </div>  
        </motion.div>
    )
}

export default Contact
