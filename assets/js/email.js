{
  // contact me form code written in this block
  /*
  document
    .getElementById('send_message_click')
    .addEventListener('click', () => {
      let name = document.getElementById('form_name').value
      let email = document.getElementById('form_email').value
      let subject = document.getElementById('subject_mail').value
      let text = document.getElementById('message_text').value
      email1(name, email, subject, text)
    })

  async function email1(name, email, subject, text) {
    try {
      let data = {
        name: name,
        email: email,
        subject: subject,
        text: text,
      }
      let dataString = JSON.stringify(data)
      console.log(data, typeof data)
      let res = await fetch('https://emailsmtpserver.herokuapp.com/shoaib', {
        mode: 'no-cors',
        method: 'POST',
        body: dataString,
        headers: {
          'content-Type': 'application/json',
        },
      })
      let data1 = await res.json()
      console.log({ data: data1 })
    } catch (error) {
      console.log({ err: error.message })
    }
  }
*/

  document
    .getElementById('send_message_click')
    .addEventListener('click', async () => {
      try {
        let data = {
          name: document.getElementById('form_name').value,
          email: document.getElementById('form_email').value,
          subject: document.getElementById('subject_mail').value,
          text: document.getElementById('message_text').value,
        }
        let dataString = JSON.stringify(data)
        console.log(data, typeof data)
        console.log(dataString, typeof dataString)

        let res = await fetch('', {
          mode: 'no-cors',
          method: 'POST',
          body: dataString,
          headers: {
            'content-Type': 'application/json',
          },
        })
        let data1 = await res.json()
        console.log({ data: data1 })
      } catch (error) {
        console.log({ err: error.message })
      }
    })
}
