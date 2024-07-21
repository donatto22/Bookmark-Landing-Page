function mostrarMenu () {
    const menu = getElement('burger')
    menu.classList.toggle('burger-active')
}

function mostrarTab(tabIndex) {
    const tab1 = getElement('tab1')
    const tab2 = getElement('tab2')
    const tab3 = getElement('tab3')

    const clickable1 = getElement('t1')
    const clickable2 = getElement('t2')
    const clickable3 = getElement('t3')

    if(tabIndex == 1) {
        // mostrar el primero
        // ocultar los demás
        tab1.classList.add('mostrar')

        tab2.classList.add('invisible')
        tab2.classList.remove('mostrar')

        tab3.classList.add('invisible')
        tab3.classList.remove('mostrar')

        // cambiando el color del borde
        clickable1.classList.add('tab-active')
        clickable2.classList.remove('tab-active')
        clickable3.classList.remove('tab-active')
    }

    if(tabIndex == 2) {
        // mostrar el 2do
        tab2.classList.add('mostrar')
        
        tab1.classList.add('invisible')
        tab1.classList.remove('mostrar')

        tab3.classList.add('invisible')
        tab3.classList.remove('mostrar')

        // cambiando el color del borde
        clickable1.classList.remove('tab-active')
        clickable2.classList.add('tab-active')
        clickable3.classList.remove('tab-active')
    }

    if(tabIndex == 3) {
        // mostrar el 3ero
        tab3.classList.add('mostrar')

        tab1.classList.add('invisible')
        tab1.classList.remove('mostrar')

        tab2.classList.add('invisible')
        tab2.classList.remove('mostrar')

        // cambiando el color del borde
        clickable1.classList.remove('tab-active')
        clickable2.classList.remove('tab-active')
        clickable3.classList.add('tab-active')
    }
}

function getElement (id) {
    return document.getElementById(id)
}