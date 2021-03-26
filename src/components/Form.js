import React from "react";
import Row from "./Row.js"
import Col from "./Col.js"
import '../App.css';

function Form() {
    return (
      
<div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"></label>
                <textarea class="form-control textarea-background" id="exampleFormControlTextarea1" rows="3"
                  placeholder="First Name"></textarea>
              </div>
              <div class="mb-3">
                <textarea class="form-control textarea-background" id="exampleFormControlTextarea1" rows="3"
                  placeholder="Last Name"></textarea>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control textarea-background" id="exampleFormControlInput1"
                  placeholder="Name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"></label>
                <textarea class="form-control textarea-background" id="exampleFormControlTextarea1" rows="3"
                  placeholder="Message"></textarea>
              </div>
       </div>    
        
    );
}

export default Form;

