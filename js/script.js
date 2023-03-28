const input = document.querySelector("#digitar-tarefa");

window.addEventListener("load", () => {
  input.focus();
});

document
  .querySelector("#adicionar-tarefa")
  .addEventListener("click", function addTask() {
    if (!input.value) {
      alert("Digite alguma tarefa");
    } else {
      const tasksContainer = document.querySelector("#tarefas");
      const task = document.createElement("div");
      task.classList.add("tarefa");
      task.innerHTML += `
        <p class="task" onclick="feito(this)">${input.value}</p>
        <div id="remover-icon"onClick="remover(this)" ><i class="fa-solid fa-trash fa-2xl" style="color: #20df50;" ></i></div>
    `;
      tasksContainer.appendChild(task);
      input.value = "";
      input.focus();
    }
  });

function remover(task) {
  task.parentNode.remove();
}

function feito(paragrafo) {
  if (paragrafo.classList.contains("feito")) {
    paragrafo.classList.remove("feito");
  } else {
    paragrafo.classList.add("feito");
  }
}
