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
    headerTitle.textContent = "To-do's"
    headerDate.textContent = '(Todays date)'
    // Footer divs
    const addTodo = document.createElement('div');
    const addProject = document.createElement('div');
    const newTodoButton = document.createElement('button')
    const newTodo = document.createElement('div');
    const newProjectButton = document.createElement('button')
    const newProject = document.createElement('div');
    newTodoButton.textContent = '+';
    newProjectButton.textContent = '+';
    newTodo.textContent = "New To-do";
    newProject.textContent = "New Project";
    // Attributes
    mainContainer.setAttribute('class', 'main-container');
    headerContainer.setAttribute('class', 'header-container');
    todosContainer.setAttribute('class', 'todo-container');
    footerContainer.setAttribute('class', 'footer-container');
    headerTitle.setAttribute('class', 'header-title');
    headerDate.setAttribute('class', 'header-date');
    addTodo.setAttribute('class', 'add-todo');
    addProject.setAttribute('class', 'add-project');
    newTodo.setAttribute('id', "new-todo")
    newProject.setAttribute('id', "new-project")
    
    newTodoButton.setAttribute('id', 'add-todo-button');
    newProjectButton.setAttribute('id', 'add-project-button');
    // Appends
    htmlBody.appendChild(mainContainer);
    mainContainer.appendChild(headerContainer);
    mainContainer.appendChild(todosContainer);
    mainContainer.appendChild(footerContainer);
    headerContainer.appendChild(headerTitle);
    headerContainer.appendChild(headerDate);
    addTodo.appendChild(newTodoButton);
    addTodo.appendChild(newTodo);
    addProject.appendChild(newProjectButton)
    addProject.appendChild(newProject);
    
    footerContainer.appendChild(addTodo);
    footerContainer.appendChild(addProject);
   
})();
