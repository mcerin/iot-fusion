var _0x257c=['rawRecord','push','broadcastAggregates','processRecordCb','fusionNodeI','parent','exports','buffer','position','base','nodeId','datetime','value','rawstore','store','lastTimestamp','createAggregates','aggrConfigId','processRecord','time','TimeValue\x20-\x20double\x20timestamp.','Timetamp\x20is\x20NaN!','newRecord','triggerOnAddCallbacks'];(function(_0x4a4a2b,_0x54be64){var _0x5233b3=function(_0x1ec200){while(--_0x1ec200){_0x4a4a2b['push'](_0x4a4a2b['shift']());}};var _0x253db2=function(){var _0x4c3c3b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5ac5a9,_0x536f7e,_0x12c872,_0x486980){_0x486980=_0x486980||{};var _0x4a74c2=_0x536f7e+'='+_0x12c872;var _0x55f02c=0x0;for(var _0x55f02c=0x0,_0x54065f=_0x5ac5a9['length'];_0x55f02c<_0x54065f;_0x55f02c++){var _0x141d80=_0x5ac5a9[_0x55f02c];_0x4a74c2+=';\x20'+_0x141d80;var _0x459b66=_0x5ac5a9[_0x141d80];_0x5ac5a9['push'](_0x459b66);_0x54065f=_0x5ac5a9['length'];if(_0x459b66!==!![]){_0x4a74c2+='='+_0x459b66;}}_0x486980['cookie']=_0x4a74c2;},'removeCookie':function(){return'dev';},'getCookie':function(_0x54bb19,_0x189a42){_0x54bb19=_0x54bb19||function(_0x6bfb9){return _0x6bfb9;};var _0x2de324=_0x54bb19(new RegExp('(?:^|;\x20)'+_0x189a42['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x47cb8e=function(_0x321087,_0x15393d){_0x321087(++_0x15393d);};_0x47cb8e(_0x5233b3,_0x54be64);return _0x2de324?decodeURIComponent(_0x2de324[0x1]):undefined;}};var _0x43e7eb=function(){var _0x125c39=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x125c39['test'](_0x4c3c3b['removeCookie']['toString']());};_0x4c3c3b['updateCookie']=_0x43e7eb;var _0x20c7d9='';var _0x489b6f=_0x4c3c3b['updateCookie']();if(!_0x489b6f){_0x4c3c3b['setCookie'](['*'],'counter',0x1);}else if(_0x489b6f){_0x20c7d9=_0x4c3c3b['getCookie'](null,'counter');}else{_0x4c3c3b['removeCookie']();}};_0x253db2();}(_0x257c,0x13f));var _0x1f34=function(_0x392fd6,_0x5b1cca){_0x392fd6=_0x392fd6-0x0;var _0x46f4ec=_0x257c[_0x392fd6];return _0x46f4ec;};var _0x1abf66=function(){var _0x5781be=!![];return function(_0x2c2fec,_0x5b4ab0){var _0x3d8702=_0x5781be?function(){if(_0x5b4ab0){var _0x4b72cd=_0x5b4ab0['apply'](_0x2c2fec,arguments);_0x5b4ab0=null;return _0x4b72cd;}}:function(){};_0x5781be=![];return _0x3d8702;};}();var _0x410254=_0x1abf66(this,function(){var _0x466e14=function(){return'\x64\x65\x76';},_0x103e76=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x1d11e3=function(){var _0x28b36c=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x28b36c['\x74\x65\x73\x74'](_0x466e14['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x4219b0=function(){var _0x311446=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x311446['\x74\x65\x73\x74'](_0x103e76['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x4fe634=function(_0x1d95d6){var _0x2d2298=~-0x1>>0x1+0xff%0x0;if(_0x1d95d6['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x2d2298)){_0x35106c(_0x1d95d6);}};var _0x35106c=function(_0x49e017){var _0x52b04f=~-0x4>>0x1+0xff%0x0;if(_0x49e017['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x52b04f){_0x4fe634(_0x49e017);}};if(!_0x1d11e3()){if(!_0x4219b0()){_0x4fe634('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x4fe634('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x4fe634('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x410254();const streamingNode=require('./streamingNode.js');class streamingTimeValueNode extends streamingNode{constructor(_0x2c1db0,_0x39588c,_0x37b795,_0x17c597,_0x1c6f4f,_0x55a26c,_0x26e420){super(_0x2c1db0,_0x39588c,_0x37b795,_0x17c597,_0x1c6f4f,_0x55a26c,_0x26e420);this[_0x1f34('0x0')]=[];this[_0x1f34('0x1')]=0x0;this[_0x1f34('0x2')]['createStore']({'name':this[_0x1f34('0x3')],'fields':[{'name':'Time','type':_0x1f34('0x4')},{'name':_0x1f34('0x5'),'type':'float'}]});this[_0x1f34('0x6')]=this[_0x1f34('0x2')][_0x1f34('0x7')](this[_0x1f34('0x3')]);this['lastValue']=0x0;this[_0x1f34('0x8')]=0x0;super[_0x1f34('0x9')](_0x17c597[_0x37b795[_0x1f34('0xa')]]);super['postConstructor']();}[_0x1f34('0xb')](_0x1363f9){let _0x324674=_0x1363f9[_0x1f34('0xc')]*0x3e8;let _0x5a6d1f=isNaN(_0x1363f9['value'])||_0x1363f9['value']==null?0x0:_0x1363f9['value'];if(_0x324674<=this[_0x1f34('0x8')]){console['log'](_0x1f34('0xd'));return;}if(isNaN(_0x324674)){console['log'](_0x1f34('0xe'));return;}this['rawRecord']=this[_0x1f34('0x6')][_0x1f34('0xf')]({'Time':_0x324674,'value':_0x5a6d1f});this[_0x1f34('0x6')][_0x1f34('0x10')](this[_0x1f34('0x11')]);this[_0x1f34('0x8')]=_0x324674;let _0x1c921f=super['getAggregates']();let _0x2198cd=_0x1c921f;_0x2198cd[_0x1f34('0x5')]=_0x5a6d1f;this['buffer'][_0x1f34('0x12')](_0x2198cd);super[_0x1f34('0x13')](_0x1c921f);this[_0x1f34('0x14')](this[_0x1f34('0x15')],this[_0x1f34('0x16')]);}}module[_0x1f34('0x17')]=streamingTimeValueNode;