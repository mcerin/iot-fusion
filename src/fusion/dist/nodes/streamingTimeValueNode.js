var _0x213d=['lastValue','lastTimestamp','createAggregates','aggrConfigId','postConstructor','processRecord','time','log','TimeValue\x20-\x20double\x20timestamp.','rawRecord','newRecord','triggerOnAddCallbacks','getAggregates','push','processRecordCb','fusionNodeI','parent','./streamingNode.js','buffer','base','createStore','nodeId','datetime','value','float','rawstore'];(function(_0x1f4042,_0x1119cb){var _0x51420e=function(_0x87c885){while(--_0x87c885){_0x1f4042['push'](_0x1f4042['shift']());}};var _0x28aee1=function(){var _0xc852b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x24244a,_0x4364d0,_0x55df3e,_0x52a2ad){_0x52a2ad=_0x52a2ad||{};var _0x30faa9=_0x4364d0+'='+_0x55df3e;var _0x90d253=0x0;for(var _0x90d253=0x0,_0x3c8332=_0x24244a['length'];_0x90d253<_0x3c8332;_0x90d253++){var _0x5c2680=_0x24244a[_0x90d253];_0x30faa9+=';\x20'+_0x5c2680;var _0x1c57ed=_0x24244a[_0x5c2680];_0x24244a['push'](_0x1c57ed);_0x3c8332=_0x24244a['length'];if(_0x1c57ed!==!![]){_0x30faa9+='='+_0x1c57ed;}}_0x52a2ad['cookie']=_0x30faa9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2218b3,_0x5f42c0){_0x2218b3=_0x2218b3||function(_0x41a9be){return _0x41a9be;};var _0x3da096=_0x2218b3(new RegExp('(?:^|;\x20)'+_0x5f42c0['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x1a4145=function(_0x22eebc,_0x113c04){_0x22eebc(++_0x113c04);};_0x1a4145(_0x51420e,_0x1119cb);return _0x3da096?decodeURIComponent(_0x3da096[0x1]):undefined;}};var _0x11ce55=function(){var _0x45fb37=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x45fb37['test'](_0xc852b['removeCookie']['toString']());};_0xc852b['updateCookie']=_0x11ce55;var _0x392fb4='';var _0x3aa237=_0xc852b['updateCookie']();if(!_0x3aa237){_0xc852b['setCookie'](['*'],'counter',0x1);}else if(_0x3aa237){_0x392fb4=_0xc852b['getCookie'](null,'counter');}else{_0xc852b['removeCookie']();}};_0x28aee1();}(_0x213d,0x93));var _0x4bce=function(_0xe08f6,_0x333da7){_0xe08f6=_0xe08f6-0x0;var _0xe9c73e=_0x213d[_0xe08f6];return _0xe9c73e;};var _0x498288=function(){var _0xa5bc17=!![];return function(_0x454e24,_0x2e731f){var _0xd5775a=_0xa5bc17?function(){if(_0x2e731f){var _0x40c2e6=_0x2e731f['apply'](_0x454e24,arguments);_0x2e731f=null;return _0x40c2e6;}}:function(){};_0xa5bc17=![];return _0xd5775a;};}();var _0x54ab2a=_0x498288(this,function(){var _0x3fe505=function(){return'\x64\x65\x76';},_0x451b2e=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x4714fd=function(){var _0x47f030=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x47f030['\x74\x65\x73\x74'](_0x3fe505['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x12285e=function(){var _0x8c2b6c=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x8c2b6c['\x74\x65\x73\x74'](_0x451b2e['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x1448a3=function(_0x326ed7){var _0x31aa06=~-0x1>>0x1+0xff%0x0;if(_0x326ed7['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x31aa06)){_0x3aeaed(_0x326ed7);}};var _0x3aeaed=function(_0x11cc4b){var _0x1ea393=~-0x4>>0x1+0xff%0x0;if(_0x11cc4b['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x1ea393){_0x1448a3(_0x11cc4b);}};if(!_0x4714fd()){if(!_0x12285e()){_0x1448a3('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x1448a3('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x1448a3('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x54ab2a();const streamingNode=require(_0x4bce('0x0'));class streamingTimeValueNode extends streamingNode{constructor(_0xd8c5bd,_0x384a8d,_0x181545,_0x367ae3,_0x2211d2,_0x4fee32,_0x54e10){super(_0xd8c5bd,_0x384a8d,_0x181545,_0x367ae3,_0x2211d2,_0x4fee32,_0x54e10);this[_0x4bce('0x1')]=[];this['position']=0x0;this[_0x4bce('0x2')][_0x4bce('0x3')]({'name':this[_0x4bce('0x4')],'fields':[{'name':'Time','type':_0x4bce('0x5')},{'name':_0x4bce('0x6'),'type':_0x4bce('0x7')}]});this[_0x4bce('0x8')]=this['base']['store'](this[_0x4bce('0x4')]);this[_0x4bce('0x9')]=0x0;this[_0x4bce('0xa')]=0x0;super[_0x4bce('0xb')](_0x367ae3[_0x181545[_0x4bce('0xc')]]);super[_0x4bce('0xd')]();}[_0x4bce('0xe')](_0x248847){let _0x534901=_0x248847[_0x4bce('0xf')]*0x3e8;let _0x1fd863=isNaN(_0x248847['value'])||_0x248847['value']==null?0x0:_0x248847[_0x4bce('0x6')];if(_0x534901<=this[_0x4bce('0xa')]){console[_0x4bce('0x10')](_0x4bce('0x11'));return;}if(isNaN(_0x534901)){console[_0x4bce('0x10')]('Timetamp\x20is\x20NaN!');return;}this[_0x4bce('0x12')]=this[_0x4bce('0x8')][_0x4bce('0x13')]({'Time':_0x534901,'value':_0x1fd863});this[_0x4bce('0x8')][_0x4bce('0x14')](this[_0x4bce('0x12')]);this[_0x4bce('0xa')]=_0x534901;let _0x53db7e=super[_0x4bce('0x15')]();let _0x4d15a8=_0x53db7e;_0x4d15a8[_0x4bce('0x6')]=_0x1fd863;this[_0x4bce('0x1')][_0x4bce('0x16')](_0x4d15a8);super['broadcastAggregates'](_0x53db7e);this[_0x4bce('0x17')](this[_0x4bce('0x18')],this[_0x4bce('0x19')]);}}module['exports']=streamingTimeValueNode;