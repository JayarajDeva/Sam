	/**
	 * This view is an example list of people.
	 */
	Ext.define('MyAppName.view.products.products', {
		extend: 'Ext.panel.Panel',
		xtype: 'productview',
		title: 'Products',
		autoScroll:true,
		layout:'fit',
		 initComponent: function() {
				var attIns = this;
				var store = Ext.create('Ext.data.Store', {
				 fields:['products','description','imagesD'],
				 data : [
					 {products: 'CCTV (with or without vision)', imagesD:'/resources/Images/CCTV-Camera-icon.png' , description: 'Record data on hard disk (depending on size and can be saved externally) for easy retrieval and longevity of data'},
					 {products: 'Clocking Device',    imagesD: '/resources/Images/cld.JPG',description:'To retrieve data recorded in real time using RFID scanners for Client at any time'},
					 {products: 'Biometric Scanner',     imagesD: '/resources/Images/bio.JPG',description:'Scan fingerprint to report for and off duty, system will prompt if security officer does not scan finger print.'},
					 {products: 'Security Passes',     imagesD: '/resources/Images/sp.JPG',description:'STOP Security Checkpoint, Visitors to report to GuardPost, Premises is secured by SAM SECURITY etc'},
					 {products: 'Sign Boards', imagesD: '/resources/Images/road-sign-boards.JPG',description:'Staff Pass, Contractors Pass, Visitors Pass.'}
				 ]
			 });
				attIns.items = [
			{
				xtype:'gridpanel',
				
				 viewConfig: {
					enableTextSelection: true
				},
				store:store,
				  
				 plugins: [{
						ptype: 'rowexpander',
						selectRowOnExpand: true,
						rowBodyTpl: new Ext.XTemplate(
						'<div ><img src={imagesD} />',
						'</div>' )
				}], 
				border:true,
				columns: [
					{
						xtype: 'gridcolumn',
						text:'products',
						cellWrap:true,
						dataIndex: 'products',
						align:'left',
						flex: 1
					},
					{   xtype: 'gridcolumn',
					    cellWrap:true,
						text: 'Description',
						align:'left',
						dataIndex: 'description',
						flex:3
					}]
			}
		]
		 attIns.callParent(arguments);
			} 
	});
