const input = document.querySelector('#input');
const submitBtn = document.querySelector('#btn');
const paragraph = document.querySelector('#message');
const list = document.querySelector('#list');

function btnClicked(e){
    let text  = input.value;
    if(text.length){
        paragraph.innerText = text;
        e.target.innerText = 'Submitted!';
        input.value = '';
    } else {
        alert('please enter text')
    }
    
}
submitBtn.addEventListener('click', btnClicked)

input.addEventListener('click', function(){
    submitBtn.innerText = 'Submit';
})
