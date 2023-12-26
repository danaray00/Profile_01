const categories = document.querySelector('.category');
const projects = document.querySelectorAll('.project');

categories.addEventListener('click', function(event) {
    console.log(event);

    const filter = event.target.dataset.category;
    console.log(filter);

    projects.forEach((project)=>{
        console.log(project.dataset.type);

        if (filter === 'all' || filter === project.dataset.type){
            project.style.display = 'block';
        }
        else{
            project.style.display = 'none';
        }

        if(filter == null) {
            return;
        }
    })

})