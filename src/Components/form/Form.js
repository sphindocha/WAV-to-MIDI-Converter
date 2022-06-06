import React from "react";
import './Form.css'

const Form = () => {

    const clickHandler = () => {
        alert('Converted!')
    }

    const removeFile = () => {
        document.getElementById('formFile').value="";
    }
    
  return (
      <div className="form_container">
        <div className="mb-3">
            <label for="formFile" class="form-label"><h4>Upload your file from your device</h4></label>
            <input className="form-control" type="file" id="formFile"/>
            <button className="remove_button" onClick={removeFile}>Remove File</button>
            <h4>Or</h4>
            <input className="form-control" type="text" placeholder="Paste the Link" />
            <button className="btn btn-lg btn-secondary convert_button" onClick={clickHandler}>Convert</button>
        </div>
      </div>
  );
};

export default Form;
