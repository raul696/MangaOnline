/*! 21.0.2.0  */
/*! VersionVI: 01A250083n x */
function WDTableHierarchiqueCacheLigne(n){n&&(WDTableCacheLigne.prototype.constructor.apply(this,arguments),this.m_nNbEnroulees=clWDAJAXMain.nXMLGetAttributSafe(n,this.XML_LIGNE_NBENROULEES,0),this.m_nProfondeur=clWDAJAXMain.nXMLGetAttributSafe(n,this.XML_LIGNE_PROFONDEUR,0),this.m_bDeroule=clWDAJAXMain.bXMLGetAttributSafe(n,this.XML_LIGNE_DEROULE,0),this.m_bFeuille=clWDAJAXMain.bXMLGetAttributSafe(n,this.XML_LIGNE_FEUILLE,0),clWDAJAXMain.bXMLAttributExiste(n,this.XML_LIGNE_IMAGEENROULEDEROULE)&&(this.m_sImageEnrouleDeroule=clWDAJAXMain.sXMLGetAttribut(n,this.XML_LIGNE_IMAGEENROULEDEROULE)))}function WDTableHierarchique(){arguments.length&&WDTable.prototype.constructor.apply(this,arguments)}WDTableHierarchiqueCacheLigne.prototype=new WDTableCacheLigne;WDTableHierarchiqueCacheLigne.prototype.constructor=WDTableHierarchiqueCacheLigne;WDTableHierarchiqueCacheLigne.prototype.XML_LIGNE_NBENROULEES="NBENROULEES";WDTableHierarchiqueCacheLigne.prototype.XML_LIGNE_PROFONDEUR="PROFONDEUR";WDTableHierarchiqueCacheLigne.prototype.XML_LIGNE_DEROULE="DEROULE";WDTableHierarchiqueCacheLigne.prototype.XML_LIGNE_FEUILLE="FEUILLE";WDTableHierarchiqueCacheLigne.prototype.XML_LIGNE_IMAGEENROULEDEROULE="IMAGEENROULEDEROULE";WDTableHierarchiqueCacheLigne.prototype.vnGetNbReplieesOuEnroulees=function(){return this.m_nNbEnroulees};WDTableHierarchiqueCacheLigne.prototype.vnGetNbReplieesInclusSelf=function(){return 0};WDTableHierarchiqueCacheLigne.prototype.sGetImageEnrouleDeroule=function(n){return this.m_sImageEnrouleDeroule?_WD_+this.m_sImageEnrouleDeroule:this.m_bFeuille||!this.m_bDeroule?n.sGetImageEnrouleDefaut():n.sGetImageDerouleDefaut()};WDTableHierarchiqueCacheLigne.prototype.sGetImagePlusMoins=function(n,t){return this.m_bFeuille?n.sGetImageFeuille(t):this.m_bDeroule?n.sGetImageMoins(t):n.sGetImagePlus(t)};WDTableHierarchique.prototype=new WDTable;WDTableHierarchique.prototype.constructor=WDTableHierarchique;WDTableHierarchique.prototype.XML_LISTE_IMAGEENROULE="IMAGEENROULE";WDTableHierarchique.prototype.XML_LISTE_IMAGEDEROULE="IMAGEDEROULE";WDTableHierarchique.prototype.XML_LISTE_IMAGEPLUSMOINS="IMAGEPLUSMOINS";WDTableHierarchique.prototype.ms_sClasseBoutonPM="WDTH-BoutonPM";WDTableHierarchique.prototype.ms_nMarginRightImage=6;WDTableHierarchique.prototype.ms_tabImageDefaut={ms_sImageFeuille:"vide.gif",ms_sImagePlus:"plus.gif",ms_sImageMoins:"moins.gif",ms_sImageEnroule:"d_closed.gif",ms_sImageDeroule:"d_open.gif"};WDTableHierarchique.prototype.vCacheLigne=WDTableHierarchiqueCacheLigne;WDTableHierarchique.prototype.Init=function(){WDTable.prototype.Init.apply(this,arguments)};WDTableHierarchique.prototype._vInitInitiale=function(){WDTable.prototype._vInitInitiale.apply(this,arguments);for(var n in this.ms_tabImageDefaut)this.ms_tabImageDefaut.hasOwnProperty(n)&&(WDTableHierarchique.prototype[n]=clWDUtil.sCheminImageRes(undefined,this.ms_tabImageDefaut[n]));WDTableHierarchique.prototype._vInitInitiale=clWDUtil.m_pfVide};WDTableHierarchique.prototype._vActionListeSpecifique=function(n){var i,t;WDTable.prototype._vActionListeSpecifique.apply(this,arguments);this.m_nColonneHierarchique=clWDAJAXMain.nXMLGetAttributSafe(n,this.XML_COLHIERARCHIQUE,0);delete this.m_sImageEnroule;clWDAJAXMain.bXMLAttributExiste(n,this.XML_LISTE_IMAGEENROULE)&&(this.m_sImageEnroule=clWDAJAXMain.sXMLGetAttribut(n,this.XML_LISTE_IMAGEENROULE));delete this.m_sImageDeroule;clWDAJAXMain.bXMLAttributExiste(n,this.XML_LISTE_IMAGEDEROULE)&&(this.m_sImageDeroule=clWDAJAXMain.sXMLGetAttribut(n,this.XML_LISTE_IMAGEDEROULE));delete this.m_oImagePlusMoins;i=clWDAJAXMain.sXMLGetAttributSafe(n,this.XML_LISTE_IMAGEPLUSMOINS,"");0<i.length&&(t=i.split(";"),this.m_oImagePlusMoins={m_sImage:_WD_+t[0],m_nNbImages:parseInt(t[1],10),m_nNbEtats:parseInt(t[2],10),m_nLargeurUneImage:parseInt(t[3],10),m_nHauteurUneImage:parseInt(t[4],10)})};WDTableHierarchique.prototype.vVideCellule=function(n){var t=n.oGetCelluleHTML(this,this.m_nColonneHierarchique);t&&clWDUtil.bForEach(t.getElementsByTagName("img"),function(n){return n.onclick=null,!0});WDTable.prototype.vVideCellule.apply(this,arguments)};WDTableHierarchique.prototype.vRemplitCellule=function(n,t,i,r,u){if(WDTable.prototype.vRemplitCellule.apply(this,arguments),r==this.m_nColonneHierarchique){this.__AjouteImageRepertoire(n,u.sGetImageEnrouleDeroule(this));var f={};this.__AjouteImagePlusMoins(n,u.sGetImagePlusMoins(this,f),u.m_nProfondeur,f)}};WDTableHierarchique.prototype.sGetImageEnrouleDefaut=function(){return this.m_sImageEnroule?_WD_+this.m_sImageEnroule:this.ms_sImageEnroule};WDTableHierarchique.prototype.sGetImageDerouleDefaut=function(){return this.m_sImageDeroule?_WD_+this.m_sImageDeroule:this.ms_sImageDeroule};WDTableHierarchique.prototype.__sGetImagePlusMoins=function(n,t,i,r,u){return this.m_oImagePlusMoins&&n<this.m_oImagePlusMoins.m_nNbImages?(u.m_nPositionX=this.m_oImagePlusMoins.m_nLargeurUneImage*n,u.m_nPositionY=this.m_oImagePlusMoins.m_nLargeurUneImage*t,u.m_bDefaut=!1,u.m_bInvisible=!1,this.m_oImagePlusMoins.m_sImage):(u.m_bDefaut=!0,u.m_bInvisible=r,i)};WDTableHierarchique.prototype.sGetImagePlus=function(n){return this.__sGetImagePlusMoins(0,0,this.ms_sImagePlus,!1,n)};WDTableHierarchique.prototype.sGetImageMoins=function(n){return this.__sGetImagePlusMoins(1,0,this.ms_sImageMoins,!1,n)};WDTableHierarchique.prototype.sGetImageFeuille=function(n){return this.__sGetImagePlusMoins(2,0,this.ms_sImageFeuille,!0,n)};WDTableHierarchique.prototype.__AjouteImageRepertoire=function(n,t){var i=document.createElement("img");return i.src=t,this.__oAjouteImageDebut(n,i)};WDTableHierarchique.prototype.__AjouteImagePlusMoins=function(n,t,i,r){var u=document.createElement("img"),f;return r.m_bDefaut?u.src=t:(u.src=this.ms_sImageFeuille,u.style.backgroundImage=clWDUtil.sGetURICSS(t),u.style.backgroundPosition="-"+r.m_nPositionX+"px -"+r.m_nPositionY+"px",u.style.height=(r.m_bDefaut?10:this.m_oImagePlusMoins.m_nHauteurUneImage)+"px"),f=r.m_bDefaut?9:this.m_oImagePlusMoins.m_nLargeurUneImage,u.style.width=f+"px",u.style.marginLeft=2+i*(f+this.ms_nMarginRightImage)+"px",r.m_bInvisible&&(u.style.visibility="hidden"),u.className=this.ms_sClasseBoutonPM,this.__oAjouteImageDebut(n,u)};WDTableHierarchique.prototype.__oAjouteImageDebut=function(n,t){return t.style.marginRight=this.ms_nMarginRightImage+"px",t.align="absmiddle",0==n.childNodes.length?n.appendChild(t):n.insertBefore(t,n.firstChild)};WDTableHierarchique.prototype.OnSelectLigne=function(n,t,i){var u=clWDUtil.oGetOriginalTarget(i).className==this.ms_sClasseBoutonPM,r;WDTable.prototype.OnSelectLigne.apply(this,arguments);u&&(r=this.nRelative2Visible2Absolue(n),this.m_oCache.CreeRequeteEnrouleDeroule(this,r))}