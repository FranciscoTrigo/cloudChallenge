let views = fetch('https://p0xwa3zuc0.execute-api.us-east-2.amazonaws.com/default/incrementResumeViews')
.then(res => res.json())
.then(res => {document.getElementById("counter").innerHTML = res.body.count})
.then(data => console.log(data));


// .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

document.body.innerHTML = "<p>Views are  " + views + "</p>"
//   https://p0xwa3zuc0.execute-api.us-east-2.amazonaws.com/default/incrementResumeViews
