const details = document.querySelectorAll(".accordion__content-line");

details.forEach( target => {
  target.addEventListener("toggle", (event) => {
    setTimeout(() => {
      console.log(event.target.open);
    }, 1000);
    if(event.target.open) {
      details.forEach( detail => {
        if(target !== detail) {
          detail.open = false;
        }
      })
    }
  })
})