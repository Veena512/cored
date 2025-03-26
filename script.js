document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    const loadPage = (role) => {
        content.innerHTML = `<h2>Welcome, ${role}</h2><p>Access your respective functionalities below.</p>`;
    };

    document.getElementById("admin").addEventListener("click", () => {
        loadPage("Admin");
    });

    document.getElementById("faculty").addEventListener("click", () => {
        loadPage("Faculty");
    });

    document.getElementById("student").addEventListener("click", () => {
        loadPage("Student");
    });
});
