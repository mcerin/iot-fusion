const a0_0x3fc4=['value|variance|86400000','variance','return\x20/\x22\x20+\x20this\x20+\x20\x22/','timevalue','dayOfYear|max|604800000','max','parse','dayAfterHoliday','isMaster','nodes','close','timeDiff','master\x20set\x20correctly','processRecord','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','value|max|86400000','Base','../nodes/staticCalculatedNode.js','fusionNodeI','function','monthOfYear','calculateValue','calculated','checkDataAvailability','stream\x20fusion','dayOfYear|min|604800000','config','weekEnd|ma|604800000','../common/utils/fileManager.js','deepEqual','calculated\x20values\x20retrieved\x20correctly','test','none','equal','qminer','processRecordCb','min','value','weekEnd','value|ma|86400000','assert','data\x20retrieval','dayBeforeHoliday','../streamFusion.js','2020-08-19','createClean','dayOfYear','setMasterOffset','parent','base','dayOfWeek','holiday','createFolder','{\x22time\x22:\x201451610000,\x22value\x22:\x2020.0}','static\x20values\x20retrieved\x20correctly','winbuf','getPartialFeatureVector\x20function\x20exists','callback\x20function\x20should\x20be\x20set','./db4/','removeFolder','hourOfDay','dayOfMonth','staticValue','holidays','weekEnd|variance|604800000','setSlaveOffset','slave\x20offset\x20set\x20correctly:\x20no\x20data\x20needed','fusionNodeI\x20correctly\x20saved','getPartialFeatureVector'];(function(_0x20f61f,_0x3fc4ed){const _0x2e8cb7=function(_0x40ee62){while(--_0x40ee62){_0x20f61f['push'](_0x20f61f['shift']());}},_0x448013=function(){const _0x471f81={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xc537b6,_0x55429c,_0x1acc43,_0x21a33e){_0x21a33e=_0x21a33e||{};let _0x514fa2=_0x55429c+'='+_0x1acc43,_0x59fa22=0x0;for(let _0x37af57=0x0,_0x57da64=_0xc537b6['length'];_0x37af57<_0x57da64;_0x37af57++){const _0x3e0b00=_0xc537b6[_0x37af57];_0x514fa2+=';\x20'+_0x3e0b00;const _0x264076=_0xc537b6[_0x3e0b00];_0xc537b6['push'](_0x264076),_0x57da64=_0xc537b6['length'],_0x264076!==!![]&&(_0x514fa2+='='+_0x264076);}_0x21a33e['cookie']=_0x514fa2;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2ac52a,_0xb18392){_0x2ac52a=_0x2ac52a||function(_0x1226b0){return _0x1226b0;};const _0x2c2cf3=_0x2ac52a(new RegExp('(?:^|;\x20)'+_0xb18392['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1ee6f6=function(_0x49fc82,_0x45f566){_0x49fc82(++_0x45f566);};return _0x1ee6f6(_0x2e8cb7,_0x3fc4ed),_0x2c2cf3?decodeURIComponent(_0x2c2cf3[0x1]):undefined;}},_0x3945bc=function(){const _0xe6f76b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xe6f76b['test'](_0x471f81['removeCookie']['toString']());};_0x471f81['updateCookie']=_0x3945bc;let _0x5b16f9='';const _0x2fb350=_0x471f81['updateCookie']();if(!_0x2fb350)_0x471f81['setCookie'](['*'],'counter',0x1);else _0x2fb350?_0x5b16f9=_0x471f81['getCookie'](null,'counter'):_0x471f81['removeCookie']();};_0x448013();}(a0_0x3fc4,0xee));const a0_0x2e8c=function(_0x20f61f,_0x3fc4ed){_0x20f61f=_0x20f61f-0x0;let _0x2e8cb7=a0_0x3fc4[_0x20f61f];return _0x2e8cb7;};const a0_0x1acc43=function(){let _0xefeaad=!![];return function(_0x3d970d,_0x1942d0){const _0x21fb60=_0xefeaad?function(){if(_0x1942d0){const _0x1be50f=_0x1942d0['apply'](_0x3d970d,arguments);return _0x1942d0=null,_0x1be50f;}}:function(){};return _0xefeaad=![],_0x21fb60;};}(),a0_0x55429c=a0_0x1acc43(this,function(){const _0x42a6d9=function(){const _0x7b287e=_0x42a6d9['constructor'](a0_0x2e8c('0x28'))()['constructor'](a0_0x2e8c('0x34'));return!_0x7b287e[a0_0x2e8c('0x0')](a0_0x55429c);};return _0x42a6d9();});a0_0x55429c();const staticCalculationNode=require(a0_0x2e8c('0x37')),StreamFusion=require(a0_0x2e8c('0xc')),fileManager=require(a0_0x2e8c('0x42')),qm=require(a0_0x2e8c('0x3')),fs=require('fs');var assert=require(a0_0x2e8c('0x9'));let connectionConfig={'zookeeper':'192.168.85.98:2181'},aggrConfigs={'timevalue':[{'field':a0_0x2e8c('0x6'),'tick':[{'type':a0_0x2e8c('0x18'),'winsize':0x6*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'}]},{'type':a0_0x2e8c('0x18'),'winsize':0xc*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'},{'type':'min'},{'type':a0_0x2e8c('0x2b')},{'type':'variance'}]},{'type':a0_0x2e8c('0x18'),'winsize':0x18*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'},{'type':a0_0x2e8c('0x5')},{'type':a0_0x2e8c('0x2b')},{'type':a0_0x2e8c('0x27')}]},{'type':a0_0x2e8c('0x18'),'winsize':0x7*0x18*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'}]}]}]},fusionConfig={'fusionModel':'staticCalculated','connection':{'type':a0_0x2e8c('0x1')},'fusionTick':0x3c*0x3c*0x3e8,'nodes':[{'type':a0_0x2e8c('0x29'),'nodeid':a0_0x2e8c('0x29'),'aggrConfigId':a0_0x2e8c('0x29'),'master':!![],'attributes':[{'time':0x0,'attributes':[{'type':a0_0x2e8c('0x6'),'name':a0_0x2e8c('0x6')},{'type':a0_0x2e8c('0x6'),'name':a0_0x2e8c('0x8')},{'type':'value','name':'value|min|86400000'},{'type':a0_0x2e8c('0x6'),'name':a0_0x2e8c('0x35')},{'type':a0_0x2e8c('0x6'),'name':a0_0x2e8c('0x26')}]}]},{'type':a0_0x2e8c('0x3c'),'nodeid':a0_0x2e8c('0x3c'),'aggrConfigId':a0_0x2e8c('0x3c'),'nodeFrequency':0x36ee80,'fusionTick':0x36ee80,'master':![],'holidays':['2020-08-21',a0_0x2e8c('0xd')],'attributes':[{'time':0x0,'attributes':[{'type':a0_0x2e8c('0x6'),'name':'hourOfDay'},{'type':'value','name':a0_0x2e8c('0x13')},{'type':a0_0x2e8c('0x6'),'name':a0_0x2e8c('0x2d')},{'type':a0_0x2e8c('0x6'),'name':a0_0x2e8c('0xb')},{'type':a0_0x2e8c('0x6'),'name':a0_0x2e8c('0xf')},{'type':'value','name':a0_0x2e8c('0x1e')},{'type':'value','name':a0_0x2e8c('0x14')},{'type':'value','name':a0_0x2e8c('0x3a')},{'type':a0_0x2e8c('0x6'),'name':a0_0x2e8c('0x7')},{'type':'value','name':a0_0x2e8c('0x41')},{'type':a0_0x2e8c('0x6'),'name':a0_0x2e8c('0x3f')},{'type':a0_0x2e8c('0x6'),'name':a0_0x2e8c('0x2a')},{'type':a0_0x2e8c('0x6'),'name':a0_0x2e8c('0x21')}]},{'time':-0x18,'attributes':[{'type':'value','name':a0_0x2e8c('0x2d')},{'type':'value','name':a0_0x2e8c('0xb')},{'type':'value','name':a0_0x2e8c('0xf')},{'type':a0_0x2e8c('0x6'),'name':a0_0x2e8c('0x1e')},{'type':a0_0x2e8c('0x6'),'name':'holiday'},{'type':a0_0x2e8c('0x31'),'name':'hourOfDay','interval':0x5}]}]}]};function processRecordDummyCb(_0x30ee9,_0xa84da9){return!![];}describe('staticCalculatedNode',function(){let _0x371f48,_0x247ecb;before(function(){fileManager[a0_0x2e8c('0x1c')](a0_0x2e8c('0x1b')),fileManager[a0_0x2e8c('0x15')](a0_0x2e8c('0x1b')),_0x371f48=new qm[(a0_0x2e8c('0x36'))]({'dbPath':'./db4/','mode':a0_0x2e8c('0xe')}),scn=new staticCalculationNode(_0x371f48,connectionConfig,fusionConfig[a0_0x2e8c('0x2f')][0x1],aggrConfigs,processRecordDummyCb,0x63,null),fusion=new StreamFusion(connectionConfig,fusionConfig,aggrConfigs);}),after(function(){_0x371f48[a0_0x2e8c('0x30')]();}),describe('initialization',function(){it('base\x20saved',function(){assert[a0_0x2e8c('0x2')](_0x371f48,scn[a0_0x2e8c('0x12')]);}),it('config\x20saved',function(){assert['deepEqual'](scn[a0_0x2e8c('0x40')],fusionConfig[a0_0x2e8c('0x2f')][0x1]);}),it(a0_0x2e8c('0x24'),function(){assert[a0_0x2e8c('0x2')](scn[a0_0x2e8c('0x38')],0x63);}),it(a0_0x2e8c('0x1a'),function(){assert[a0_0x2e8c('0x2')](typeof scn[a0_0x2e8c('0x4')],a0_0x2e8c('0x39'));}),it('parent\x20saved',function(){assert['equal'](scn[a0_0x2e8c('0x11')],null);}),it('isMaster\x20function',function(){assert[a0_0x2e8c('0x2')](scn[a0_0x2e8c('0x2e')](),![]);}),it('checkDataAvailability\x20function\x20exists',function(){assert[a0_0x2e8c('0x2')](typeof scn[a0_0x2e8c('0x3d')],a0_0x2e8c('0x39'));}),it('setSlaveOffset\x20function\x20exists',function(){assert[a0_0x2e8c('0x2')](typeof scn[a0_0x2e8c('0x22')],a0_0x2e8c('0x39'));}),it(a0_0x2e8c('0x19'),function(){assert[a0_0x2e8c('0x2')](typeof scn[a0_0x2e8c('0x25')],a0_0x2e8c('0x39'));}),it(a0_0x2e8c('0x32'),function(){assert[a0_0x2e8c('0x2')](scn[a0_0x2e8c('0x2e')](),![]);}),it(a0_0x2e8c('0x23'),function(){assert[a0_0x2e8c('0x2')](scn['setSlaveOffset'](0x0),!![]);}),it(a0_0x2e8c('0x20'),function(){assert[a0_0x2e8c('0x43')](scn[a0_0x2e8c('0x20')],['2020-08-21',a0_0x2e8c('0xd')]);});}),describe(a0_0x2e8c('0xa'),function(){it(a0_0x2e8c('0x17'),function(){const _0x11f744=0x1740c8f0439;assert[a0_0x2e8c('0x2')](scn[a0_0x2e8c('0x1f')](_0x11f744,a0_0x2e8c('0x1d')),0x11),assert[a0_0x2e8c('0x2')](scn[a0_0x2e8c('0x1f')](_0x11f744,a0_0x2e8c('0x13')),0x4),assert['equal'](scn[a0_0x2e8c('0x1f')](_0x11f744,a0_0x2e8c('0x1e')),0x14),assert['equal'](scn['staticValue'](_0x11f744,a0_0x2e8c('0x3a')),0x8),assert[a0_0x2e8c('0x2')](scn[a0_0x2e8c('0x1f')](_0x11f744,a0_0x2e8c('0x7')),0x0),assert[a0_0x2e8c('0x2')](scn[a0_0x2e8c('0x1f')](_0x11f744,'dayAfterHoliday'),0x1),assert[a0_0x2e8c('0x2')](scn['staticValue'](_0x11f744,a0_0x2e8c('0x14')),0x0),assert[a0_0x2e8c('0x2')](scn[a0_0x2e8c('0x1f')](_0x11f744,a0_0x2e8c('0xb')),0x1);}),it(a0_0x2e8c('0x44'),function(){const _0x386c89=0x1740c8f0439+0x18*0x3c*0x3c*0x3e8;assert[a0_0x2e8c('0x2')](scn[a0_0x2e8c('0x3b')](_0x386c89,a0_0x2e8c('0x1d')),0x11),assert[a0_0x2e8c('0x2')](scn[a0_0x2e8c('0x3b')](_0x386c89,a0_0x2e8c('0x13')),0x5),assert[a0_0x2e8c('0x2')](scn[a0_0x2e8c('0x3b')](_0x386c89,a0_0x2e8c('0x1e')),0x15),assert['equal'](scn[a0_0x2e8c('0x3b')](_0x386c89,a0_0x2e8c('0x3a')),0x8),assert[a0_0x2e8c('0x2')](scn[a0_0x2e8c('0x3b')](_0x386c89,'weekEnd'),0x0),assert['equal'](scn['calculateValue'](_0x386c89,'dayAfterHoliday'),0x0),assert[a0_0x2e8c('0x2')](scn[a0_0x2e8c('0x3b')](_0x386c89,a0_0x2e8c('0x14')),0x1),assert[a0_0x2e8c('0x2')](scn['calculateValue'](_0x386c89,'dayBeforeHoliday'),0x0);}),it('check\x20feature\x20vector',function(){const _0xf89a09=0x1740c8f0439;scn[a0_0x2e8c('0x22')](_0xf89a09),assert[a0_0x2e8c('0x43')](scn[a0_0x2e8c('0x25')](),[0x11,0x4,0x1,0x1,0xe9,0x14,0x0,0x8,0x0,0x2/0x7,0xe2,0xe9,0.2040816326530619,0x0,0x0,0xe8,0x13,0x1,0x5]);});}),describe(a0_0x2e8c('0x3e'),function(){it('fusion\x20with\x20static\x20vector',function(){fusion[a0_0x2e8c('0x2f')][0x0]['processRecord'](JSON[a0_0x2e8c('0x2c')]('{\x22time\x22:\x201451606400,\x22value\x22:\x2010.0}')),fusion[a0_0x2e8c('0x2f')][0x0][a0_0x2e8c('0x33')](JSON[a0_0x2e8c('0x2c')](a0_0x2e8c('0x16'))),fusion[a0_0x2e8c('0x2f')][0x0][a0_0x2e8c('0x10')](),fusion[a0_0x2e8c('0x2f')][0x1][a0_0x2e8c('0x22')](0x0),assert[a0_0x2e8c('0x43')](fusion['buildFeatureVector'](),[0x14,0xf,0xa,0x14,0x32,0x1,0x4,0x0,0x0,0x1,0x1,0x0,0x1,0x0,0.2857142857142857,0x1,0x16d,0.2040816326530618,0x0,0x0,0x16d,0x1f,0x0,-0x13]);});});});