window.myCrypto = {
    AESEncryption : function (data, aesKey) {
        var key = CryptoJS.enc.Utf8.parse(aesKey);
        var iv  = CryptoJS.enc.Utf8.parse(aesKey);
        var srcs = CryptoJS.enc.Utf8.parse(data);
        var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv,mode:CryptoJS.mode.ECB});
        return encrypted.toString();
    },

    //AES解密
    AESDecrypt : function (data, aesKey) {
        var key = CryptoJS.enc.Utf8.parse(aesKey);
        var iv  = CryptoJS.enc.Utf8.parse(aesKey);
        var decrypt = CryptoJS.AES.decrypt(data, key, { iv: iv,mode:CryptoJS.mode.ECB});
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }
};

(function($){
  $(function(){
  	var aesKey="";

    $('#btn-AESDecode').click(function(){
    	var tmpStr = myCrypto.AESDecrypt( $('#inputStr').val(), aesKey);
    	if(tmpStr==""){
    		Materialize.toast('FAIL!', 4000);
    	}else{
    		Materialize.toast('SUCCESS!', 4000);
    	}
    	$('#outputStr').val(tmpStr);
    	$('#outputStr').trigger('autoresize');
    	$('#outputStr').focus();
    });

    $('#btn-AESEncode').click(function(){
    	var tmpStr = myCrypto.AESEncryption( $('#inputStr').val(), aesKey);
		Materialize.toast('SUCCESS!', 4000);
    	$('#outputStr').val(tmpStr);
    	$('#outputStr').trigger('autoresize');
    	$('#outputStr').focus();
    });

    $('#btn-getMD5').click(function(){
    	var tmpStr = CryptoJS.MD5( $('#inputStr').val()).toString();
		Materialize.toast('SUCCESS!', 4000);
    	$('#outputStr').val(tmpStr);
    	$('#outputStr').trigger('autoresize');
    	$('#outputStr').focus();
    });

    $('#btn-URIDecode').click(function(){
    	var tmpStr = decodeURI( $('#inputStr').val());
		if(tmpStr==""){
    		Materialize.toast('FAIL!', 4000);
    	}else{
    		Materialize.toast('SUCCESS!', 4000);
    	}
    	$('#outputStr').val(tmpStr);
    	$('#outputStr').trigger('autoresize');
    	$('#outputStr').focus();
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space

