// Datos de los contactos, agregando is favorite para poder poner cualquiera de estos como favoritos. 
let contacts = [
    {
        name: "Hugo Samayoa",
        email: "samayoa@email.com",
        phone: "+502 1234 5678",
        address: "Ciudad de Guatemala, Guatemala",
        notes: "Mejor amigo, del colegio",
        isFavorite: false
    },
    {
        name: "Jennifer Masaya",
        email: "masaya@email.com",
        phone: "+502 5967 3558",
        address: "Carretera Salvador, Guatemala",
        notes: "Mejor amiga del barrio",
        isFavorite: false
    },
    {
        name: "Sebastian Molina",
        email: "smolina@email.com",
        phone: "+502 1111 2222",
        address: "Zona 10, Guatemala",
        notes: "Compañero de trabajo",
        isFavorite: false
    },
    {
        name: "Jeremy Mendez",
        email: "mjeremy@email.com",
        phone: "+502 3333 4444",
        address: "Mixco, Guatemala",
        notes: "Vecino",
        isFavorite: false
    },
    {
        name: "Alejandro Arocha",
        email: "perdiquinto@email.com",
        phone: "+502 5555 6666",
        address: "Antigua Guatemala, Guatemala",
        notes: "Familiar",
        isFavorite: false
    }
];

let selectedContact = null;


function loadContacts() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
        contacts = JSON.parse(savedContacts);
    }
}


function saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}


function showContactList() {
    const contactList = document.getElementById('contact-list');
    if (contactList) {
        contactList.innerHTML = '';
        contacts.forEach(contact => {
            const card = document.createElement('div');
            card.className = 'contact-card';
            card.innerHTML = `
                <h5>${contact.name}</h5>
                <p>${contact.email}</p>
            `;
            card.onclick = () => {
                showContactDetails(contact);
                selectedContact = contact;
                updateFavoriteButton();
            };
            contactList.appendChild(card);
        });
    }
}

// Función mostrar los detalles
function showContactDetails(contact) {
    const detailsElement = document.getElementById('contact-details');
    if (detailsElement) {
        detailsElement.innerHTML = `
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
}


function updateFavoriteButton() {
    const favoriteBtn = document.getElementById('favorite-btn');
    if (selectedContact && favoriteBtn) {
        if (selectedContact.isFavorite) {
            favoriteBtn.innerHTML = '<i class="fas fa-star" style="color: gold;"></i>';
        } else {
            favoriteBtn.innerHTML = '<i class="far fa-star" style="color: gray;"></i>';
        }
    }
}


function toggleFavorite() {
    if (selectedContact) {
        selectedContact.isFavorite = !selectedContact.isFavorite;
        updateFavoriteButton();
        saveContacts();
    }
}


function loadFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    if (favoritesList) {
        favoritesList.innerHTML = '';
        const favoriteContacts = contacts.filter(contact => contact.isFavorite);

        if (favoriteContacts.length === 0) {
            favoritesList.innerHTML = '<p class="text-center mt-3">No tienes contactos favoritos wey</p>';
        } else {
            favoriteContacts.forEach(contact => {
                const card = document.createElement('div');
                card.className = 'contact-card';
                card.innerHTML = `
                    <h5>${contact.name}</h5>
                    <p>${contact.email}</p>
                `;
                card.onclick = () => {
                    showContactDetails(contact);
                    selectedContact = contact;
                    updateFavoriteButton();
                };
                favoritesList.appendChild(card);
            });
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    loadContacts();

    if (document.getElementById('contact-list')) {
        showContactList();
    } else if (document.getElementById('favorites-list')) {
        loadFavorites();
    }

    const favoriteBtn = document.getElementById('favorite-btn');
    if (favoriteBtn) {
        favoriteBtn.onclick = (e) => {
            e.stopPropagation();
            toggleFavorite();
        };
    }
});
