let search=document.querySelector('.search_box input');
let searchBtn=document.querySelector('.search_box i');

searchBtn.addEventListener('click',()=>{
    let searchTerm=search.value.trim();
    console.log(searchTerm);
});

