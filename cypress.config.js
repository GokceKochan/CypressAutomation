const { defineConfig } = require("cypress");


const mysql = require('mysql')

function queryTestDb(query, config) {

  const connection = mysql.createConnection(config.env.db)

  connection.connect()

  return new Promise((resolve, reject) => {

    connection.query(query,(error,result)=>{

      if(error) reject(error)

      else{
        connection.end()
        return resolve(result)
      }
    })
  })
}


module.exports = defineConfig({
  chromeWebSecurity: false,
  hideXHR: true,
  viewportWidth: 1366,
  viewportHeight: 768,

  e2e: {
    // baseUrl:'https://demoqa.com/',
    watchForFileChanges: false,
    video: false,

    setupNodeEvents(on, config) {

      on('task',{queryDb: query=>{ return queryTestDb(query,config)}})


      // implement node event listeners here
    },
  },
  env: {
    userName: "omer",
    db: {
      host: '51.158.110.102',
      port: '3366',
      user: "urbanicfarm_mysql_user",
      password: "urbanicfarm_mysql_password",
      database: "urbanicfarm"
    }
  }
});