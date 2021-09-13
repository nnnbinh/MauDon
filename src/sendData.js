export default function SendData(data) {
  fetch('http://185.70.198.139:4000/send_mail/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: data,
    }),
  })
    .then(response => response.text())
    .then(responseData => {
      console.log(responseData);
    })
    .done();
}
