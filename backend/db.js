function create(data) {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch('', options)
      .then((response) => response.json)
  }
  create({title: "check it out", author: "Mike"})