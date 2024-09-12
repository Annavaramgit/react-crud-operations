import React, { useState } from 'react';

function Form(props) {
  // This state holds the form data, initialized with the values passed via props
  const [formData, setFormData] = useState(props.initialData);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name:: " + name + " value:: " + value);
    // Handling checkboxes for skills
    if (name === 'skills') {
      let updatedSkills = [...formData.skills];
      if (e.target.checked) {
        updatedSkills.push(value); // Add skill if checked
      } else {
        updatedSkills = updatedSkills.filter((skill) => skill !== value); // Remove skill if unchecked
      }
      setFormData({ ...formData, skills: updatedSkills });
    } else {
      //this is else means if updated is not skills some thing else then that also updated,, ...formDate data means previos whole data
      // and [name] means it is dynamic(may be stuentName,collegeName,etc...) that will upadted with changed value
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className='form-overlay'>
      <form>
        <div className='form-group'>
          <label className='form-label'>Name</label>
          <input
            type='text'
            className='form-control'
            value={formData.stuentName}
            name='stuentName'
            placeholder='Enter Name'
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label className='form-label'>HallTicket Number</label>
          <input
            type='number'
            className='form-control'
            value={formData.studentHallTicket}
            name='studentHallTicket'
            placeholder='Enter Hallticket Number'
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label className='form-label'>College Name</label>
          <input
            type='text'
            className='form-control'
            value={formData.collegeName}
            name='collegeName'
            placeholder='Enter College Name'
            onChange={handleChange}
          />
        </div>

        {/* This is for state select */}
        <div className='form-group'>
          <label className='form-label'>State</label>
          <select
            className='form-control mt-2'
            name='state'
            value={formData.state}
            onChange={handleChange}
          >
            <option value='-1'></option>
            <option value='AP'>AP</option>
            <option value='TG'>TG</option>
            <option value='US'>US</option>
            <option value='UK'>UK</option>
          </select>
        </div>

        {/* This is for gender select */}
        <div className='form-group'>
          <label className='form-label'>Gender</label>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='gender'
              value='male'
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            <label className='form-check-label'>Male</label>
          </div>

          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='gender'
              value='female'
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            <label className='form-check-label'>Female</label>
          </div>
        </div>

        {/* This is for skills selection */}
        <div className='form-group'>
          <label className='form-label'>Skills</label>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value='java'
              name='skills'
              checked={formData.skills.includes('java')}
              onChange={handleChange}
            />
            <label className='form-check-label'>Java</label>
          </div>

          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value='react'
              name='skills'
              checked={formData.skills.includes('react')}
              onChange={handleChange}
            />
            <label className='form-check-label'>React</label>
          </div>
        </div>

        {/* Save and Cancel buttons */}
        <div className='d-flex justify-content-end mt-2'>
          <button
            className='btn btn-primary me-2'
            onClick={(e) => {
              e.preventDefault();
              console.log(formData); // You can replace this with form submission logic
              props.addStudent(formData);
            }}
          >
            Save
          </button>
          <button
            className='btn btn-danger'
            onClick={(e) => {
              e.preventDefault();
              props.formClose(); // Call the formClose function passed from the parent
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
