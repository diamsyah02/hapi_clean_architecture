const ModuleAlias = require('module-alias')

ModuleAlias.addAliases({
  "@helpers" : `${__dirname}/helpers`,
  "@configs" : `${__dirname}/configs`,
  "@v1"  : `${__dirname}/app/v1`
})