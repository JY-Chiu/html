const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle','nav-menu')

// 取得所有「一般連結」（不包含有下拉的）
const navLinks = document.querySelectorAll('.nav_list > li > a.nav_link');

// 點擊「一般連結」才會關閉整個選單
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('nav-menu');
        const toggle = document.getElementById('nav-toggle');
        nav.classList.remove('show-menu');
        toggle.classList.remove('show-icon');
    });
});

// 下拉選單點擊展開 / 收合
const dropdownItems = document.querySelectorAll('.dropdown_item');

dropdownItems.forEach(item => {
    const link = item.querySelector('.nav_link');
    link.addEventListener('click', (e) => {
        e.preventDefault(); // 防止 # 跳轉

        // 如果已經打開，再點擊就收合
        if (item.classList.contains("show-dropdown")) {
            item.classList.remove("show-dropdown");
        } else {
            // 先關閉其他 dropdown，再打開自己
            dropdownItems.forEach(i => i.classList.remove("show-dropdown"));
            item.classList.add("show-dropdown");
        }
    });
});
