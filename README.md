# hapi_clean_architecture
 Clean Architecture For Hapi JS
# Package
 - @hapi/hapi V20.2.1
 - @hapi/jwt V2.1.0
 - bcrypt V5.0.1
 - dotenv V16.0.0
 - jsonwebtoken V8.5.1
 - knex V0.95.11
 - mysql V2.18.1
# Alur routes
 - index.js (folder root project)
 - index.js (folder routes)
 - routes.js (folder app/v1)
 - routes.js (folder app/v1/modules/pegawai)
# Alur coding modules
 controller -> service -> repository
 - controller untuk interaksi dengan routes
 - service penanganan logic/alur bisnis
 - repository untuk interaksi dengan database
