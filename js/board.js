// board operations right here
function doSomething() {
    return true;
}

function setName(id) {
    let taken = false
    let nome = prompt('Enter player\'s name')
    if(nome == null || nome.trim() == '') {
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

function changeTheme(id) {
    let theme = id.split('_')[0]
    applyTheme(theme)
}

function applyTheme(theme) {
    let theme_obj = THEMES.filter(th => th.name == theme)
    console.log(theme_obj)
}