function converter() {
	var convert_num = document.getElementById('pjt_num').value;
  convert_num = convert_num.replace(/1/g,'A');
  convert_num = convert_num.replace(/2/g,'B');
  convert_num = convert_num.replace(/3/g,'C');
  convert_num = convert_num.replace(/4/g,'D');
  convert_num = convert_num.replace(/5/g,'E');
  convert_num = convert_num.replace(/6/g,'F');
  convert_num = convert_num.replace(/7/g,'G');
  convert_num = convert_num.replace(/8/g,'H');
  convert_num = convert_num.replace(/9/g,'I');
  convert_num = convert_num.replace(/0/g,'J');
  
  document.getElementById('convert_url').value='https://univ.datadata.co.kr/?' + convert_num;
}

function copy_url() {
  var copyUrl= document.getElementById('convert_url');
  copyUrl.select();
  copyUrl.setSelectionRange(0,99999);
  navigator.clipboard.writeText(copyUrl.value);
}