const arr = [
    {
        text: 'first ',
        done: false
    },
    {
        text: 'second ',
        done: false
    },
    {
        text: 'third ',
        done: true
    },
    {
        text: 'fourth ',
        done: false
    },
    {
        text: 'fifth ',
        done: true
    },
]

const render = (tasks) => {
    const list = document.getElementById('list')


    tasks.forEach(i => {
        let textList = document.createElement('p')
        textList.textContent = i.text
        list.append(textList)
    })
}
console.log(render(arr));