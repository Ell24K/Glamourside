document.addEventListener("DOMContentLoaded", function () {
    loadAdmins();
});

function loadAdmins() {
    let adminList = document.getElementById("adminList");

    let admins = [
        { name: "NAJIR", role: "FOUNDER" },
        { name: "-", role: "OWNER" },
        { name: "AWA", role: "LEADER" },
        { name: "HALWA", role: "CO LEADER" },
        { name: "-", role: "MANAGER" },
        { name: "-", role: "CO MANAGER" },
        { name: "-", role: "CORDINATOR" },
        { name: "-", role: "EDITOR" },
        { name: "ZEFA", role: "STAFF" },
        { name: "-", role: "STAFF" },
        { name: "-", role: "STAFF" },
        { name: "RISA", role: "RECRUIT" },
        { name: "AZRIEL", role: "RECRUIT" },
        { name: "IVANA", role: "RECRUIT" }
    ];

    adminList.innerHTML = "";
    admins.forEach(admin => {
        let card = document.createElement("div");
        card.className = "admin-card";
        card.innerHTML = `<strong>${admin.name}</strong> <br> Role: ${admin.role}`;
        adminList.appendChild(card);
    });
}
