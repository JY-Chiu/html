const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle','nav-menu')

/* 只針對一般連結（沒有下拉的）關閉整個 nav-menu */
const navLinks = document.querySelectorAll('.nav_list > li > a.nav_link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('nav-menu');
        const toggle = document.getElementById('nav-toggle');
        nav.classList.remove('show-menu');
        toggle.classList.remove('show-icon');
    });
});

/* 處理 dropdown（專業服務、解決方案） */
const dropdownItems = document.querySelectorAll('.dropdown_item');

dropdownItems.forEach(item => {
    const link = item.querySelector('.nav_link');
    link.addEventListener('click', (e) => {
        e.preventDefault(); // 阻止連結直接收合 menu

        // 切換 show-dropdown class
        if (item.classList.contains("show-dropdown")) {
            item.classList.remove("show-dropdown");
        } else {
            // 關掉其他 dropdown
            dropdownItems.forEach(i => i.classList.remove("show-dropdown"));
            item.classList.add("show-dropdown");
        }
    });
});
