var _0x5854=['triggerOnAddCallbacks','fusionTick','buffer','broadcastAggregates','fusionNodeI','log','PROBLEM:\x20EnergyNode\x20timeline\x20problem.','./streamingNode.js','processRecordCb','parent','lastTimestamp','MIN_SAFE_INTEGER','base','nodeId','float','rawstore','store','createAggregates','processRecord','stamp','toISOString','rawRecord','newRecord'];(function(_0x14f1e2,_0x341649){var _0x300111=function(_0x320a4a){while(--_0x320a4a){_0x14f1e2['push'](_0x14f1e2['shift']());}};var _0x580022=function(){var _0x138c0d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xfa4c52,_0x674a59,_0x32fa85,_0x3fa16e){_0x3fa16e=_0x3fa16e||{};var _0x564885=_0x674a59+'='+_0x32fa85;var _0x40df40=0x0;for(var _0x40df40=0x0,_0x35ef9a=_0xfa4c52['length'];_0x40df40<_0x35ef9a;_0x40df40++){var _0x582613=_0xfa4c52[_0x40df40];_0x564885+=';\x20'+_0x582613;var _0x2604d4=_0xfa4c52[_0x582613];_0xfa4c52['push'](_0x2604d4);_0x35ef9a=_0xfa4c52['length'];if(_0x2604d4!==!![]){_0x564885+='='+_0x2604d4;}}_0x3fa16e['cookie']=_0x564885;},'removeCookie':function(){return'dev';},'getCookie':function(_0x52e4dd,_0x10aede){_0x52e4dd=_0x52e4dd||function(_0x11789f){return _0x11789f;};var _0x20e443=_0x52e4dd(new RegExp('(?:^|;\x20)'+_0x10aede['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x237ea0=function(_0x4d9dbd,_0x49f417){_0x4d9dbd(++_0x49f417);};_0x237ea0(_0x300111,_0x341649);return _0x20e443?decodeURIComponent(_0x20e443[0x1]):undefined;}};var _0x5378e5=function(){var _0x36cb50=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x36cb50['test'](_0x138c0d['removeCookie']['toString']());};_0x138c0d['updateCookie']=_0x5378e5;var _0x471d45='';var _0x16953b=_0x138c0d['updateCookie']();if(!_0x16953b){_0x138c0d['setCookie'](['*'],'counter',0x1);}else if(_0x16953b){_0x471d45=_0x138c0d['getCookie'](null,'counter');}else{_0x138c0d['removeCookie']();}};_0x580022();}(_0x5854,0x18e));var _0x4155=function(_0x1a2a6d,_0x55a271){_0x1a2a6d=_0x1a2a6d-0x0;var _0x3582d7=_0x5854[_0x1a2a6d];return _0x3582d7;};var _0x5af0f9=function(){var _0x19d84b=!![];return function(_0x28434c,_0xff187a){var _0x5d99a3=_0x19d84b?function(){if(_0xff187a){var _0x5f47d8=_0xff187a['apply'](_0x28434c,arguments);_0xff187a=null;return _0x5f47d8;}}:function(){};_0x19d84b=![];return _0x5d99a3;};}();var _0x2d37da=_0x5af0f9(this,function(){var _0x13b51e=function(){return'\x64\x65\x76';},_0x1d1e52=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x45a122=function(){var _0x112036=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x112036['\x74\x65\x73\x74'](_0x13b51e['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x65a343=function(){var _0x2943ff=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x2943ff['\x74\x65\x73\x74'](_0x1d1e52['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x37a1d8=function(_0x45b5c4){var _0x413a7f=~-0x1>>0x1+0xff%0x0;if(_0x45b5c4['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x413a7f)){_0x1bf2d0(_0x45b5c4);}};var _0x1bf2d0=function(_0x301ca9){var _0x32ef5a=~-0x4>>0x1+0xff%0x0;if(_0x301ca9['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x32ef5a){_0x37a1d8(_0x301ca9);}};if(!_0x45a122()){if(!_0x65a343()){_0x37a1d8('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x37a1d8('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x37a1d8('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x2d37da();const streamingNode=require(_0x4155('0x0'));class streamingEnergyNode extends streamingNode{constructor(_0x300806,_0x2daa64,_0x21904d,_0x1f0d90,_0x498711,_0x19e4d2,_0x453d23){super(_0x300806,_0x2daa64,_0x21904d,_0x1f0d90,_0x498711,_0x19e4d2,_0x453d23);this['fusionNodeI']=_0x19e4d2;this[_0x4155('0x1')]=_0x498711;this[_0x4155('0x2')]=_0x453d23;this['nodeId']=_0x21904d['nodeid'];this['buffer']=[];this['position']=0x0;this[_0x4155('0x3')]=Number[_0x4155('0x4')];this[_0x4155('0x5')]['createStore']({'name':this[_0x4155('0x6')],'fields':[{'name':'Time','type':'datetime'},{'name':'pc','type':_0x4155('0x7')},{'name':'pg','type':_0x4155('0x7')}]});this[_0x4155('0x8')]=this[_0x4155('0x5')][_0x4155('0x9')](this['nodeId']);super[_0x4155('0xa')](_0x1f0d90[_0x21904d['aggrConfigId']]);super['postConstructor']();}[_0x4155('0xb')](_0x597a9a){let _0x49ab64=_0x597a9a[_0x4155('0xc')]*0x3e8;if(this['lastTimestamp']<_0x49ab64){this[_0x4155('0x3')]=_0x49ab64;let _0x5d2bb7=new Date(_0x49ab64);let _0x20f538;if(isNaN(_0x5d2bb7)==!![]){_0x20f538=0x0;}else{_0x20f538=_0x5d2bb7[_0x4155('0xd')]();}let _0x3ea84e='pc'in _0x597a9a&&isNaN(_0x597a9a['pc'])?0x0:_0x597a9a['pc'];let _0x33af18='pg'in _0x597a9a&&isNaN(_0x597a9a['pg'])?0x0:_0x597a9a['pg'];if(_0x3ea84e==null)_0x3ea84e=0x0;if(_0x33af18==null)_0x33af18=0x0;this[_0x4155('0xe')]=this['rawstore'][_0x4155('0xf')]({'Time':_0x20f538,'pc':_0x3ea84e,'pg':_0x33af18});this[_0x4155('0x8')][_0x4155('0x10')](this[_0x4155('0xe')]);let _0x5d472f=super['getAggregates']();let _0x403c3f=_0x5d472f;_0x403c3f['pc']=_0x3ea84e;_0x403c3f['pg']=_0x33af18;if(_0x49ab64%this[_0x4155('0x11')]==0x0){this[_0x4155('0x12')]['push'](_0x403c3f);super[_0x4155('0x13')](_0x5d472f);this[_0x4155('0x1')](this[_0x4155('0x14')],this[_0x4155('0x2')]);};}else{console[_0x4155('0x15')](_0x4155('0x16'));}}}module['exports']=streamingEnergyNode;