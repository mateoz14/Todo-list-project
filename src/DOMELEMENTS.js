

const dom = (() => {
    // Parent Containers
    const htmlBody = document.querySelector('body');
    const mainContainer = document.createElement('div');
    // Maincontainer Divs
    const headerContainer = document.createElement('div');
    const todosContainer = document.createElement('div');
    const footerContainer = document.createElement('div');
    // Header Divs
    const headerTitle = document.createElement('div');
    const headerDate = document.createElement('div');
    // Footer divs
    const newTodo = document.createElement('div');
    const newProject = document.createElement('div');
    // Attributes
    mainContainer.setAttribute('class', 'main-container');
    headerContainer.setAttribute('class', 'header-container');
    todosContainer.setAttribute('class', 'todo-container')
    footerContainer.setAttribute('class', 'footer-container')
    // Appends
    htmlBody.appendChild(mainContainer);
    mainContainer.appendChild(headerContainer);
    mainContainer.appendChild(todosContainer);
    mainContainer.appendChild(footerContainer);
    headerContainer.appendChild(headerTitle);
    headerContainer.appendChild(headerDate);
    footerContainer.appendChild(newTodo);
    footerContainer.appendChild(newProject);
    
    
    
    
    
})();
