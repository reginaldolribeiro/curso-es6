class Matematica {
    static soma(a,b){
        return a+b;
    }
}

console.log(Matematica.soma(1,2));

// Abordagem 3
// class TodoList {
//     constructor(){
//         this.todos = [];
//     }
//     static addTodo(){
//         this.todos.push('Novo todo'); // Metodo estatico nao enxerga o restante da classe, nao vai enxergar o this.todos
//         console.log(this.todos);
//     }
// }

// TodoList.addTodo();
// TodoList.addTodo();
// TodoList.addTodo();
// TodoList.addTodo();

// Abordagem 2
// class List {
//     constructor(){
//         this.data = [];
//     }

//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List{
//     constructor(){
//         super();
//         this.usuario = "Reginaldo";
//     }

//     mostraUsuario(){
//         console.log(this.usuario);
//     }

// }

// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();

// Abordagem 1
// class TodoList {
//     constructor(){
//         this.todos = [];
//     }

//     addTodo(){
//         this.todos.push('novo todo');
//         console.log(this.todos);
//     }
// }

// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.addTodo();
// }