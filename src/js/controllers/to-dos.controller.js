angular
  .module('todoApp')
  .controller('ToDosCtrl', ToDosCtrl);

ToDosCtrl.$inject = [`$stateParams`];
function ToDosCtrl($stateParams){
  const vm = this;

  vm.todos = [
    { task: 'Build an awesome todo app', done: false, createDte: new Date('2017-07-05T10:20:05Z'), dueDte: new Date('2017-07-31T23:59:59Z'), completedDte: null },
    { task: 'Get super good at Angular', done: false, createDte: new Date('2017-08-01T12:00:05Z'), dueDte: new Date('2017-08-30T23:59:59Z'), completedDte: null },
    { task: 'Party on code', done: false, createDte: new Date('2017-08-02T14:35:25Z'), dueDte: new Date('2017-08-30T23:59:59Z'), completedDte: null },
    { task: 'Tackle the bonus challenges for this lesson', done: false, createDte: new Date('2017-08-04T18:00:45Z'), dueDte: new Date('2017-08-30T23:59:59Z'), completedDte: null },
    { task: 'Take a nap', done: false, createDte: new Date('2017-08-05T12:00:00Z'), dueDte: new Date('2017-08-30T23:59:59Z'), completedDte: null }
  ];

  // RESTful actions
  vm.todosCreate    = todosCreate;
  vm.todosShow      = todosShow;
  vm.todosDelete    = todosDelete;

  // Other functions
  vm.todosCompleted = todosCompleted;
  vm.todosRemaining = todosRemaining;
  vm.updateCompletedDate = updateCompletedDate;

  // Function that allows us to add new todos to our todos
  function todosCreate(){
    vm.todos.push({ task: vm.text, done: false, createDte: new Date(), dueDte: vm.dueDate, completedDte: null });
    vm.text = null;
    vm.dueDate = null;
    // console.log(vm.todos);
  }

  function updateCompletedDate(todo) {
    if (todo.checked) {
		  // do something
  	} else {
  		// do something else
  	}
  }

  // Get one todo based on the $stateParams
  function todosShow() {
    return vm.todos[$stateParams.id];
  }

  // Function that allows us to delete specific todos from our todos
  function todosDelete(todo){
    vm.todos = vm.todos.filter(x => x.task !== todo.task);
  }

  // Returns a count of the tasks that have been marked as done
  function todosCompleted(){
    return vm.todos.filter(x => x.done === true);
  }

  // Returns a count of the tasks that have not been marked as done
  function todosRemaining(){
    return vm.todos.filter(x => x.done === false);
  }
}
