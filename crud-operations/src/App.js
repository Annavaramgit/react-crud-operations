import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import { getAllStudents, deleteStudentApi, saveStudentApi } from './components/Api';
import { useEffect, useState } from 'react';


function App() {
  //for hold students info that  get from api-call
  const [allStudentsInfo, setAllStudentsInfo] = useState([]);

  //for when to open form and when to not open form
  const [openFrom, setOpenForm] = useState(false);
  //this is for put intial form data null's
  const [intialFormData, setFromData] = useState({
    studentHallTicket: '',
    stuentName: '',
    collegeName: '',
    state: '',
    gender: '',
    skills: []
  })

  //after comp renders ,this useEffect calls getAllstudentsData method
  useEffect(() => {
    console.log("useEffect..")
    getAllstudentsData()  
  }, [])

  //this calls api-method(for get students info)
  let getAllstudentsData = async () => {
    let result = await getAllStudents();
    // let data = result.data;
    console.log(result)
    setAllStudentsInfo(result);
  }

  /*for delete the student,this calls api(delete) and after delete need to refresh(means get api need to call) 
                 so it callgetAllstudentsData */
  let deleteStudent = async (id) => {
    await deleteStudentApi(id);
    getAllstudentsData()
  }

  //used to save the data
  let saveStudent = async (data) => {
    await saveStudentApi(data);

    closeFrom()
    getAllstudentsData()
  }
  //used to update the data
  let editStudent = async (data) => {
    setFromData(data);
    setOpenForm(true)

  }

  //when this call this makes setOpenForm true the from will show
  let showForm = () => {
    setOpenForm(true)
    setFromData(
      {
        studentHallTicket: '',
        stuentName: '',
        collegeName: '',
        state: '',
        gender: '',
        skills: []
      }
    )
   
   
  }
  //when this call this makes setOpenForm false the from will close
  let closeFrom = () => {
    setOpenForm(false)
  }


  return (
    <div className='wrapper m-3'>
      <h2 className='text-primary text-center'>React Crud Operations!!</h2>
      <button className='btn btn-primary float-end mb-1' onClick={() => { showForm() }}>Add New</button>
      <Table allStudentsInfo={allStudentsInfo} deleteStudent={deleteStudent} edit={editStudent} />
      {
        openFrom && <Form formClose={closeFrom} initialData={intialFormData} addStudent={saveStudent}></Form>
      }
    </div>
  );
}

export default App;
