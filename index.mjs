import students from './students/index.js'

render(students)

function render(students) {
    document.getElementById('attendance').innerHTML = students.map(renderStudent).join('')
}

function renderStudent(student) {
    const name = student.name || 'Mr./Ms. Gumshuda'
    const description = student.description || 'Koi jaane nahi... Kaisi hai ye zindagani... Zindagani...'
    const color = student.color || 'green'
    const avatar = student.avatar || 'https://zhcet-web-amu.firebaseapp.com/static/img/account.svg'

    return `
    <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white my-4 mx-2">
        <div class="px-6 py-4">
            <div class="flex">
                <img class="avatar border-${ color }-light border-4 mx-auto self-center rounded-full w-32 h-32" src="${ avatar }" alt="Avatar">
            </div>
            <div class="name font-bold text-xl mb-2">${ name }</div>
            <p class="class text-grey text-base">
                ${ student.class }
            </p>
            <p class="description text-grey-darker text-base">
                ${ description }
            </p>
        </div>
        
        <div class="hobbies px-6 py-4">
            ${ student.hobbies && student.hobbies.length ? `Hobbies 
            
            ${ student.hobbies.map(hobby => `
                <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker ml-2">${ hobby }</span>
            `).join('') 
            }

            ` : `No Hobbies :(` }
        </div>
    </div>
    `
}