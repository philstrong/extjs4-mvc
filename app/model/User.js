User = Ext.define('AM.model.User'
, {
        extend : 'Ext.data.Model'

    //, fields : [ 'name', 'email' ]

    , fields : [
        { name: 'name',  type: 'string' }
      , { name: 'email', type: 'string' }
      ]
    /**/

  }
);
