const deleted = document.querySelector('.delete');
const add = document.querySelector('.add')
const tasks = document.querySelector('.tasks')
const input = document.querySelector('.add_input')

let data = [

]

add.addEventListener('click', e => {
    tasks.innerHTML += `
    <div class="task">
    <p>${input.value.length > 0 ? input.value : alert('please write')}</p>
    <div class="task_btns">
        <button class="btn edit">Edit</button>
        <button class="btn delete">Delete</button>
    </div>
</div>
    `
    input.value = ''
})

console.log(deleted);
deleted.addEventListener('click', e => {
    console.log(e);
    // let res = data.filter((value) => {
    //     value.id !== e.target
    // })
    // console.log(res);
})