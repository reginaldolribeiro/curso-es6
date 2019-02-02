import api from './api';

class App {
    constructor(){
        this.repositories = [];

        this.formElement = document.getElementById('repo-form');
        this.inputElement = document.querySelector('input[name=repository]');
        this.listElement = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers(){
        this.formElement.onsubmit = event => this.addRepository(event);
    }

    // addRepository(event){
    //     event.preventDefault();

    //     this.repositories.push({
    //         name: 'Reginaldo Luiz Ribeiro Filho',
    //         description: 'Github Reginaldo',
    //         avatar_url: 'https://avatars3.githubusercontent.com/u/5490660?v=4',
    //         html_url: 'https://github.com/reginaldolribeiro',
    //     });

    //     this.render();
    //     console.log(this.repositories);
    // }

    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputElement.value;

        if(repoInput.length === 0)
            return;

        const response = await api.get(`/repos/${repoInput}`);
        console.log(response);

        // Desestruturacao
        const { name, description, html_url, owner: { avatar_url } } = response.data;

        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url,
        });

        // this.repositories.push({
        //     name: response.data.name,
        //     description: response.data.description,
        //     avatar_url: response.data.owner.avatar_url,
        //     html_url: response.data.html_url,
        // });

        this.inputElement.value = '';

        this.render();
        console.log(this.repositories);
    }

    render(){
        this.listElement.innerHTML = '';
         
        this.repositories.forEach(repo => {
            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', repo.avatar_url);

            let titleElement = document.createElement('strong');
            titleElement.appendChild(document.createTextNode(repo.name));

            let descriptionElement = document.createElement('p');
            descriptionElement.appendChild(document.createTextNode(repo.description));

            let linkElement = document.createElement('a');
            linkElement.setAttribute('target','_blank');
            linkElement.setAttribute('href',repo.html_url);
            linkElement.appendChild(document.createTextNode('Acessar'));

            let listItemElement = document.createElement('li');
            listItemElement.appendChild(imgElement);
            listItemElement.appendChild(titleElement);
            listItemElement.appendChild(descriptionElement);
            listItemElement.appendChild(linkElement);

            this.listElement.appendChild(listItemElement);

        });
    }
}

new App();