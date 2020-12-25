const select = document.querySelectorAll('.select');

select.forEach( ( element ) => {
  const choices = new Choices(element, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: ' '
  });
})
