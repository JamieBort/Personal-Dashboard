# mysql_commands.md

Commands I am using as I follow along with the tutorial.

`mysql -u root` to start mysql.

`SHOW DATABASES;` to list the existing databases.

`CREATE DATABASE IF NOT EXISTS employee_management_system;`

## connection info

From `jamiebort@MacBook-Pro:/usr/local/etc` run:

jamiebort@MacBook-Pro:/usr/local/etc$ cat my.cnf 
```
# Default Homebrew MySQL server config
[mysqld]
# Only allow connections from localhost
bind-address = 127.0.0.1
mysqlx-bind-address = 127.0.0.1
```

Also, while logged into mysql I ran `\s`. See:

`mysql> \s`

And the output was 

```
mysql> \s
--------------
mysql  Ver 8.0.32 for macos12.6 on x86_64 (Homebrew)

Connection id:		13
Current database:	
Current user:		root@localhost
SSL:			Not in use
Current pager:		stdout
Using outfile:		''
Using delimiter:	;
Server version:		8.0.32 Homebrew
Protocol version:	10
Connection:		Localhost via UNIX socket
Server characterset:	utf8mb4
Db     characterset:	utf8mb4
Client characterset:	utf8mb4
Conn.  characterset:	utf8mb4
UNIX socket:		/tmp/mysql.sock
Binary data as:		Hexadecimal
Uptime:			20 hours 47 min 28 sec

Threads: 2  Questions: 108  Slow queries: 0  Opens: 170  Flush tables: 3  Open tables: 87  Queries per second avg: 0.001
--------------

mysql> 

```

`select user, password, host from mysql.user;` throws an error.

But `select user, host from mysql.user;` displays a table to users and hosts:
| user             | host      |
| ----------- | ----------- |
| mysql.infoschema | localhost |
| mysql.session    | localhost |
| mysql.sys        | localhost |
| root             | localhost |

`SHOW GLOBAL VARIABLES LIKE 'PORT';`

| Variable_name | Value |
|---------------|-------|
| port          | 3306  |
