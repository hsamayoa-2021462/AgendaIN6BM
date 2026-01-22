// Datos de los contactos
const contacts = [
    {
        name: "Hugo Samayoa",
        email: "samayoa@email.com",
        phone: "+502 1234 5678",
        address: "Ciudad de Guatemala, Guatemala",
        notes: "Mejor amigo, del colegio"
    },
    {
        name: "Jennifer Masaya",
        email: "masaya@email.com",
        phone: "+502 5967 3558",
        address: "Carretera Salvador, Guatemala",
        notes: "Mejor amiga del barrio"
    },
    {
        name: "Sebastian Molina",
        email: "smolina@email.com",
        phone: "+502 1111 2222",
        address: "Zona 10, Guatemala",
        notes: "Compañero de trabajo"
    },
    {
        name: "Jeremy Mendez",
        email: "mjeremy@email.com",
        phone: "+502 3333 4444",
        address: "Mixco, Guatemala",
        notes: "Vecino"
    },
    {
        name: "Alejandro Arocha",
        email: "perdiquinto@email.com",
        phone: "+502 5555 6666",
        address: "Antigua Guatemala, Guatemala",
        notes: "Familiar"
    }
];

// Función para mostrar la lista de contactos
function showContactList() {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';
    contacts.forEach(contact => {
        const card = document.createElement('div');
        card.className = 'contact-card';
        card.innerHTML = `
            <h5>${contact.name}</h5>
            <p>${contact.email}</p>
        `;
        card.onclick = () => showContactDetails(contact);
        contactList.appendChild(card);
    });
}

// Función para mostrar los detalles de un contacto
function showContactDetails(contact) {
    const details = document.getElementById('contact-details');
    details.innerHTML = `
        <div class="card">
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Nombre:</strong> ${contact.name}</li>
                    <li class="list-group-item"><strong>Correo:</strong> ${contact.email}</li>
                    <li class="list-group-item"><strong>Teléfono:</strong> ${contact.phone}</li>
                    <li class="list-group-item"><strong>Dirección:</strong> ${contact.address}</li>
                    <li class="list-group-item"><strong>Notas:</strong> ${contact.notes}</li>
                </ul>
            </div>
        </div>
    `;
}

// Cargar la lista de contactos al abrir la página
window.onload = showContactList;


