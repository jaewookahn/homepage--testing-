// Created by iWeb 3.0.4 local-build-20120112

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:1,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.230000}),shadow_4:new IWShadow({blurRadius:1,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.230000}),shadow_3:new IWShadow({blurRadius:1,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.230000}),shadow_1:new IWShadow({blurRadius:1,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.230000}),shadow_0:new IWShadow({blurRadius:1,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.230000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Bio_files/BioMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
