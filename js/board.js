// board operations right here
function doSomething() {
    return true;
}

function setName(id) {
    let nome = prompt('Enter player\'s name')
    if(nome == '') {
        alert('name not informed')
        return false
    }

    let names = document.querySelectorAll('.pname').forEach(el => {
        if(el.innerText == 1) {
            alert('name already used')
            return false
        }
    })

    $(`#${id}`).text(nome)
}