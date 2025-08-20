const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle','nav-menu')

/* 只針對沒有下拉的連結才會關閉整個 nav-menu */
const navLinks = document.querySelectorAll('.nav_list > li > a.nav_link');

navLinks.forEach(link => {
    // 檢查這個 <li> 是否有 dropdown_menu
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

/* 處理 dropdown（專業服務、解決方案） */
const dropdownItems = document.querySelectorAll('.dropdown_item');

dropdownItems.forEach(item => {
    const link = item.querySelector('.nav_link');
    link.addEventListener('click', (e) => {
        e.preventDefault(); // 阻止超連結直接收合 nav-menu

        // 切換展開 / 收合
        item.classList.toggle("show-dropdown");

        // 如果要同時間只允許一個展開，就加這段
        dropdownItems.forEach(i => {
            if (i !== item) i.classList.remove("show-dropdown");
        });
    });
});
