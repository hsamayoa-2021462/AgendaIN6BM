document.addEventListener('DOMContentLoaded', () => {
    loadProfileInfo();

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});

function loadProfileInfo() {
    const userEmail = sessionStorage.getItem('userEmail') || 'hsamayoa-2021462@kinal.edu.gt';

    const loginDate = sessionStorage.getItem('loginDate') || new Date().toLocaleDateString('es-GT');
    const loginTime = sessionStorage.getItem('loginTime') || new Date().toLocaleTimeString('es-GT');

    const emailElement = document.getElementById('user-email');
    const dateElement = document.getElementById('login-date');
    const timeElement = document.getElementById('login-time');

    if (emailElement) emailElement.textContent = userEmail;
    if (dateElement) dateElement.textContent = loginDate;
    if (timeElement) timeElement.textContent = loginTime;
}

function logout() {
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('loginDate');
    sessionStorage.removeItem('loginTime');

    window.location.href = '../index.html';
}