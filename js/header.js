const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-icon');

        // 每次打開 nav-menu 時，收起所有下拉選單
        if (nav.classList.contains('show-menu')) {
            const dropdowns = document.querySelectorAll('.dropdown_item');
            dropdowns.forEach(item => item.classList.remove('show-dropdown'));
        }
    });
};
showMenu('nav-toggle','nav-menu');

/* 處理普通連結（沒有下拉的） */
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

/* 處理下拉選單標題（專業服務 / 解決方案） */
const dropdownItems = document.querySelectorAll('.dropdown_item');

dropdownItems.forEach(item => {
    const link = item.querySelector('.nav_link');
    link.addEventListener('click', (e) => {
        e.preventDefault(); // 阻止收掉整個 nav-menu
        item.classList.toggle("show-dropdown"); // 切換展開/收合

        // 只允許同一時間展開一個下拉
        dropdownItems.forEach(i => {
            if (i !== item) i.classList.remove("show-dropdown");
        });
    });

    // 處理子選單項目點擊 → 收掉整個 nav-menu
    const subLinks = item.querySelectorAll('.dropdown_link');
    subLinks.forEach(sub => {
        sub.addEventListener('click', () => {
            const nav = document.getElementById('nav-menu');
            const toggle = document.getElementById('nav-toggle');
            nav.classList.remove('show-menu');
            toggle.classList.remove('show-icon');
        });
    });
});
