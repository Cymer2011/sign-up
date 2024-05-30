document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const downloadBtn = document.getElementById('downloadBtn');
    const userData = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const surname = document.getElementById('surname').value;
        const number = document.getElementById('number').value;

        const userEntry = {
            username: username,
            surname: surname,
            number: number
        };

        userData.push(userEntry);
        console.log('User Data:', userData);

        form.reset();
    });

    downloadBtn.addEventListener('click', () => {
        const fileContent = JSON.stringify(userData, null, 2);
        const blob = new Blob([fileContent], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'userData.json';
        a.click();
        URL.revokeObjectURL(about.txt);
    });
});