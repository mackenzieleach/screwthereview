const { Connection, Request } = require('tedious');

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: 'username', // update me
      password: 'password', // update me
    },
    type: 'default',
  },
  server: 'your_server.database.windows.net', // update me
  options: {
    database: 'your_database', // update me
    encrypt: true,
  },
};

/*
    //Use Azure VM Managed Identity to connect to the SQL database
    const connection = new Connection({
    server: process.env["db_server"],
    authentication: {
        type: 'azure-active-directory-msi-vm',
    },
    options: {
        database: process.env["db_database"],
        encrypt: true,
        port: 1433
    }
});
    //Use Azure App Service Managed Identity to connect to the SQL database
    const connection = new Connection({
    server: process.env["db_server"],
    authentication: {
        type: 'azure-active-directory-msi-app-service',
    },
    options: {
        database: process.env["db_database"],
        encrypt: true,
        port: 1433
    }
});

*/

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

function queryDatabase() {
  console.log('Reading rows from the Table...');

  // Read all rows from table
  const request = new Request(
    `SELECT TOP 20 pc.Name as CategoryName,
                   p.name as ProductName
     FROM [SalesLT].[ProductCategory] pc
     JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    },
  );

  request.on('row', (columns) => {
    columns.forEach((column) => {
      console.log('%s\t%s', column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}
