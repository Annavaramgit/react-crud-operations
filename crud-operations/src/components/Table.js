import React from 'react'

function Table(props) {

  return (
    <>
      <table className='table table-striped table-primary m-1'>
        <thead>
          <tr>
            <td>Id</td>
            <td>StudentHallTicket</td>
            <td>StudentName</td>
            <td>CollegeName</td>
            <td>State</td>
            <td>Skills</td>
            <td>Gender</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {
            props.allStudentsInfo.map(
              (data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.studentHallTicket}</td>
                  <td>{data.stuentName}</td>
                  <td>{data.collegeName}</td>
                  <td>{data.state}</td>
                  <td>{data.skills}</td>
                  <td>{data.gender}</td>
                  <td>
                    <button className='btn btn-primary'
                    onClick={()=>props.edit(data)}>Edit</button>
                  </td>
                  <td>
                    <button className='btn btn-danger'
                      onClick={() => {
                        props.deleteStudent(data.id);
                      }}
                    >Delete</button>
                  </td>
                </tr>
              )
            )
          }
        </tbody>

      </table>
    </>
  )
}

export default Table
