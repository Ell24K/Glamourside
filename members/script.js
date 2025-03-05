document.addEventListener("DOMContentLoaded", function () {
    loadMembers();
});

function loadMembers() {
    let memberList = document.getElementById("memberList");
    let storedMembers = JSON.parse(localStorage.getItem("members")) || [];

    memberList.innerHTML = "";
    storedMembers.forEach(member => {
        let card = document.createElement("div");
        card.className = "member-card";
        card.innerHTML = `<strong>${member.name}</strong> <br> Level: ${member.level}`;
        memberList.appendChild(card);
    });

    // Update jumlah member
    document.getElementById("memberCount").textContent = storedMembers.length + "+";
}
