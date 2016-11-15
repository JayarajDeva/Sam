	/**
	 * This view is an example list of people.
	 */
	Ext.define('MyAppName.view.service.serviceview', {
		extend: 'Ext.panel.Panel',
		xtype: 'serviceview',
		title: 'Security Service',
		autoScroll:true,
		layout:'vbox',
		 initComponent: function() {
				var attIns = this;
				//var tpl = 
				//tpl.overwrite(); 
				attIns.items = [
				 {
				 xtype:'container',
				 html:new Ext.XTemplate(
					'<p><b><i>We Provide SECURITY OFFICERS FOR</i></b></p>',								    
					 '<p>&nbsp;&nbsp;•&nbsp;&nbsp;	COMMERCIAL AND INDUSTRIAL ESTABLISHMENTS</p>',
					 '<p>&nbsp;&nbsp;•&nbsp;&nbsp;	VESSELS</p>',
					 '<p>&nbsp;&nbsp;•&nbsp;&nbsp;	PRIVATE RESIDENTIAL ESTATES</p>',
					 '<p>&nbsp;&nbsp;•&nbsp;&nbsp;	HOTELS</p>',
					 '<p>&nbsp;&nbsp;•	&nbsp;&nbsp;GOLF AND COUNTRY CLUBS</p>',
					 '<p>&nbsp;&nbsp;•	&nbsp;&nbsp;CONSTRUCTION SITES</p>',
					 '<p>&nbsp;&nbsp;•&nbsp;&nbsp;	HOLIDAY RESORTS</p>',
					 '<p>&nbsp;&nbsp;•&nbsp;&nbsp;	LEISURE INDUSTRIES</p>',
					 '<p>&nbsp;&nbsp;•	&nbsp;&nbsp;EXHIBITIONS AND RELATED ORGANISED GATHERINGS</p>'
				)
				 },
				 {
				 xtype:'panel',
				 width:850,
				 wrap:true,
				 html:'Our primary aim is to provide comprehensive professional security service for our clients. This includes the provision of investigative resources such as missing company property, which may not be under the purview of the police. We will make available experienced personnel to investigate such occurrences, if the company so requires. Notwithstanding this, we can be relied on to tailor any special security needs you may require'
				 },
				 {
					 xtype:'panel',
					 html:new Ext.XTemplate('<p><b>Private Investigation and In-House Investigation Services</b></p>',	
					 '<p><i>We are licensed by PLRD to conduct Private Investigation services such as:</i></p>',
						  '<p>•	Company pilferage</p>',
						  '<p>•	Industrial cases</p>'
						  )
				 }
		 ];
		 attIns.callParent(arguments);
			} 
	});
