/*! 24.0.1.0 */
/*! VersionVI: 01A250083n x */
function WDCalendrier(n,t,i,r,u){if(arguments.length){WDChamp.prototype.constructor.apply(this,arguments);var f=u[0];this.m_sAliasChampSaisie=f}}WDCalendrier.prototype=new WDChamp;WDCalendrier.prototype.constructor=WDCalendrier;WDCalendrier.prototype.ms_sSuffixeJour="_JOUR";WDCalendrier.prototype.ms_sSuffixeMois="_MOIS";WDCalendrier.prototype.ms_sActionPrecedent="CALENDRIERPREC";WDCalendrier.prototype.ms_sActionSuivant="CALENDRIERSUIV";WDCalendrier.prototype.ms_sActionAujourdhui="CALENDRIERAUJO";WDCalendrier.prototype.Init=function(){WDChamp.prototype.Init.apply(this,arguments);this.m_sAliasChampSaisie&&(this.m_oObjetChampSaisie=clWDUtil.m_oChamps.oGetChampDirect(this.m_sAliasChampSaisie),this.m_oPopupAutomatique=new WDPopupAutomatique(this))};WDCalendrier.prototype._vPreAffecteHTML=function(n){WDChamp.prototype._vPreAffecteHTML.apply(this,arguments);this.m_oPopupAutomatique&&this.m_oPopupAutomatique.PreAffecteHTML(n)};WDCalendrier.prototype._vPostAffecteHTML=function(n){WDChamp.prototype._vPostAffecteHTML.apply(this,arguments);this.m_oPopupAutomatique&&this.m_oPopupAutomatique.PostAffecteHTML(n)};WDCalendrier.prototype.bGestionTableZR_SansPopup=function(){return this.bGestionTableZR()&&!this.m_oObjetChampSaisie};WDCalendrier.prototype.bGestionTableZR_AvecPopup=function(){return this.bGestionTableZR()&&this.m_oObjetChampSaisie};WDCalendrier.prototype.oGetElementHTMLValeur=function(){return this.bGestionTableZR_SansPopup()?this.oGetElementByNameZRCalc(!0,document,""):this.oGetElementByName(document,this.ms_sSuffixeJour)};WDCalendrier.prototype.oGetElementHTMLMois=function(){return this.bGestionTableZR_SansPopup()?this.oGetElementByNameZRCalc(!0,document,this.ms_sSuffixeMois):this.oGetElementByName(document,this.ms_sSuffixeMois)};WDCalendrier.prototype.oGetElementHTMLPopup=function(){return _JGE(this.m_sAliasChamp,document,!0,!0)};WDCalendrier.prototype.OnJourClick=function(n,t,i){var r=clWDUtil.oGetOriginalTarget(n);if(!clWDUtil.bHTML5||r&&clWDUtil.bBaliseEstTag(r,"td"))return this.OnJour(n,t,i)};WDCalendrier.prototype.OnJour=function(n,t,i){var r=this.oGetElementHTMLValeur(),f=r.value,u;if(r.value=t,u=this.RecuperePCode(this.ms_nEventNavSelectionJour)(n,i),u!==!1){this.m_oPopupAutomatique&&(this.m_oObjetChampSaisie.OnChangeCalendrier(n,r.value,this.m_oChampSaisie),this.m_oPopupAutomatique.Masque(undefined,!1));return}r.value=f};WDCalendrier.prototype.OnAujourdhui=function(){this.OnJour(undefined,clWLangage.sDateSys(),this.ms_sActionAujourdhui)};WDCalendrier.prototype.OnChangeMois=function(n,t){var r=this.oGetElementHTMLMois(),u=r.value,i=new clWLangage.WDDateHeure(!0,!1,u,undefined,!1),f;(i.SetPropCombine(1,i.GetProp(1)+n),i.SetPropCombine(2,1),r.value=i.toString(),f=this.RecuperePCode(this.ms_nEventNavAffichageMois)(undefined,t),f===!1)&&(r.value=u)};WDCalendrier.prototype.__OnChangeMoisUser=function(n,t){var i=this.RecuperePCode(this.ms_nEventNavCalendrierChangementMois)(undefined,t);i!==!1&&this.OnChangeMois(n,t)};WDCalendrier.prototype.OnNext=function(){this.__OnChangeMoisUser(1,this.ms_sActionSuivant)};WDCalendrier.prototype.OnPrev=function(){this.__OnChangeMoisUser(-1,this.ms_sActionPrecedent)};WDCalendrier.prototype.OnChangeSaisie=function(n,t,i){if(this.bGestionTableZR_AvecPopup())if(this.m_bDansAffiche)this.m_sValeurPopupTableZR=i.value;else return;this.m_oChampSaisie&&this.m_oChampSaisie==i||(this.m_oChampSaisie=i);this.OnJour(n,t)};WDCalendrier.prototype.Affiche=function(n,t){this.bGestionTableZR_AvecPopup()&&this.m_sValeurPopupTableZR!=t.value&&(this.m_bDansAffiche=!0,this.m_oObjetChampSaisie.MAJContenuCalendrier(n,t),delete this.m_bDansAffiche);var i=this.oGetElementHTMLPopup();this.m_oPopupAutomatique.Affiche(n,i,t)};WDCalendrier.prototype.AfficheInterne=function(n,t,i,r){var u,f;this.m_oChampSaisie=i;u=i;u||(u=clWDUtil.oGetTarget(n));f=u.getBoundingClientRect().left+u.offsetWidth-t.offsetWidth;f<0&&(f=0);var e=t.offsetParent,s=t.ownerDocument,h=e==s.body,c=clWDUtil.nGetBordurePage(),a=clWDUtil.nGetBoundingClientRectLeft(e,h,!0)+c;f-=a;clWDUtil.SetStyleLeft(t.style,f,0);var v=clWDUtil.nGetBoundingClientRectTop(e,h,!0)+c,l=u.getBoundingClientRect().top,o=l+u.offsetHeight;o-=v;t.style.top=o+"px";undefined!==r&&r<s.documentElement.scrollHeight&&t.offsetHeight<l&&(t.style.top=o-u.offsetHeight-t.offsetHeight+"px")};WDCalendrier.prototype.MasqueInterne=function(n,t){t&&this.m_oChampSaisie&&!this.m_sAliasTableZRParent&&this.m_oObjetChampSaisie.OnChange(n,this.m_oChampSaisie);delete this.m_oChampSaisie}