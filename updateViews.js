
const apiUrl = 'https://p0xwa3zuc0.execute-api.us-east-2.amazonaws.com/default/incrementResumeViews';

let views = fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Assuming your API returns an object with a key 'value' containing the integer
    const integerValue = data.body;
    console.log('Integer value:', integerValue);
    // You can do whatever you need with the integer value here
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });


document.body.innerHTML = "<p>Views are  " + views + "</p>"
//   https://p0xwa3zuc0.execute-api.us-east-2.amazonaws.com/default/incrementResumeViews
