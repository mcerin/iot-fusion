const a0_0x357a=['qminer','fusion_id','buildFeatureVector','../streamFusion.js','timestamp','streamFusion','fusion','return\x20/\x22\x20+\x20this\x20+\x20\x22/','dayOfYear','streamingTimeValueNode','timeOfDay','setSlaveOffset','N1_24h','stores','setMasterOffset','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','assert','parse','check\x20fusion\x20model\x20name','value|ma|86400000','topic','value|max|21600000','value|variance|21600000','nodes','deepEqual','check\x20types\x20of\x20nodes','floor','value|min|86400000','name','apply','base','dayAfterHoliday','value','static','variance','dayBeforeHoliday','max','monthOfYear','equal','../common/utils/fileManager.js','features_N1_24h','value|max|86400000','streamingStaticNode','min','dayOfWeek','dayOfMonth','check\x20features\x20topic\x20name','timevalue','createFolder','value|variance|86400000','base\x20saved','lastTimestamp','config','constructor','getOffsetTimestamp','none','winbuf','value|ma|21600000','holiday','test','length','check\x20number\x20of\x20fusion\x20objects','processRecord'];(function(_0x351605,_0x357a92){const _0x5db4c5=function(_0x306f7a){while(--_0x306f7a){_0x351605['push'](_0x351605['shift']());}},_0x5332b6=function(){const _0x3c75f1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1a5e3c,_0x3f65cc,_0x11a011,_0xa751d2){_0xa751d2=_0xa751d2||{};let _0x279320=_0x3f65cc+'='+_0x11a011,_0x34f561=0x0;for(let _0x11fe26=0x0,_0x4c0249=_0x1a5e3c['length'];_0x11fe26<_0x4c0249;_0x11fe26++){const _0x36b518=_0x1a5e3c[_0x11fe26];_0x279320+=';\x20'+_0x36b518;const _0x9ec850=_0x1a5e3c[_0x36b518];_0x1a5e3c['push'](_0x9ec850),_0x4c0249=_0x1a5e3c['length'],_0x9ec850!==!![]&&(_0x279320+='='+_0x9ec850);}_0xa751d2['cookie']=_0x279320;},'removeCookie':function(){return'dev';},'getCookie':function(_0x363654,_0x19f5c3){_0x363654=_0x363654||function(_0x522e83){return _0x522e83;};const _0x3a4517=_0x363654(new RegExp('(?:^|;\x20)'+_0x19f5c3['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x171108=function(_0x4d1920,_0x3bfecd){_0x4d1920(++_0x3bfecd);};return _0x171108(_0x5db4c5,_0x357a92),_0x3a4517?decodeURIComponent(_0x3a4517[0x1]):undefined;}},_0x51650e=function(){const _0xfffa86=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xfffa86['test'](_0x3c75f1['removeCookie']['toString']());};_0x3c75f1['updateCookie']=_0x51650e;let _0x3a76af='';const _0x5ec850=_0x3c75f1['updateCookie']();if(!_0x5ec850)_0x3c75f1['setCookie'](['*'],'counter',0x1);else _0x5ec850?_0x3a76af=_0x3c75f1['getCookie'](null,'counter'):_0x3c75f1['removeCookie']();};_0x5332b6();}(a0_0x357a,0x143));const a0_0x5db4=function(_0x351605,_0x357a92){_0x351605=_0x351605-0x0;let _0x5db4c5=a0_0x357a[_0x351605];return _0x5db4c5;};const a0_0x11a011=function(){let _0x134613=!![];return function(_0x5d4c10,_0xcfeb79){const _0x4176c4=_0x134613?function(){if(_0xcfeb79){const _0x376c0b=_0xcfeb79[a0_0x5db4('0x15')](_0x5d4c10,arguments);return _0xcfeb79=null,_0x376c0b;}}:function(){};return _0x134613=![],_0x4176c4;};}(),a0_0x3f65cc=a0_0x11a011(this,function(){const _0x5f4453=function(){const _0x4f0cac=_0x5f4453[a0_0x5db4('0x2d')](a0_0x5db4('0x3e'))()['constructor'](a0_0x5db4('0x7'));return!_0x4f0cac[a0_0x5db4('0x33')](a0_0x3f65cc);};return _0x5f4453();});a0_0x3f65cc();const fileManager=require(a0_0x5db4('0x1f')),StreamFusion=require(a0_0x5db4('0x3a')),qm=require(a0_0x5db4('0x37')),fs=require('fs');var assert=require(a0_0x5db4('0x8'));let connectionConfig={'zookeeper':'192.168.85.98:2181'},smConf={'aggr':{'timevalue':[{'field':'value','tick':[{'type':a0_0x5db4('0x30'),'winsize':0x6*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'},{'type':a0_0x5db4('0x1c')},{'type':a0_0x5db4('0x23')},{'type':a0_0x5db4('0x1a')}]},{'type':a0_0x5db4('0x30'),'winsize':0x18*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'},{'type':'max'},{'type':a0_0x5db4('0x23')},{'type':a0_0x5db4('0x1a')}]},{'type':a0_0x5db4('0x30'),'winsize':0x7*0x18*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'},{'type':'max'},{'type':a0_0x5db4('0x23')},{'type':a0_0x5db4('0x1a')}]}]}],'static':[{'field':a0_0x5db4('0x32'),'tick':[{'type':'winbuf','winsize':0x7*0x18*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'}]}]}]},'fusion':{'fusionModel':a0_0x5db4('0x4'),'connection':{'type':a0_0x5db4('0x2f')},'fusionTick':0x3c*0x3c*0x3e8,'nodes':[{'type':a0_0x5db4('0x27'),'nodeid':'N1','aggrConfigId':a0_0x5db4('0x27'),'master':!![],'fusionTick':0x3c*0x3c*0x3e8,'attributes':[{'time':0x0,'attributes':[{'type':'value','name':a0_0x5db4('0x18')},{'type':'value','name':a0_0x5db4('0x31')},{'type':a0_0x5db4('0x18'),'name':'value|min|21600000'},{'type':a0_0x5db4('0x18'),'name':a0_0x5db4('0xd')},{'type':a0_0x5db4('0x18'),'name':a0_0x5db4('0xe')},{'type':a0_0x5db4('0x18'),'name':a0_0x5db4('0xb')},{'type':a0_0x5db4('0x18'),'name':a0_0x5db4('0x13')},{'type':'value','name':a0_0x5db4('0x21')},{'type':'value','name':a0_0x5db4('0x29')}]},{'time':-0x18,'attributes':[{'type':a0_0x5db4('0x18'),'name':'value'}]}]},{'type':a0_0x5db4('0x19'),'nodeid':'S1','aggrConfigId':'static','fusionTick':0x3c*0x3c*0x3e8,'master':![],'attributes':[{'time':0x18,'attributes':[{'type':a0_0x5db4('0x18'),'name':a0_0x5db4('0x2')},{'type':a0_0x5db4('0x18'),'name':'weekEnd'},{'type':a0_0x5db4('0x18'),'name':a0_0x5db4('0x32')},{'type':a0_0x5db4('0x18'),'name':a0_0x5db4('0x17')},{'type':a0_0x5db4('0x18'),'name':a0_0x5db4('0x1b')},{'type':a0_0x5db4('0x18'),'name':a0_0x5db4('0x24')},{'type':'value','name':a0_0x5db4('0x0')},{'type':a0_0x5db4('0x18'),'name':a0_0x5db4('0x1d')}]}]}]}};describe(a0_0x5db4('0x3c'),function(){let _0x2f0e8b;before(function(){fileManager['removeFolder']('./db-1/'),fileManager[a0_0x5db4('0x28')]('./db-1/'),_0x2f0e8b=new StreamFusion(connectionConfig,smConf[a0_0x5db4('0x3d')],smConf['aggr']);}),after(function(){}),describe('initialization',function(){it(a0_0x5db4('0x2a'),function(){assert['equal'](typeof _0x2f0e8b['base'],'object');}),it(a0_0x5db4('0x35'),function(){assert[a0_0x5db4('0x1e')](_0x2f0e8b['nodes'][a0_0x5db4('0x34')],0x2);}),it('check\x20number\x20of\x20stores',function(){assert[a0_0x5db4('0x1e')](_0x2f0e8b[a0_0x5db4('0x16')]['getStats']()[a0_0x5db4('0x5')][a0_0x5db4('0x34')],0x2);}),it(a0_0x5db4('0xa'),function(){assert[a0_0x5db4('0x1e')](_0x2f0e8b[a0_0x5db4('0x38')],a0_0x5db4('0x4'));}),it(a0_0x5db4('0x26'),function(){assert['equal'](_0x2f0e8b[a0_0x5db4('0xc')],a0_0x5db4('0x20'));}),it(a0_0x5db4('0x11'),function(){assert[a0_0x5db4('0x1e')](_0x2f0e8b[a0_0x5db4('0xf')][0x0][a0_0x5db4('0x2d')]['name'],a0_0x5db4('0x1')),assert[a0_0x5db4('0x1e')](_0x2f0e8b[a0_0x5db4('0xf')][0x1]['constructor'][a0_0x5db4('0x14')],a0_0x5db4('0x22'));}),it('global\x20config\x20correct',function(){assert[a0_0x5db4('0x10')](_0x2f0e8b[a0_0x5db4('0x2c')],smConf[a0_0x5db4('0x3d')]);}),it('feature\x20vector\x20ok',function(){let _0x3e4db1=JSON[a0_0x5db4('0x9')]('{\x22timestamp\x22:0,\x20\x22timeOfDay\x22:\x200,\x20\x22dayAfterHoliday\x22:\x200,\x20\x22dayBeforeHoliday\x22:\x200,\x20\x22dayOfYear\x22:\x201,\x20\x22dayOfWeek\x22:\x202,\x20\x22dayOfMonth\x22:\x201,\x20\x22holiday\x22:\x201,\x20\x22monthOfYear\x22:\x201,\x20\x22weekEnd\x22:\x200\x20}');_0x2f0e8b[a0_0x5db4('0xf')][0x1][a0_0x5db4('0x36')](_0x3e4db1);for(let _0x1ef50f=0x1;_0x1ef50f<=0x49;_0x1ef50f++){_0x3e4db1[a0_0x5db4('0x3b')]=_0x1ef50f*0x3c*0x3c*0x3e8,_0x3e4db1[a0_0x5db4('0x2')]=_0x1ef50f%0x18,_0x3e4db1[a0_0x5db4('0x0')]=Math[a0_0x5db4('0x12')](_0x1ef50f/0x18)+0x1,_0x3e4db1[a0_0x5db4('0x24')]=Math[a0_0x5db4('0x12')](_0x1ef50f/0x18)+0x2,_0x3e4db1[a0_0x5db4('0x25')]=Math[a0_0x5db4('0x12')](_0x1ef50f/0x18)+0x1,_0x3e4db1[a0_0x5db4('0x0')]=Math[a0_0x5db4('0x12')](_0x1ef50f/0x18)+0x1,_0x3e4db1[a0_0x5db4('0x32')]=0x0,_0x2f0e8b[a0_0x5db4('0xf')][0x1]['processRecord'](_0x3e4db1);}for(let _0x5515c4=0x1;_0x5515c4<=0x30;_0x5515c4++){let _0x1f9550=_0x5515c4*0x3c*0x3c;_0x2f0e8b['nodes'][0x0][a0_0x5db4('0x36')]({'time':_0x1f9550,'value':_0x5515c4});}_0x2f0e8b[a0_0x5db4('0xf')][0x0][a0_0x5db4('0x6')](),_0x2f0e8b[a0_0x5db4('0xf')][0x1][a0_0x5db4('0x3')](0x0),assert[a0_0x5db4('0x1e')](_0x2f0e8b['nodes'][0x0][a0_0x5db4('0x2e')](),0x30*0x3c*0x3c*0x3e8),assert['deepEqual'](_0x2f0e8b[a0_0x5db4('0x39')](),[0x30,0x2d,0x2a,0x30,4.666666666666667,0x24,0x18,0x30,54.166666666666664,0x18,0x1,0x0,0x0,0x0,0x0,0x5,0x4,0x1]),assert[a0_0x5db4('0x1e')](_0x2f0e8b[a0_0x5db4('0x2b')],0x30*0x3c*0x3c*0x3e8);});});});