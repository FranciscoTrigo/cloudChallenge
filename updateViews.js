const apiUrl = 'https://p0xwa3zuc0.execute-api.us-east-2.amazonaws.com/default/incrementResumeViews';


async function fetchIntegerFromAPI(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      // You can handle the error as per your requirement
    }
  }
  
  // Example usage
  let views = fetchIntegerFromAPI(apiUrl)
    .then(integer => {
      console.log('Integer value:', integer);
      // Do something with the integer value
    })
    .catch(error => {
      console.error('Error:', error);
    });
  

document.body.innerHTML = "<p>Views are  " + views + "</p>"
//   https://p0xwa3zuc0.execute-api.us-east-2.amazonaws.com/default/incrementResumeViews
