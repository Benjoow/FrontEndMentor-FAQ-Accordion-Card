const details = document.querySelectorAll(".accordion__content-line");

const autoCloseAccordionItem = (event, target) => {
  if (event.target.open) {
    details.forEach( detail => {
      if(target !== detail) {
        detail.open = false;
      }
    })
  }
}

details.forEach( target => {
  target.addEventListener("toggle", (event) => {
    autoCloseAccordionItem(event, target);
  })
})