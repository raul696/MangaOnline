/*! 23.0.1.0 */
/*! VersionVI: 01A250083n x */
function WDImage(){if(arguments.length){WDChampParametres.prototype.constructor.apply(this,arguments);var n=this;this.m_pfDefilement=function(){n.Defilement()}}}WDImage.prototype=new WDChampParametres;WDImage.prototype.constructor=WDImage;WDImage.prototype.m_bDefilement=!1;WDImage.prototype.m_nImage=-1;WDImage.prototype.Init=function(){WDChampParametres.prototype.Init.apply(this,arguments);0<this.nGetNbImages()&&(this.m_nImage=this.m_oDonnees.m_nImage,this.m_sImageSrc=this.m_oImage.src);this.__DefilementActionSelonServeur()};WDImage.prototype._vLiaisonHTML=function(){WDChampParametres.prototype._vLiaisonHTML.apply(this,arguments);this.m_oImage=this.oGetElementById(document,"");this.m_fSetImage=window["_SET_"+this.m_sAliasChamp+"_6_S"]};WDImage.prototype.OnDisplay=function(n){WDChampParametres.prototype.OnDisplay.apply(this,arguments);this.m_oImage&&clWDUtil.bEstFils(this.m_oImage,n)&&this._DefilementAction()};WDImage.prototype._vAppliqueParametres=function(){WDChampParametres.prototype._vAppliqueParametres.apply(this,arguments);this._vLiaisonHTML();this.AfficheImageExterne(this.m_oDonnees.m_nImage);this.__DefilementActionSelonServeur()};WDImage.prototype._vsConstruitParam=function(){var n=[],t=WDChampParametres.prototype._vsConstruitParam.apply(this,arguments);return t.length>0&&n.push(t),n.push(this.bGetDefilement()),n.push(this.nGetImage()),n.join(",")};WDImage.prototype._vAnimationDebut=function(n){WDChampParametres.prototype._vAnimationDebut.apply(this,arguments);this.m_oAnimation=n};WDImage.prototype._vAnimationFin=function(){this.m_oAnimation=null;delete this.m_oAnimation;WDChampParametres.prototype._vAnimationFin.apply(this,arguments);this.__AfficheImage()};WDImage.prototype.__DefilementActionSelonServeur=function(){this.__DefilementModifie(this.m_oDonnees.m_bActif)};WDImage.prototype.__DefilementModifie=function(n){this.m_bDefilement=n;this._DefilementAction();this.ConstruitParam()};WDImage.prototype._DefilementAction=function(){this._vbGetDefilementEffectif()?this.__DefilementLance():this.__DefilementArrete()};WDImage.prototype.__DefilementLance=function(){this.bGetTimeXXXExiste("Defilement")||this.SetInterval("Defilement",this.m_pfDefilement,this.m_oParametres.m_nTemporisation*10)};WDImage.prototype.__DefilementArrete=function(){this.AnnuleTimeXXX("Defilement",!0);this.m_oAnimation&&this.bGetDefilement()&&this.m_oAnimation.vAnnule()};WDImage.prototype.Defilement=function(){this.bGetTimeXXXExiste("Defilement")&&this._vbGetDefilementEffectif()&&this._AfficheImage(this.nGetImage()+1)};WDImage.prototype._vbGetDefilementEffectif=function(){if(!this.bGetDefilement())return!1;if(clWDUtil.bEstDisplay(this.m_oImage,document,!0))return!0;if(undefined!==window.WDAnimSurImage){var n=WDAnimSurImage.prototype.ms_oAnimations[this.m_sAliasChamp];if(n&&n.m_oBaliseImgTemp)return clWDUtil.bEstDisplay(n.m_oBaliseImgTemp,document,!0)}return!1};WDImage.prototype.bGetDefilement=function(){return this.m_bDefilement};WDImage.prototype.nGetImage=function(){return this.m_nImage};WDImage.prototype.AfficheImageExterne=function(n){this.__DefilementArrete();this._AfficheImage(n);this._DefilementAction()};WDImage.prototype._AfficheImage=function(n){0==this.nGetNbImages()?(this.m_nImage=-1,delete this.m_sImageSrc):(n<0?n-=Math.floor(n/this.nGetNbImages())*this.nGetNbImages():n>=this.nGetNbImages()&&(n=0),this.nGetImage()!=n?(this.m_nImage=n,delete this.m_sImageSrc):this.m_sImageSrc&&this.m_sImageSrc!=this.m_oImage.src&&delete this.m_sImageSrc,this.__AfficheImage());this.ConstruitParam()};WDImage.prototype.__AfficheImage=function(){if(undefined===this.m_sImageSrc&&!this.bAnimationsActives()){var n=this.m_oDonnees.m_tabImages[this.m_nImage];this.m_fSetImage(n.m_sSrc);this.m_sImageSrc=this.m_oImage.src}};WDImage.prototype.LanceDefilement=function(){this.__DefilementModifie(!0)};WDImage.prototype.ArreteDefilement=function(){this.__DefilementModifie(!1)};WDImage.prototype.AffichePremier=function(){this.AfficheImageExterne(0)};WDImage.prototype.AffichePrecedent=function(){this.AfficheImageExterne(this.nGetImage()-1)};WDImage.prototype.AfficheSuivant=function(){this.AfficheImageExterne(this.nGetImage()+1)};WDImage.prototype.AfficheDernier=function(){this.AfficheImageExterne(this.nGetNbImages()-1)};WDImage.prototype.nGetPositionWL=function(){return this.nGetImage()+1};WDImage.prototype.SetPositionWL=function(n){this.AfficheImageExterne(n-1)};WDImage.prototype.nGetNbImages=function(){return this.m_oDonnees.m_tabImages.length}