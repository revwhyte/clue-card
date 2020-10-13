// board operations right here
function doSomething() {
    return true;
}

function setName(id) {
    let taken = false
    let nome = prompt('Enter player\'s name')
    if(nome == '') {
        alert('name not informed')
        return false
    }

    let names = document.querySelectorAll('.pname').forEach(el => {
        if(el.innerText == nome) {
            alert('name already used')
            taken = true
        }
    })

    if(taken) {
        return false
    }

    $(`#${id}`).text(nome)
}