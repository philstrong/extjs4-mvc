// Az Application tartalmazza a globális beállításait az appnak (kezdve
// a nevével) és kezeli a model, kontroller, nézet referenciákat.

Ext.require('Ext.container.Viewport');
Ext.require('Ext.form.Panel');

Ext.application({

    name: 'AM'
  , appFolder: 'app'

  , controllers: [
    'Users'
  ]

  , launch: function () {
    Ext.create('Ext.container.Viewport', {

        layout: 'fit'

      , autoCreateViewport: true  // Automatically loads and instantiates
                                  // AppName.view.Viewport before firing the
                                  // launch function.
                                  
      , items: [
        {
          xtype: 'userlist'
            /*
            xtype: 'panel'
          , title: 'Users'
          , html:  'List of users will go here'
          /**/
        }
      ]
    }); // Ext.create
  } // function

}); // application
