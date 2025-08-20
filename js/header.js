const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-icon');

        // 每次打開 nav-menu 時，把所有下拉選單收起
        if (nav.classList.contains('show-menu')) {
            const dropdowns = document.querySelectorAll('.dropdown_item');
            dropdowns.forEach(item => item.classList.remove('show-dropdown'));
        }
    });
};
showMenu('nav-toggle','nav-menu');

/* 處理沒有 dropdown 的連結 → 點擊後關閉整個 nav-menu */
const navLinks = document.querySelectorAll('.nav_list > li > a.nav_link');
navLinks.forEach(link => {
    const parentLi = link.parentElement;

    if (!parentLi.classList.contains("dropdown_item")) {
        link.addEventListener('click', () => {
            const nav = document.getElementById('nav-menu');
            const toggle = document.getElementById('nav-toggle');
            nav.classList.remove('show-menu');
            toggle.classList.remove('show-icon');
        });
    }
});

/* 處理 dropdown（專業服務 / 解決方案） */
const dropdownItems = document.querySelectorAll('.dropdown_item');
dropdownItems.forEach(item => {
    const link = item.querySelector('.nav_link');
    link.addEventListener('click', (e) => {
        e.preventDefault(); // 阻止超連結導致收合 nav-menu

        // 切換展開/收合自己
        item.classList.toggle("show-dropdown");

        // 保持「一次只展開一個」邏輯
        dropdownItems.forEach(i => {
            if (i !== item) i.classList.remove("show-dropdown");
        });
    });
});
