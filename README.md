# ubuntu server install html

### 基本安裝指令

* 環境更新
```console
sudo apt update && sudo apt upgrade
sudo apt autoremove
```

* LEMP 架設
```console
sudo apt install nginx
  sudo systemctl start nginx
  sudo systemctl enable nginx
sudo apt install mariadb-server
  sudo mysql_secure_installation (安全性設定)
  sudo mysql -u root -p (登入測試)
sudo apt install php-fpm php-mysql php-gd php-curl php-mbstring php-zip php-json
  php -v
```

<details>
  <summary>參數修改</summary>

* /etc/nginx/sites-available/default
```console
server {
    listen 80;
    root /var/www/html;
    index index.php index.html index.htm;
    server_name your_domain_or_ip;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php-fpm.sock;
    }
}
```
</details>

* 安裝 phpMyAdmin
```console
sudo apt install phpmyadmin
```
在安裝過程中，系統會提示您選擇一個網路伺服器。 不要選擇Apache或Lighttpd。 按TAB鍵突出顯示<Ok>，然後按ENTER鍵繼續。 您還將被要求為phpMyAdmin配置資料庫；選擇是，併為phpmyadmin使用者設定密碼。
```console
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
sudo systemctl restart nginx
sudo systemctl restart php8.x-fpm
```

* phpmysql 登入者設定 root
```console
sudo mysql -u root
SELECT user, host, plugin FROM mysql.user;
ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';
```
