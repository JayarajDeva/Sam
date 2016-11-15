/**
 * This view is an example list of people.
 */
Ext.define('MyAppName.view.main.List', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlist',
    title: 'Home',	
	autoScroll:true,
	layout:'vbox',
	 initComponent: function() {
	        var attIns = this;
	        
	 attIns.callParent(arguments);
	    } 
});
