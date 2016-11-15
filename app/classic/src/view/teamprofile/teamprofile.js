/**
 * This view is an example list of people.
 */
Ext.define('MyAppName.view.teamprofile.teamprofile', {
    extend: 'Ext.panel.Panel',
    xtype: 'teamprofile',
    title: 'Home',
	autoScroll:true,
	layout:'vbox',
	 initComponent: function() {
	        var attIns = this;
	        attIns.items = [
			{
        	xtype:'container'
            , items:[
            	{
                    html    :   'carousel',
                    cls     :   'card',
                    style: 'background-color: green'
                },
                {
                    html    :   'carousel',
                    cls     :   'card',
                    style: 'background-color: red'
                }
            ]
        }
    ]
	 attIns.callParent(arguments);
	    } 
});
