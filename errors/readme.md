# Solutions to errors in this project

## Error in migrate:latest

```
Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
    at Handshake.Sequence._packetToError (D:\Documentos\ProjetosWeb\mysql-desktop-crud\node_modules\mysql\lib\protocol\sequences\Sequence.js:47:14)
    at Handshake.ErrorPacket (D:\Documentos\ProjetosWeb\mysql-desktop-crud\node_modules\mysql\lib\protocol\sequences\Handshake.js:123:18)
    at Protocol._parsePacket (D:\Documentos\ProjetosWeb\mysql-desktop-crud\node_modules\mysql\lib\protocol\Protocol.js:291:23)
    at Parser.write (D:\Documentos\ProjetosWeb\mysql-desktop-crud\node_modules\mysql\lib\protocol\Parser.js:43:10)
    at Protocol.write (D:\Documentos\ProjetosWeb\mysql-desktop-crud\node_modules\mysql\lib\protocol\Protocol.js:38:16)
    at Socket.<anonymous> (D:\Documentos\ProjetosWeb\mysql-desktop-crud\node_modules\mysql\lib\Connection.js:88:28)
    at Socket.<anonymous> (D:\Documentos\ProjetosWeb\mysql-desktop-crud\node_modules\mysql\lib\Connection.js:526:10)
    at Socket.emit (events.js:311:20)
    at addChunk (_stream_readable.js:294:12)
    --------------------
    at Protocol._enqueue (D:\Documentos\ProjetosWeb\mysql-desktop-crud\node_modules\mysql\lib\protocol\Protocol.js:144:48)
    at Protocol.handshake (D:\Documentos\ProjetosWeb\mysql-desktop-crud\node_modules\mysql\lib\protocol\Protocol.js:51:23)
    at Connection.connect (D:\Documentos\ProjetosWeb\mysql-desktop-crud\node_modules\mysql\lib\Connection.js:116:18)
    at D:\Documentos\ProjetosWeb\mysql-desktop-crud\node_modules\knex\lib\dialects\mysql\index.js:69:18
    at new Promise (<anonymous>)
    at Client_MySQL.acquireRawConnection (D:\Documentos\ProjetosWeb\mysql-desktop-crud\node_modules\knex\lib\dialects\mysql\index.js:64:12)                                                                                                                                 4:12)
    at create (D:\Documentos\ProjetosWeb\mysql-desktop-crud\node_modules\knex\lib\client.js:291:39)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
```

## Solution

Execute the following query in MYSQL Workbench

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
```

Where root as your user localhost as your URL and password as your password

Then run this query to refresh privileges:

```
flush privileges;
```

Try connecting using node after you do so.

If that doesn't work, try it without @'localhost' part.

<hr>

## Error: These dependencies were not found

if the yarn serve results in the following error:

```
These dependencies were not found:

    mssql in ./node_modules/knex/lib/dialects/mssql/index.js
    mssql/lib/base in ./node_modules/knex/lib/dialects/mssql/index.js
    mssql/package.json in ./node_modules/knex/lib/dialects/mssql/index.js
    mysql in ./node_modules/knex/lib/dialects/mysql/index.js
    mysql2 in ./node_modules/knex/lib/dialects/mysql2/index.js
    oracledb in ./node_modules/knex/lib/dialects/oracledb/index.js
    pg in ./node_modules/knex/lib/dialects/postgres/index.js, ./node_modules/knex/lib/dialects/redshift/index.js
    pg-query-stream in ./node_modules/knex/lib/dialects/postgres/index.js
    tedious in ./node_modules/knex/lib/dialects/mssql/index.js
```

## Solution

create a ```vue.config.js``` in the root of the application with the following code:

```
module.exports = {
    pluginOptions: {
        electronBuilder: {
            externals: ['knex', 'mysql'],
            nodeModulesPath: ['./node_modules']
        }
    }
}
```