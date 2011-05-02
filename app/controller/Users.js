// http://dev.sencha.com/deploy/ext-4.0.0/docs/api/Ext.app.Controller.html

Ext.define('AM.controller.Users'
  , {
        extend : 'Ext.app.Controller'

      , stores : [
          'Users'
      ]

      , views : [
          'user.List'
        , 'user.Edit'
      ]

      , models : [
          'User'
      ]

      , init: function () {
          if (typeof console !== "undefined") {
            console.log('Initialized Users!');
            console.log('This happens before the Application launch function is called');
          }
          this.control({
              'viewport > panel': {
                render: this.onPanelRendered
              }
            , 'userlist': {
                itemdblclick: this.editUser
              }
            , 'useredit button[action=save]': {
              click : this.updateUser
            }
          });
        }

      , onPanelRendered: function () {
          if (typeof console !== "undefined") {
            console.log('The panel was rendered');
          }
        }

      , editUser : function (grid, record) {
          if (typeof console !== "undefined") {
            console.log('Double clicked on ' + record.get('name'));
          }

          var view = Ext.widget('useredit'); // same as Ext.create('widget.useredit');

          view.down('form').loadRecord(record);
        }

      , updateUser: function (button) {
          var   win = button.up('window')
              , form = win.down('form')
              , record = form.getRecord()
              , values = form.getValues();


          if (typeof console !== "undefined") {
            console.log('clicked the Save button');
          }

          record.set(values);
          win.close();
          this.getUsersStore().sync();
      }

    }
);
