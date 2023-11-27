import React, { useState } from 'react';
import './input.css'
import './homesection.css'
import '../App.css'
import Select from 'react-select';
import CountryList from 'react-select-country-list';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from "./button";
import { FaCalendar } from 'react-icons/fa';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaFolder   } from 'react-icons/fa';
import { faFileCircleQuestion } from 'react-icons/fa';

const MultipleInputFields = () => {

        const [startDate, setStartDate] = useState(null);
        const [endDate, setEndDate] = useState(null);
      
        const handleStartDateChange = (date) => {
          setStartDate(date);
        };
      
        const handleEndDateChange = (date) => {
          setEndDate(date);
        };
    

    const [selectedCountry, setSelectedCountry] = useState(null);

    const options = CountryList().getData();

    const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    // Add more input fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
    }),
    
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    placeholder: (provided) => ({
      ...provided,
      lineHeight: 'inherit', // Adjust the lineHeight for vertical alignment
    }),}
  

  return (
    <div className='inputsection'>
    <div className='section'>
        <h3 className='title'>Tell us about your project</h3>
        <textarea className='about'  name="about" value={inputValues.about} onChange={handleInputChange} placeholder='About your project' ><input  type="text" name="about" value={inputValues.about} onChange={handleInputChange} placeholder='About your project'/></textarea>
      </div>
      <div className='section'>
        <h3 className='title'> Country and range time</h3>
        <div className='inputs_field'>
        <div className='CRT'><Select styles={customStyles} value={selectedCountry} onChange={handleCountryChange} options={options} placeholder="select your country"/> </div>
        <div className='CRT'><DatePicker className="in" selected={startDate} onChange={handleStartDateChange} dateFormat="dd/MM/yyyy"  placeholderText="Starting date"/> <FaCalendar size={30} color="#B4C5E4"  /></div>
        <div className='CRT'><DatePicker className="in"  selected={endDate} onChange={handleEndDateChange} dateFormat="dd/MM/yyyy"  placeholderText="Ending date"/> <FaCalendar size={30} color="#B4C5E4"  /></div>
        </div>
      </div>
      <div className='section'>
        <h3 className='title'>Budget,Finding Source and Category</h3>
        <div className='inputs_field'>
        <div className='CRT'><input className="in"  type="text" name="Budget" value={inputValues.Budget} onChange={handleInputChange} placeholder='Budget' /><FaMoneyBillAlt size={30} color="#B4C5E4" /></div>
        <div className='CRT'><input className="in"  type="text" name="FindingSource" value={inputValues.FindingSource} onChange={handleInputChange} placeholder='Finding Source'/>
        <faFileCircleQuestion size={30} color="#B4C5E4" /></div>
        <div className='CRT'><input className="in"  type="text" name="category" value={inputValues.category} onChange={handleInputChange} placeholder='Category'/><FaFolder size={30} color="#B4C5E4" /></div>
        </div>
      </div>
      <div className="hero-btns">
                <Button
                className="btns"
                buttonSize='btn--large'
                buttonStyle='btn--outline'>
                    Generate
                </Button>
                </div>

      <br></br>
      <br></br>
      <div>
      {/* test the inputs */}
        <p>About Value: {inputValues.about}</p>
        {selectedCountry && (
        <p>Country Value: {selectedCountry.label}</p>
      )}
        {startDate && (
        <p>
        Starting day Value: {startDate.toDateString()}
        </p>
      )}
      { endDate && (
        <p>
        Ending day Value: {endDate.toDateString()}
        </p>
      )}
        <p>Input 5 Value: {inputValues.Budget}</p>
        <p>Input 6 Value: {inputValues.FindingSource}</p>
        <p>Input 7 Value: {inputValues.category}</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default MultipleInputFields;
