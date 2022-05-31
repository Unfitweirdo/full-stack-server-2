let giveLove = document.getElementsByClassName("fa-heart");
let letItGo = document.getElementsByClassName("fa-ban");
let moraleSupport = document.getElementsByClassName('push')


Array.from(giveLove).forEach(function(element) {
  element.addEventListener('click', function(){
    const stepper = this.parentNode.parentNode.childNodes[1].innerText
    const grief = this.parentNode.parentNode.childNodes[3].innerText
    const loveMore = parseFloat(this.parentNode.parentNode.childNodes[5].innertext)
    fetch('/grief', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'stepper': stepper,
        'grief': grief,
        'love': loveMore
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(letItGo).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const grief = this.parentNode.parentNode.childNodes[3].innerText
        fetch('grief', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'grief': grief
            
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});