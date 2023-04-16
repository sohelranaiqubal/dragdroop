const DragArea = document.querySelector('.appbody'),
DragText = DragArea.querySelector('h3'),
button = DragArea.querySelector('button'),
input = DragArea.querySelector('input');
let Myfile;

button.onclick = () => {
    input.click()
}

input.addEventListener('change', function () {
    Myfile = this.files[0];
    DragArea.classList.add('active');
    showMe();
});

DragArea.addEventListener('dragover', (event)=>{
    event.preventDefault();
    DragArea.classList.add('active');
    DragText.textContent = 'Release to Upload File'
});

DragArea.addEventListener('dragleave', ()=>{
    DragArea.classList.remove('active');
    DragText.textContent = 'Drag & Drop';
});
DragArea.addEventListener('drop',(event)=>{
    event.preventDefault();
    Myfile = event.dataTransfer.files[0];
    showMe();
})
function showMe() {
    let filetype = Myfile.type;
    let VailEx = ['image/jpeg', 'image/jpg', 'image/png'];
    
   if (VailEx.includes(filetype)) {
    
    let fileReader = new FileReader();

    fileReader.onload = () =>{
        let imgUrl = fileReader.result;
        let img = `<img src="${imgUrl}" alt="">`
        DragArea.innerHTML = img;
    }
    fileReader.readAsDataURL(Myfile);
   } else {
    alert('This file is not Vail');
    DragArea.classList.remove('active');
    DragText.textContent = 'Drag & Drop';
   }
}