function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val("zan.horvat@outlook.com").select();
    document.execCommand("copy");
    $temp.remove();
}