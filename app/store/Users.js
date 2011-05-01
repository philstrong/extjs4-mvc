// http://dev.sencha.com/deploy/ext-4.0.0/docs/api/Ext.data.Store.html

Ext.define('AM.store.Users'
, {
      extend : 'Ext.data.Store'
    
    , model : 'AM.model.User'
    //, fields : [ 'name', 'email' ]

    , autoLoad: true             // Store will ask Proxy to load data imediately

    , proxy : {
          type : 'ajax'
        // , url : 'data/users.json' // read
        , api: {
              read: 'data/users.json'
            , update: 'data/updateUsers.json'
          }
        , reader : {
              type : 'json'
            , root : 'users'
            , successProperty : 'success'
          }
      }

    /* // hard coded data replaced with proxy
    , data : [
        { name: 'Ed',    email: 'ed@sencha.com' }
      , { name: 'Tommy', email: 'tommy@sencha.com' }
      ]
    /**/

    /*
    , proxy: {
          type: 'ajax'
        , url : '/users.json'
        , reader: {
              type: 'json'
            , root: 'users'
          }
      }
      
    
    /**/

    /*
    associations: [
        {type: 'hasMany', model: 'Product', name: 'products'}
    ],
    proxy: {
        type: 'localstorage',
        id  : 'users'
    }
    /**/

  }
);