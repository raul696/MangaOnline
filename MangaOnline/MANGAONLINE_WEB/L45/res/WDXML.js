/*! 22.0.2.0 */
/*! VersionVI: 01A250083n x */
function XMLConversionTexteXML(n,t){this.t=n;this.x=t}function XMLInitRechDoc(n){n.Rech=!1;n.DebRech=null;n.AttRech=XMLErreur;n.ValRech=null;n.OptRechNiv=XMLElement+XMLSousElement+XMLNiveauCourant;n.OptRech=XMLExact;n.Dehors=!1}function XMLInitDoc(n,t,i,r){n.Nom=t;n.Doc=i;n.Pos=r?null:i.documentElement;n.Att=XMLErreur;n.Ent=null;XMLInitRechDoc(n)}function clDocumentXML(n,t,i){XMLInitDoc(this,n,t,i)}function pclDocXML(n,t,i){for(var r=0;r<gTabDocXML.length;r++)if(gTabDocXML[r].Nom==n)return!t||gTabDocXML[r].Doc!=null&&(i||gTabDocXML[r].Pos!=null)?gTabDocXML[r]:null;return null}function XMLAjoutDoc(n,t,i){var r=pclDocXML(n);r!=null?XMLInitDoc(r,n,t,i):gTabDocXML[gTabDocXML.length]=new clDocumentXML(n,t,i)}function bXMLChaineVide(n){return n==null||n==""}function XMLDocument(n,t,i,r){var u=null,f=!bXMLChaineVide(t),o,e,s,h,c;if(f&&window.DOMParser){if(o=new DOMParser,o==null)return!1;u=o.parseFromString(t,"text/"+(i==xHTML?"html":"xml"))}else if(f||document==null||document.implementation==null||document.implementation.createDocument==null){if(window.ActiveXObject!=null&&((u=new ActiveXObject("Microsoft.XMLDOM"),u==null)||f&&(u.loadXML(t),u.parseError!=null&&u.parseError.errorCode!=0)))return!1}else u=document.implementation.createDocument(null,r!=null?r:null,null);if(u==null)return!1;if(XMLAjoutDoc(n,u,!f),f){if((e=t.indexOf("<?"),e==XMLErreur)||(s="?>",h=t.indexOf(s,e),h==XMLErreur))return!0;if(c=pclDocXML(n),c==null)return!1;c.Ent=t.substring(e,h+s.length)}return!0}function sTexteXMLRemplace(n,t,i){for(var r=0;r<n.length&&(r=n.indexOf(t,r))!=XMLErreur;)n=(r>0?n.substring(0,r):"")+i+(r+t.length<n.length?n.substring(r+t.length,n.length):""),r+=i.length;return n}function sXMLEntite(n){return"&"+n+";"}function TexteVersXML(n){for(var t=0;t<gTabConvTexteXML.length;t++)n=sTexteXMLRemplace(n,gTabConvTexteXML[t].t,sXMLEntite(gTabConvTexteXML[t].x));return n}function XMLVersTexte(n){for(var t=0;t<gTabConvTexteXML.length;t++)n=sTexteXMLRemplace(n,sXMLEntite(gTabConvTexteXML[t].x),gTabConvTexteXML[t].t);return n}function bXMLChaineCompare(n,t,i){return t?(i&XMLIgnoreLaCasse&&(n=n.toUpperCase(),t=t.toUpperCase()),i&XMLCommencePar&&(n=n.substring(0,t.length)),i&XMLContient?n.indexOf(t)!=XMLErreur:n==t):!0}function bXMLAttributNS(n){return bXMLChaineCompare(n.name,XMLDebutNS,XMLIgnoreLaCasse+XMLCommencePar)}function nXMLAttribut(n,t,i){for(var r=0;r<n.attributes.length;r++)if(!bXMLAttributNS(n.attributes[r])&&bXMLChaineCompare(n.attributes[r].name,t,i))return r;return XMLErreur}function XMLAjouteAttribut(n,t,i,r){var u=pclDocXML(n,!0),f;return u==null?!1:(u.Pos.setAttribute(t,TexteVersXML(i)),r&&(f=nXMLAttribut(u.Pos,t),f!=XMLErreur&&(u.Att=f)),!0)}function XMLAjouteFils(n,t,i,r){var u=pclDocXML(n,!0,!0),f,e;if(u==null||(f=u.Doc.createElement(t),f==null)||(e=null,!bXMLChaineVide(i)&&((e=u.Doc.createTextNode(TexteVersXML(XMLVersTexte(i))))==null||f.appendChild(e)==null)))return!1;if(u.Pos==null){if(u.Doc.documentElement==null){if(u.Doc.appendChild(f)==null)return!1}else if(!XMLDocument(n,null,null,t)||e!=null&&(f=u.Doc.documentElement).appendChild(e)==null)return!1}else if(u.Pos.appendChild(f)==null)return!1;return(r||u.Pos==null)&&(u.Pos=f,u.Att=XMLErreur),!0}function XMLAnnuleRecherche(n){var t=pclDocXML(n,!0);t!=null&&XMLInitRechDoc(t)}function bNoeudTexte(n){return n!=null?n.nodeType==TEXT_NODE:!1}function sXMLElemVersTxt(n,t){var e,r,i,u,f;if(bNoeudTexte(n))return n.nodeValue;if(n.nodeType==CDATA_NODE)return n.xml;for(e="",t>0,r=e+"<"+n.nodeName,i=0,i=0;i<n.attributes.length;i++)r+=" "+n.attributes[i].nodeName+'="'+n.attributes[i].nodeValue+'"';if(u=n.childNodes.length>0,u||(r+="/"),r+=">",u){for(f=!1,i=0;i<n.childNodes.length;i++)r+=sXMLElemVersTxt(n.childNodes[i],t+1),f=f||!bNoeudTexte(n.childNodes[i]);r+="<\/"+n.nodeName+">"}return r}function XMLConstruitChaine(n,t){var i=pclDocXML(n,!0);return i==null?"":(t&XMLSansEntete?"":(i.Ent!=null?i.Ent:'<?xml version="1.0" encoding="ISO-8859-1"?>')+"\n")+sXMLElemVersTxt(t&XMLPositionCourante?i.Pos:i.Doc.documentElement,0)+"\n"}function nXMLDernier(n){return(n!=null?n.length:0)-1}function pXMLDernier(n){return n!=null&&n.length>0?n[nXMLDernier(n)]:null}function XMLPositionneElement(n,t){n.Pos=t;n.Att=XMLErreur}function pXMLParent(n){return n.Att==XMLErreur?n.Pos.parentNode!=null&&n.Pos.parentNode.nodeType==XMLBalise?n.Pos.parentNode:null:n.Pos}function nXMLIndiceAttribut(n,t,i){if(n.attributes==null)return XMLErreur;for(var r=t;i?r<n.attributes.length:r>=0;i?r++:r--)if(!bXMLAttributNS(n.attributes[r]))return r;return XMLErreur}function nXMLDernierAttribut(n){return n!=null?nXMLIndiceAttribut(n,nXMLDernier(n.attributes),!1):XMLErreur}function bXMLDernierFils(n,t){for(var i=t!=null?pXMLDernier(t.childNodes):null;i!=null;)if(bNoeudTexte(i)){i=i.previousSibling;continue}else return XMLPositionneElement(n,i),!0;return(n.Att=nXMLDernierAttribut(t))>=0}function XMLDernier(n){var t=pclDocXML(n,!0);return t==null?!1:(bXMLDernierFils(t,pXMLParent(t)),XMLInitRechDoc(t),!0)}function pXMLCourant(n,t,i){if(n.Att!=XMLErreur)return t==null?n.Pos.attributes[n.Att]:null;if(t==null)return n.Pos;var r=nXMLAttribut(n.Pos,t,i);return r!=XMLErreur?n.Pos.attributes[r]:null}function XMLDonnee(n,t,i){var f=pclDocXML(n,!0);if(f==null)return"";for(var r=pXMLCourant(f,t,i),e=f.Att!=XMLErreur||t!=null,u=r!=null&&(e||bNoeudTexte(r.firstChild))?e?r:r.firstChild:null,o="";u!=null;)o+=u.nodeValue,u=e?null:u.nextSibling;return o}function XMLEnDehors(n){var t=pclDocXML(n,!0);return t==null?!0:t.Dehors}function bXMLPosElemFils(n,t){var r,i;if(t==null)return!1;for(r=!1,i=0;!r&&i<t.childNodes.length;i++)(r=!bNoeudTexte(t.childNodes[i]))==!0&&XMLPositionneElement(n,t.childNodes[i]);return r}function nXMLPremierAttribut(n){return n!=null?nXMLIndiceAttribut(n,0,!0):XMLErreur}function bXMLFils(n){var t=!1,i;return n.Att==XMLErreur&&(i=nXMLPremierAttribut(n.Pos),i!=XMLErreur?(n.Att=i,t=!0):t=bXMLPosElemFils(n,n.Pos)),t}function XMLFils(n){var t=pclDocXML(n,!0),i;return t==null?!1:(i=bXMLFils(t),XMLInitRechDoc(t),i)}function XMLNomElement(n){var i=pclDocXML(n,!0),t;return i==null?"":(t=pXMLCourant(i),t.nodeName.substring(t.nodeType==COMMENT_NODE&&bXMLChaineCompare(t.nodeName,XMLDebutComment,XMLIgnoreLaCasse+XMLCommencePar)?XMLDebutComment.length:0,t.nodeName.length))}function XMLNomParent(n){var i=pclDocXML(n,!0),t;return i==null?"":(t=pXMLParent(i),t!=null?t.nodeName:"")}function XMLParent(n){var t=pclDocXML(n,!0),i;return t==null?!1:(i=pXMLParent(t),i!=null&&XMLPositionneElement(t,i),XMLInitRechDoc(t),i!=null)}function oXMLElemPrec(n){while((n=n.previousSibling)&&(bNoeudTexte(n)||n.nodeType==PROCESSING_INSTRUCTION_NODE));return n}function bXMLDansFilsRech(n,t){for(var i=t?n.Pos:n.Pos.parentNode;i!=null&&i.parentNode!=n.DebRech;)i=i.parentNode;return i!=null}function bXMLRechercheOK(n){if(n.ValRech==null)return!0;var t=!1;return n.Att!=XMLErreur?(n.OptRechNiv&XMLAttribut&&(t=bXMLChaineCompare(n.Pos.attributes[n.Att].nodeName,n.ValRech,n.OptRech)),!t&&n.OptRechNiv&XMLValeur&&(t=bXMLChaineCompare(n.Pos.attributes[n.Att].nodeValue,n.ValRech,n.OptRech))):(n.OptRechNiv&XMLBalise&&(t=bXMLChaineCompare(n.Pos.nodeName,n.ValRech,n.OptRech)),!t&&n.OptRechNiv&XMLValeur&&bNoeudTexte(n.Pos.firstChild)&&(t=bXMLChaineCompare(n.Pos.firstChild.nodeValue,n.ValRech,n.OptRech))),t}function bXMLRetourSiEchec(n,t,i,r){return t||(n.Pos=i,n.Att=r,n.Dehors=!0),t}function XMLPrecedent(n){var t=pclDocXML(n,!0),u,f,e,r;if(t==null)return!1;t.Dehors=!1;for(var o=t.Pos,s=t.Att,i=!1;!i;){if(t.Rech&&t.OptRechNiv&XMLSousElement&&t.Att==XMLErreur&&(i=bXMLDernierFils(t,t.Pos)),!i&&(!t.Rech||t.OptRechNiv&XMLNiveauCourant||pXMLParent(t)!=t.DebRech.parentNode)&&(t.Att!=XMLErreur&&(!t.Rech||t.OptRechNiv&(XMLAttribut|XMLValeur))?(u=nXMLIndiceAttribut(t.Pos,t.Att-1,!1),u!=XMLErreur&&(t.Att=u,i=!0)):(f=oXMLElemPrec(t.Pos),f?(XMLPositionneElement(t,f),i=!0):(e=nXMLDernierAttribut(t.Pos.parentNode),t.Pos.parentNode!=null&&e!=XMLErreur&&(t.Pos=t.Pos.parentNode,t.Att=e,i=!0)))),!i&&t.Rech)for(r=null;!i&&(r=pXMLParent(t))!=null&&(t.OptRechNiv&XMLContinue||(t.Att==XMLErreur?r:r.parentNode)==t.DebRech&&t.OptRechNiv&XMLNiveauCourant||bXMLDansFilsRech(t,!!oXMLElemPrec(r)));)XMLPositionneElement(t,oXMLElemPrec(r)||r);if(!i)break;i=bXMLRechercheOK(t)}return bXMLRetourSiEchec(t,i,o,s)}function XMLPremier(n){var t=pclDocXML(n,!0),i,r;return t==null?!1:(i=pXMLParent(t),r=nXMLPremierAttribut(i),i!=null&&r!=XMLErreur?(t.Pos=i,t.Att=r):bXMLPosElemFils(t,i),XMLInitRechDoc(t),!0)}function XMLRacine(n){var t=pclDocXML(n,!0);return t==null?!1:(XMLPositionneElement(t,t.Doc.documentElement),XMLInitRechDoc(t),!0)}function XMLRecherche(n,t,i,r){var u=pclDocXML(n,!0);return u==null?!1:(u.Rech=!0,u.DebRech=u.Pos,u.AttRech=u.Att,u.ValRech=t,u.OptRechNiv=(i!=null?i:0)+((i&XMLElement+XMLValeur)?0:XMLElement)+((i&XMLNiveauCourant+XMLSousElement+XMLContinue)?0:XMLNiveauCourant+XMLSousElement),u.OptRech=r!=null?r:XMLExact,u.Dehors=!1,XMLSuivant(n))}function XMLSuivant(n){var t=pclDocXML(n,!0),f,u,r;if(t==null)return!1;t.Dehors=!1;for(var e=t.Pos,o=t.Att,i=!1;!i;){if(t.Rech&&t.OptRechNiv&XMLSousElement&&t.Att==XMLErreur&&(i=t.OptRechNiv&XMLAttribut?bXMLFils(t):bXMLPosElemFils(t,t.Pos)),!i&&(!t.Rech||t.OptRechNiv&XMLNiveauCourant||pXMLParent(t)!=t.DebRech.parentNode))if(t.Att!=XMLErreur&&(!t.Rech||t.OptRechNiv&(XMLAttribut|XMLValeur)))f=nXMLIndiceAttribut(t.Pos,t.Att+1,!0),f==XMLErreur?i=bXMLPosElemFils(t,t.Pos):(t.Att=f,i=!0);else{for(u=t.Pos.nextSibling;bNoeudTexte(u);)u=u.nextSibling;u!=null&&(XMLPositionneElement(t,u),i=!0)}if(!i&&t.Rech)for(r=null;!i&&(r=pXMLParent(t))!=null&&(t.OptRechNiv&XMLContinue||(t.Att==XMLErreur?r:r.parentNode)==t.DebRech&&t.OptRechNiv&XMLNiveauCourant||bXMLDansFilsRech(t,r.nextSibling!=null));)XMLPositionneElement(t,(i=r.nextSibling!=null)?r.nextSibling:r);if(!i)break;i=bXMLRechercheOK(t)}return bXMLRetourSiEchec(t,i,e,o)}function XMLTermine(n){var t=pclDocXML(n,!0,!0);return t==null?!1:(t.Doc=t.Pos=t.DebRech=null,!0)}function XMLTrouve(n){return!XMLEnDehors(n)}function XMLTypeElement(n){var t=pclDocXML(n,!0);return t==null?XMLErreur:t.Att!=XMLErreur?XMLAttribut:XMLBalise}var TEXT_NODE=3,CDATA_NODE=4,PROCESSING_INSTRUCTION_NODE=7,COMMENT_NODE=8,XMLErreur=-1,xHTML=1,XMLBalise=1,XMLAttribut=2,XMLElement=XMLBalise+XMLAttribut,XMLValeur=4,XMLSousElement=16,XMLNiveauCourant=32,XMLContinue=64,XMLExact=1,XMLCommencePar=2,XMLContient=4,XMLIgnoreLaCasse=16,XMLAvecNamespace=32,XMLEncodageAucun=1,XMLEncodageUTF8=2,XMLEncodageUTF16=3,XMLEncodageIso8859_1=6,XMLEncodageIso8859_2=7,XMLEncodageIso8859_3=8,XMLEncodageIso8859_4=9,XMLEncodageIso8859_5=10,XMLEncodageIso8859_6=11,XMLEncodageIso8859_7=12,XMLEncodageIso8859_8=13,XMLEncodageIso8859_9=14,XMLDocumentDefaut=0,XMLPositionCourante=1,XMLSansEntete=2,XMLDebutNS="xmlns",XMLDebutComment="#",gTabDocXML=[],gTabConvTexteXML=[];gTabConvTexteXML[gTabConvTexteXML.length]=new XMLConversionTexteXML("&","amp");gTabConvTexteXML[gTabConvTexteXML.length]=new XMLConversionTexteXML("'","apos");gTabConvTexteXML[gTabConvTexteXML.length]=new XMLConversionTexteXML(">","gt");gTabConvTexteXML[gTabConvTexteXML.length]=new XMLConversionTexteXML("<","lt");gTabConvTexteXML[gTabConvTexteXML.length]=new XMLConversionTexteXML('"',"quot")