{
  // contact me form code written in this block

  document
    .getElementById('send_message_click')
    .addEventListener('click', () => {
      let name = document.getElementById('form_name').value
      let email = document.getElementById('form_email').value
      let subject = document.getElementById('subject_mail').value
      let message = document.getElementById('message_text').value
      email1()
      async function email1() {
        mode: 'no-cors'
        try {
          let data = {
            name: name,
            email: email,
            subject: subject,
            text: message,
          }
          data = JSON.stringify(data)
          let res = await fetch(
            'https://emailsmtpserver.herokuapp.com/shoaib',
            {
              method: 'POST',
              body: data,
              headers: {
                'content-Type': 'application/json',
              },
            }
          )
          let data1 = await res.json()
          console.log({ data: data1 })
        } catch (error) {
          console.log({ err: error.message })
        }
      }
    })
}
