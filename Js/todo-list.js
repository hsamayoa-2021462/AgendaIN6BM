// Tareas precargadas
let tasks = [
    {
        name: "Completar proyecto de programación",
        type: "Estudio",
        urgency: "Alta",
        date: "2026-01-30"
    },
    {
        name: "Reunión con el equipo",
        type: "Trabajo",
        urgency: "Media",
        date: "2026-01-28"
    },
    {
        name: "Comprar víveres para la semana",
        type: "Personal",
        urgency: "Baja",
        date: "2026-02-01"
    }
];

let editingIndex = null;

function loadTasks() {
    displayTasks();
}

function saveTasks() {
    // Aquí luego puedes guardar en localStorage si quieres
}

function displayTasks() {
    const tasksList = document.getElementById('tasks-list');
    if (!tasksList) return;

    tasksList.innerHTML = '';

    if (tasks.length === 0) {
        tasksList.innerHTML = '<div class="col-12"><p class="text-center">No tienes tareas pendientes.</p></div>';
        return;
    }

    tasks.forEach((task, index) => {
        // ✅ CORRECCIÓN AQUÍ
        const urgencyClass = `urgency-${task.urgency.toLowerCase()}`;

        const taskCard = document.createElement('div');
        taskCard.className = 'col-12 col-md-6 col-lg-4';
        taskCard.innerHTML = `
            <div class="task-card ${urgencyClass}">
                <h5>${task.name}</h5>
                <p><strong>Tipo:</strong> ${task.type}</p>
                <p><strong>Urgencia:</strong> ${task.urgency}</p>
                <p><strong>Fecha de entrega:</strong> ${formatDate(task.date)}</p>
                <div class="task-actions">
                    <button class="btn btn-edit" onclick="editTask(${index})">Editar</button>
                    <button class="btn btn-delete" onclick="deleteTask(${index})">Eliminar</button>
                </div>
            </div>
        `;
        tasksList.appendChild(taskCard);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-GT', options);
}

function openAddTaskModal() {
    editingIndex = null;
    document.getElementById('taskModalLabel').textContent = 'Nueva Tarea';
    document.getElementById('task-form').reset();
    document.getElementById('task-index').value = '';
}

function editTask(index) {
    editingIndex = index;
    const task = tasks[index];

    document.getElementById('taskModalLabel').textContent = 'Editar Tarea';
    document.getElementById('task-index').value = index;
    document.getElementById('task-name').value = task.name;
    document.getElementById('task-type').value = task.type;
    document.getElementById('task-urgency').value = task.urgency;
    document.getElementById('task-date').value = task.date;

    const modal = new bootstrap.Modal(document.getElementById('taskModal'));
    modal.show();
}

function saveTask() {
    const name = document.getElementById('task-name').value.trim();
    const type = document.getElementById('task-type').value;
    const urgency = document.getElementById('task-urgency').value;
    const date = document.getElementById('task-date').value;

    if (!name || !type || !urgency || !date) {
        alert('Por favor completa todos los campos');
        return;
    }

    const newTask = {
        name,
        type,
        urgency,
        date
    };

    if (editingIndex !== null) {
        tasks[editingIndex] = newTask;
    } else {
        tasks.push(newTask);
    }

    saveTasks();
    displayTasks();

    const modal = bootstrap.Modal.getInstance(document.getElementById('taskModal'));
    modal.hide();

    document.getElementById('task-form').reset();
    editingIndex = null;
}

function deleteTask(index) {
    if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
        tasks.splice(index, 1);
        saveTasks();
        displayTasks();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});
