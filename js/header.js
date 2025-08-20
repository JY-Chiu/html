const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle','nav-menu')

/* 處理沒有 dropdown 的連結 → 點擊後關閉整個 nav-menu */
const navLinks = document.querySelectorAll('.nav_list > li > a.nav_link');

navLinks.forEach(link => {
    const parentLi = link.parentElement;

    // 確認這個 <li> 不是 dropdown_item 才關閉整個 nav
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

        // 切換展開/收合
        item.classList.toggle("show-dropdown");

        // 如果想要一次只允許一個展開 → 打開下面這段
        dropdownItems.forEach(i => {
            if (i !== item) i.classList.remove("show-dropdown");
        });
    });
});
