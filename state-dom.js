const arr = [
    {
        text: 'first ',
        done: false
    },

]

const checkTodo = function(i) {
    arr[i].done = !arr[i].done
}
const rem = function (i) {
    arr.splice(i, 1)
    render(arr)
}
const addTodo = function (txt) {
    arr.push({ text: txt, done: false })
    return render(arr)
}

const list = document.getElementById('list')
const input = document.getElementById('input')
input.style.fontFamily = 'cursive'



button.addEventListener('click', (e) => {
    e.preventDefault()
    addTodo(input.value)
    input.value = ''

})

const render = (tasks) => {
    list.innerHTML = ''
    tasks.forEach((i, index) => {
        const checkBox = document.createElement('input')
        checkBox.type = 'checkBox'
        checkBox.checked = i.done

        checkBox.addEventListener('click', () => {
            checkTodo(index)
            
        })
        const delButton = document.createElement('button')
        delButton.textContent = 'x'
        let textList = document.createElement('p')
        textList.textContent = i.text
        textList.style.fontFamily = 'cursive'
        list.append(textList)
        textList.append(delButton)
        textList.prepend(checkBox)

        delButton.addEventListener('click', () => {
        rem(index)
        })
    })
    
   
}


console.log(render(arr));