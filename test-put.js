const axios = require('axios');

async function testPutUserSubjectsRequest() {
  try {
    const response = await axios.put('http://localhost:3000/user/1/subjects', {
      subjectIds: [1]
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

(async () => {
  await testPutUserSubjectsRequest();
})()