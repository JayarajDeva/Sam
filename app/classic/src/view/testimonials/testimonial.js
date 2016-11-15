/**
 * This view is an example list of people.
 */
Ext.define('MyAppName.view.testimonials.testimonial', {
    extend: 'Ext.panel.Panel',
    xtype: 'testimonial',
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
