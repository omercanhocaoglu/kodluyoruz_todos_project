






function Todo () {return(








<div> 

<h1 className="Todosheader">todos</h1> <br/>

<section class="todoapp"/>
	<header class="header">
		
		<form>
			<input class="new-todo" placeholder="What needs to be done?" autofocus/>
		</form>
	</header>


    <section class="main">
		<input class="toggle-all" type="checkbox"/>
		<label for="toggle-all">
			Mark all as complete
		</label>

		<ul class="todo-list">
			<li class="completed">
				<div class="view">
					<input class="toggle" type="checkbox"/>
					<label>Learn JavaScript</label>
					<button class="destroy"></button>
				</div>
			</li>
			<li>
				<div class="view">
					<input class="toggle" type="checkbox"/>
					<label>Learn React</label>
					<button class="destroy"></button>
				</div>
			</li>
			<li>
				<div class="view">
					<input class="toggle" type="checkbox"/>
					<label>Have a life!</label>
					<button class="destroy"></button>
				</div>
			</li>
		</ul>
	</section>

    <footer class="footer"></footer>

    <span class="todo-count">
			<strong>2</strong>
			items left 
		</span>

    
		<ul class="filters">
			<li>
				<a className="selected">All</a>
				<a>Active</a>
			</li>
			<li>
				<a>Completed</a>
			</li>
		</ul>

        <button class="clear-completed">
			Clear completed
		</button>
	<footer/>
<section/>

<footer class="info">
	<p>Click to edit a todo</p>
	<p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>






              </div>










)}

export default Todo;












































































