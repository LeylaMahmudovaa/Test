document.addEventListener('DOMContentLoaded', () => {
    const newRoleButton = document.querySelector('.drop2 span');
    const dropdownForm = document.querySelector('.new-role-form');
    newRoleButton.addEventListener('click', () => {
        const isVisible = dropdownForm.style.display === 'flex';
        dropdownForm.style.display = isVisible ? 'none' : 'flex';
    });

    const form = document.querySelector('.new-role-form form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const roleName = form.querySelector('input[placeholder="Rəhbər"]').value;
        const roleDescription = form.querySelector('input[placeholder="Yeni rol yaradılması"]').value;

        const roleList = document.getElementById('role-list');
        const roleItem = document.createElement('div');
        roleItem.className = 'role-item';
        roleItem.innerHTML = `<h3>${roleName}</h3><p>${roleDescription}</p>`;
        roleList.appendChild(roleItem);

        console.log(`Role Name: ${roleName}, Description: ${roleDescription}`);

        form.reset();

        
        dropdownForm.style.display = 'none';
    });


    const cancelButton = form.querySelector('.cancel');
    cancelButton.addEventListener('click', (e) => {
        form.reset();
        dropdownForm.style.display = 'none';
    });

    
    const searchInput = document.querySelector('#search-input');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const roles = document.querySelectorAll('.role-item');
        roles.forEach(role => {
            const roleName = role.querySelector('h3').textContent.toLowerCase();
            const roleDescription = role.querySelector('p').textContent.toLowerCase();
            const isMatch = roleName.includes(searchTerm) || roleDescription.includes(searchTerm);
            role.style.display = isMatch ? 'block' : 'none';
        });
    });
});