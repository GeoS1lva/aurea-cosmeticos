document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-btn');
    const contents = document.querySelectorAll('.content-text');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            
            button.classList.add('active');

            const targetId = button.getAttribute('data-target');

            contents.forEach(content => {
                content.classList.remove('active');
            });

            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});