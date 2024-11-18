const axios = require('axios');

async function testPostUniversityRequest() {
  try {
    const response = await axios.post('http://localhost:3000/university', {
      name: 'Sofia University',
      town: 'Sofia'
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

async function testPostSubjectsRequest() {
  try {
    response = await axios.post('http://localhost:3000/subject', {
      subjectName: 'Math'
    });
    console.log('Response data:', response.data);
    response = await axios.post('http://localhost:3000/subject', {
      subjectName: 'English'
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

async function testPostUserRequest() {
  try {
    const response = await axios.post('http://localhost:3000/user', {
      name: 'John Doe',
      email: 'johndoe@example.com',
      universityId: 1,
      subjectIds: [1, 2]
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}
(async () => {
  await testPostSubjectsRequest();
  await testPostUniversityRequest();
  await testPostUserRequest()
})()