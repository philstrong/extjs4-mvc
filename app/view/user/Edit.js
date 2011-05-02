// http://dev.sencha.com/deploy/ext-4.0.0/docs/api/Ext.window.Window.html

Ext.define('AM.view.user.Edit', {

    extend :    'Ext.window.Window'
  , alias :     'widget.useredit'
  , title :     'Edit User'
  , layout :    'fit'
  , width :     '269'
  , autoShow :  true

  , initComponent : function () {
    this.items = [
      {
        xtype : 'form',
        items : [
          {
              xtype :      'textfield'
            , name :       'name'
            , fieldLabel : 'Name'
          }
          , {
              xtype :      'textfield'
            , name :       'email'
            , fieldLabel : 'email'
          }
        ] // form items array
      }
    ]; // window items

    this.buttons = [
      {
          text :   'Save'
        , action : 'save'  // we can listen to this as button[action=save]
      }
      , {
          text :    'Cancel'
        , scope :   this
        , handler : this.close
      }
    ]; // window buttons

    this.callParent(arguments);

  } // initComponent
});



