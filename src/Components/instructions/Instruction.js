import React from "react";
import './Instruction.css';
import {FaFileUpload} from 'react-icons/fa'
import {ImArrowDown} from 'react-icons/im'
import {SiConvertio} from 'react-icons/si'
import {FaFileDownload} from 'react-icons/fa'

const Instruction = () => {
  return (
       <div className="instruction_container">
        
        <h2>Step-by-step instructions for converting WAV file to MIDI file</h2>
        <div className="">

            <p>
                <FaFileUpload />
                <h4>Upload ypur file from your device or paste the link</h4> 
            </p>
            <p><ImArrowDown /></p>
            <p>
                <SiConvertio /> <h4>Click on the "Convert" button to start conversion</h4> 
            </p>
            <p><ImArrowDown /></p>
            <p>
                <FaFileDownload />
                <h4>Download the converted file by clicking on the "Download" button</h4> 
            </p>

        </div>
      </div>
    );
};

export default Instruction;
