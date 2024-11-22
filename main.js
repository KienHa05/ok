const openTab = () => {
    window.open("https://khoahoc.28tech.com.vn/khoa-hoc-da-mua", "_blank");
}

const closeTab = () => {
    window.close();
}
const loadPage = () => {
    window.location.reload();
}
const fullName = prompt("Nhập tên bạn :"); // hgk
document.cookie = `fullName=${fullName}`;