import axios from 'axios';

//for get the students info
export async function getAllStudents() {
   let students = await axios.get('http://localhost:8091/getAll')
   // console.log(students.data)
   return students.data
}

//for delete the student
export async function deleteStudentApi(id) {
   console.log("ap-delete: " + id)
   return await axios.delete(`${'http://localhost:8091/delete'}/${id}`)
}


//for save the student
export async function saveStudentApi(data) {
   
   return await axios.post('http://localhost:8091/save', data, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
}