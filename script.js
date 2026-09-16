document.addEventListener("DOMContentLoaded", function () {
    const students = [
        { name: "أحمد محمد علي", id: "20260001", major: "تقنية المعلومات", status: "نشط" },
        { name: "خالد وليد", id: "20260002", major: "علوم الحاسوب", status: "نشط" },
        { name: "محمد عبدالله", id: "20260003", major: "الهندسة", status: "نشط" },
        { name: "سارة أحمد", id: "20260004", major: "إدارة الأعمال", status: "نشط" },
        { name: "علي حسن", id: "20260005", major: "الرياضيات", status: "غير نشط" },
        { name: "فاطمة محمد", id: "20260006", major: "تقنية المعلومات", status: "نشط" }
    ];
    const body = document.getElementById("students-body");
    const empty = document.getElementById("no-students");
    function displayStudents(list) {
        body.innerHTML = list.map((student, index) => `<tr><td>${index + 1}</td><td>${student.name}</td><td>${student.id}</td><td>${student.major}</td><td class="${student.status === "نشط" ? "active-status" : "inactive-status"}">${student.status}</td></tr>`).join("");
        empty.hidden = list.length > 0;
    }
    displayStudents(students);
    document.getElementById("student-search-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const query = document.getElementById("student-search").value.trim().toLowerCase();
        displayStudents(students.filter((student) => [student.name, student.id, student.major].some((value) => value.toLowerCase().includes(query))));
    });
    document.getElementById("show-all").addEventListener("click", function () { document.getElementById("student-search").value = ""; displayStudents(students); });
});
