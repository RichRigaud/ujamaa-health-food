// console.log('Hey Young Beautiful World!')
function dropDownCard(e){ 
    e.preventDefault();
    document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    if(!isDropdownButton && e.target.closest ('[data-dropdown]')!=null) return

    let currentDropdown
    if(isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]')
    currentDropdown.classList.toggle('active')
}

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove('active')
})
})
}

export{dropDownCard}