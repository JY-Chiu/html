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
sudo apt install mariadb-server mariadb-client
  sudo mysql_secure_installation (安全性設定)
  sudo mysql -u root -p (登入測試)
sudo apt install php-fpm php-cli php-common php-mbstring php-xmlrpc php-soap php-gd php-xml php-intl php-mysql php-cli php-ldap php-zip php-curl php-opcache php-readline php-xml php-gd php-json
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

## 使用 wordpress

* 下載安裝
```console
cd /tmp
wget https://wordpress.org/latest.tar.gz
tar -xvzf latest.tar.gz
sudo mv wordpress /var/www/wordpress
sudo chown -R www-data:www-data /var/www/wordpress
sudo chmod -R 755 /var/www/wordpress
```

* 設定 wordpress
```console
cd /var/www/wordpress
cp wp-config-sample.php wp-config.php
nano wp-config.php
  define('DB_NAME', 'wordpress');
  define('DB_USER', 'wpuser');
  define('DB_PASSWORD', '強密碼');
  define('DB_HOST', 'localhost');
```
