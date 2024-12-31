let localStorageAvailable = true;

try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
} catch (e) {
    localStorageAvailable = false;
    console.warn('LocalStorage is not available:', e);
}

// Utilisez localStorageAvailable pour vérifier si localStorage est disponible avant de l'utiliser
if (localStorageAvailable) {
    // Votre code qui utilise localStorage
    localStorage.setItem('username', 'JohnDoe');
    let username = localStorage.getItem('username');
    console.log('Username from localStorage:', username);
}
