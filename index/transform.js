function s22t(){
    document.cookie  = 'cmlan=tw';  //����cokie
    document.body.innerHTML=s2t(document.body.innerHTML);
}
function t22s(){
    document.body.innerHTML=t2s(document.body.innerHTML);
    //����ɾ��cookie
    var date=new Date();
    date.setTime(date.getTime()-1000)
    document.cookie="cmlan=tw; expires="+date.toUTCString();
}
//�ж��Ƿ������Ϊcmlan��cookie��ʹ��document.cookie.indexOf(��cmlan=��)���жϣ��������ֵ��-1����ʾ�����ڡ�
function myfun()
{
    c_start=document.cookie.indexOf("cmlan=");
    if(c_start==-1){
        //document.body.innerHTML=t2s(document.body.innerHTML);  //����ת��
    }
    else{
        document.body.innerHTML=s2t(document.body.innerHTML);  //����ת��Ϊ����
    }
}
/*��window.onload����myfun()  ��ҳ��ʱ�������·���*/
window.onload=myfun;//��Ҫ����

//*===========================================================================
//* (c)copyright 2000 liqwei
//* Email: liqwei(at)liqwei.com
//*  Site: http://www.liqwei.com/
//*===========================================================================
//* ���ܣ��������ת������Ҫ����ҳ��ײ���
//* �汾��v1.0��
//*===========================================================================
//���ܣ�ת������ʹ�õݹ飬�������ı���
function transformContent(switcherId, fobj){
    if(typeof(fobj)=="object"){
        var obj=fobj.childNodes
    } else {    
        if(parseInt(fobj)!=0){ //��ҳ���ʼ��ʱ���Ʋ����µ�ǰҳ������״̬��
            var switcherObj = document.getElementById(switcherId);
            with(switcherObj){
                if(parseInt(isCurrentFt)){
                    innerHTML = innerHTML.replace('��','��')
                    title = title.replace('��','��')
                }else{
                    innerHTML = innerHTML.replace('��','��')
                    title = title.replace('��','��')
                }
            }
            switcherObj.innerHTML=transformText(switcherObj.innerHTML, isCurrentFt)
            switcherObj.title=transformText(switcherObj.title, isCurrentFt)    
            
            if(isCurrentFt=="1"){isCurrentFt="0"}else{isCurrentFt="1"}
            writeCookie("isCurrentFt",isCurrentFt)
        }
        var obj=document.body.childNodes
    }
    for(var i=0;i<obj.length;i++){
        var OO=obj.item(i)
        if("||BR|HR|TEXTAREA|".indexOf("|"+OO.tagName+"|")>0||OO.id==switcherId)continue;
        if(OO.title!=""&&OO.title!=null)OO.title=transformText(OO.title, isCurrentFt);
        if(OO.alt!=""&&OO.alt!=null)OO.alt=transformText(OO.alt, isCurrentFt);
        if(OO.tagName=="INPUT"&&OO.value!=""&&OO.type!="text"&&OO.type!="hidden")OO.value=transformText(OO.value, isCurrentFt);
        if(OO.nodeType==3){OO.data=transformText(OO.data, isCurrentFt)}
        else transformContent(switcherId, OO)
    }
}
//���ܣ�ת��ָ���ַ�����
function transformText(txt, isFt){
    if(txt==null || txt=="")return ""
    if(parseInt(isFt)){return s2t(txt)}else{return t2s(txt)}
}
//���ܣ������ַ�תΪ�����ַ���
function s2t(cc){
    var str='',ss=jtpy(),tt=ftpy();
    for(var i=0;i<cc.length;i++){
        var c = cc.charAt(i);
        if(c.charCodeAt(0)>10000&&ss.indexOf(c)!=-1)str+=tt.charAt(ss.indexOf(c));
          else str+=c;
    }
    return str;
}
//���ܣ������ַ�תΪ�����ַ���
function t2s(cc){
    var str='',ss=jtpy(),tt=ftpy();
    for(var i=0;i<cc.length;i++){
        var c = cc.charAt(i);
        if(c.charCodeAt(0)>10000&&tt.indexOf(c)!=-1)str+=ss.charAt(tt.indexOf(c));
          else str+=c;
    }
    return str;
}
function jtpy(){
    return '�������������°Ӱհڰܰ����������������������������������ʱϱбձ߱�����������������������������βϲвѲҲӲԲղֲײ޲����������������������������������������������³ĳųƳͳϳҳճٳ۳ܳݳ�������������������������������������´ǴʴʹϴдѴӴԴմܴ�������������������������������������������Ƶ˵еӵݵ޵���������������������������������������ĶƶͶ϶жҶӶԶֶٶ۶�����������������������������������÷ķɷϷѷ׷طܷ߷�������������������������������øƸǸɸϸѸӸԸոָٸڸ޸����������������������������ƹ˹йع۹ݹ߹�����������������������������Һ׺غ���������������������������������������������ƻѻӻԻٻ߻���������������������������������������������üƼǼʼ̼ͼмԼռּؼۼݼ߼����������������������������������������������������������������½ýĽŽȽɽʽνϽս׽ھ����������������������ǾɾԾپݾ�����ܽ������������������������������������������ſǿοѿҿٿ���������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������¢£¤¥¦§¨«¬­®¯°±²³¸»¼½¿����������������������������������������������������������������������������������������áèêíóôùûþ����������������������������������ıĶ����������������������������������������šŢťŦŧŨũűŵŷŸŹŻŽ���ӹ���������ƭƮƵƶƻƾ������������������������������ǣǤǥǦǨǩǫǮǯǱǳǴǵǹǺǽǾǿ��������������������������������������������ȣȧȨȰȴȵ������������������������������������ɡɥɧɨɬɱɴɸɹ��������������������������������������ʤʥʦʨʪʫʬʱʴʵʶʻ��������������������������������˧˫˭˰˳˵˶˸˿��������������������������������������̷̸̡̢̧̯̰̱̲̳̾��������������������������������ͭͳͷͼͿ������������������������������ΤΥΧΪΫάέΰαγν������������������������������������������������ϮϰϳϷϸϺϽϿ��������������������������������������������������������ХЫЭЮЯвгдклп��������������������������ѡѢѤѧѫѯѰѱѵѶѷѹѻѼ������������������������������������������������ҡҢңҤҥҩүҳҵҶҽҿ��������������������������������������ӣӤӥӦӧӨөӪӫӬӱӴӵӶӸӻӽӿ������������������������������������ԤԦԧԨԯ԰ԱԲԵԶԸԼԾԿ������������������������������������������������������������������աբթիծձյնշոջս����������������������������������������ְִֽֿ֣֤֡֯��������������������������������������������פרשת׬׮ׯװױ׳״׶׸׹׺׻����������������������������ôΪֻ��׼������������й';
}
function ftpy(){
    return '�}�@�K���O�\�W���T�[���C�k�O�ͽ��^�r������U݅ؐ�^�N��v���P�����]߅���H׃�q�p���T�l�I�e�P����K�g�N�a���Q���M�K�N�nœ�}����ȃԜy��Ԍ�v���s�׋�p�P�b�U��L�L���c�S���n܇�؉m��r�ηQ���\�G�V�t�Y�u�X��_�x�����P�I�I�h���N�z�r�A���|̎�����J���N���b�o�~�n�[��ą����Z�e�_���J��������đ���Q�������hʎ�n�v�u�\���I���������f���c�|늝���{��ՙ�B���Vӆ�|�ӗ����Y�٪��xـ�呔྄��ꠌ����D�g�Z�Z�~Ӟ���I�����D�E�l�P�y�m�\�C����؜��L���w�U�M�����^���S�S���h�L���T�p�S�P�wݗ���o�x�}ؓӇ�D�`ԓ�}�w���s���M����䓾V���V怔R���w�t���o���m�ؕ�h�Ϙ�ُ���M��P�^�^�T؞�VҎ���w���|܉Ԏ���F��݁�L假��^��n�h�u�Q�R�M�Z���t����o����W�A����Ԓ�щĚg�h߀���Q�������o�S�e�]�x���V�x���Z���M�d�Lȝ��ⷫ@؛�����C�e���I�u�����O݋���D���E����Ӌӛ�H�^�o�A�v�a�Z⛃r�{���O�Թ{�g�D�}�O�z�A�|���캆���p�]���b�`�vҊ�IŞ���T�u�R���{�Y�����v�u�z���ɔ��q�C�e�_��U�g�I�^�M�A���o�@���i�o�R���d���Q�m���f�x�e��䏑ք��N���ܝ��Y�]�þo�\�H֔�M�x�a�M���G�X�Q�E�^�x܊�E�_�P�w���n��������ѝ�F�K�~���V��r̝�h�Q�����U�Ϟ�D�R��ه�{�ڔr�@�@�m��׎���[���|���E�Ƅڝ����D��I�h�x�Y���Y������[�ўr�`�zɏ�B砑z�i����Ę朑ٟ����Z�����vՏ���|炫C�R���[�C�U�g⏜R�`�X�I�s�����@���\�Ŕn�]�Ǌ䓧�t�J�R�B�]�t���u̔���T�����H���X�H�ҿ|�]�V�G�n���\���y��݆�����S�]Փ�}�_߉茻j��j�����aΛ�R�R���I���u�~�}�m�z�U�M֙؈�^�T�Q���q�]�V�T�����i���i��Ғ�d���R�瑑�}�Q�և�\���c�{�y���X���[�Hā�f����B�m�懙���帔Q���o�~ē���r���Z�W�t���I�a�P�������r���i�_�h�lؚ�O�{�u���H��䁘��VĚ�R�T�M���◉ә���L�T�U�w���t�X�Q���\�l�q���ܠ��N�����@��̃S�N�[�`�J�H�p��A�Ո�c���Fڅ�^�|��x�E����s�o׌���_�@���g�J�x�s�qܛ�J�c�����_�wِ����}�ߝ������Y���W�٠�����p���B�d�z���O�������I�B�K���}���{��Ԋ�ƕr�g���R����ҕԇ�۫F��ݔ���H���g���Q�����p�l����f�T�q�z��Z��A�b�\�K�V�C�m���q�O�p�S�s���i�H��E��؝�c�����TՄ�U���C���l�v�`�R�}�w�ϗl�N�F�d �N�~�y�^�D�T�F�j͑Ó�r�W�E�D�m�����B�f�W�f�`�����H�SȔ���^���^�l���y�����Y��΁�u�C���u���_�oʏ�ǉ]�F���`�a���u��㊑��rݠ�{�b�M�B�v�r�w�y�t��e�@�U�F�I�h�W�w��������lԔ��ʒ�N�ԇ[ϐ�f���y�{�C���a�x�\��d���n�C̓�u��S�w�m܎���x�_�k�W��ԃ���ZӖӍ�d���f������Ӡ鎟��}�����W�������V�����P��ꖰW�B�Ӭ��u���b�G�{ˎ��퓘I�~�t��U�z�x��ρˇ�|���xԄ�h�x�g���[�a��yы������t��Ξ�I��ω�f�ѓ��b�xԁ�����n�]♪q�[�Tݛ�~�O���c�Z�Z�n�R�z�u�A�S�x�Y�@�@�T�A���hs�S耎[�������y���E�\�N�j����s���d����ٝ�E�v菗��^؟��t���\ٛ����܈��l�p�S���ֱK��ݚ�䗣��`���q���~Û�w�U�H�N�@ؑᘂ��\�ꇒ걠�b�����C���̼����S���|�R�K�N�[�\�a�S�����E�i�T�D�T�����A�T�B�v���u�Dٍ���f�b�y�Ѡ��F٘���YՁ��Ɲ�Y�nۙ�C���v�u�{�M荿@��N���b���ʆ���e�Z�N倛�';
}
//���ܣ���ȡָ�����Ƶ� Cookie ֵ��
function readCookie(name) {
  var value = "";
  if(document.cookie.length > 0){
      var prefix = name + "="; 
      var begin = document.cookie.indexOf(prefix);
      if (begin != -1) {
            begin += prefix.length;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1)    end = document.cookie.length;
            value = unescape(document.cookie.substring(begin, end));
      }
  }
  return value;
}
//���ܣ�����ָ�����Ƶ� Cookie ֵ��
function writeCookie(name, value, days){
    var argv = writeCookie.arguments;
    var argc = writeCookie.arguments.length;
    var days = (argc>2)?argv[2]:null;
    if(days!=null){
        var expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + (days*1000*3600*24));
    }
    document.cookie = name+"="+escape(value) + ((days==null)?"":("; expires=" +expireDate.toGMTString())) +"; path=/";
}

var isCurrentFt;
//���ܣ�ҳ���ʼ������
//    switcherId  �������ӣ����������л������飺<a id="switcher_link" href="#">��������</a>��
//    isDefaultFt ��ǰ�ĵ�Ĭ���Ƿ�Ϊ�������ģ�
//    delay ҳ����غ��ת���ӳ�ʱ�䣬��λ���룻
//    ʹ�õ� Cookie �������ƣ�isCurrentFt
function initPageLanguage(switcherId, isDefaultFt, delay){
    isDefaultFt = isDefaultFt?"1":"0";
    var switcherObj=document.getElementById(switcherId)
    isCurrentFt=readCookie("isCurrentFt")
    if(isCurrentFt==null || isCurrentFt=="") isCurrentFt=isDefaultFt
    with(switcherObj){
        if(typeof(document.all)!="object") {//��IE�����
            href="javascript:transformContent('"+ switcherId +"');"
        }else{
            href="#";
            onclick= new Function("transformContent('"+ switcherId +"');return false;")
        }
        if(title == null || title=="") title = "����Է������ķ�ʽ���";
        if(parseInt(isCurrentFt)) {
            innerHTML = innerHTML.replace('��','��')
            title = title.replace('��','��')
        }
        innerHTML = transformText(innerHTML, parseInt(isCurrentFt)?0:1)
        title = transformText(title, parseInt(isCurrentFt)?0:1)
    }        
    if(isCurrentFt!=isDefaultFt){setTimeout("transformContent('"+ switcherId +"',0)",delay)}
}
// ��ʼ�����ýӿ�
//initPageLanguage("switcher_link", false, 50);