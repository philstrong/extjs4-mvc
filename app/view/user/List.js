// http://dev.sencha.com/deploy/ext-4.0.0/docs/api/Ext.grid.Panel.html
//
// A View nem más mint egy olyan komponens amely általában egy
// meglévő Ext JS komponens alosztályaként lesz definiálva.

Ext.define('AM.view.user.List'
, {
      extend: 'Ext.grid.Panel'  // meglévő komponens

    , alias : 'widget.userlist'  // a widget. név speciális jelentésű

    , title : 'All Users'

    , initComponent: function () {

        this.store = 'Users',

        /*
        this.store = {
          fields: ['name', 'email'],
          data  : [
            {name: 'Ed',    email: 'ed@sencha.com'},
            {name: 'Tommy', email: 'tommy@sencha.com'}
          ]
        };
        /**/

        this.columns = [
            { header: 'Name',  dataIndex: 'name',  flex: 1 }
          , { header: 'Email', dataIndex: 'email', flex: 1 }
        ];

        this.callParent(arguments);

    } // initComponent

  }
); // define
