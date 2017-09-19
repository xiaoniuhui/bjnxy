// 弹出登录
$('#login').on('click',function(){
  layer.open({
    type: 1,
    title: false,
    closeBtn: 1,
    shadeClose: false,
    shade: [0.5,"black"],
    content:$('#loginbox')
  });
});
// 表单验证
$('#loginform').validate({
  sendForm:false,
  description:{
    nickname:{
      required:'姓名不能为空'
    },
    pwd:{
      required:'密码长度不能少于六位'
    }        
  },
  valid:function(){
    // layer.closeAll();
    window.location.href='html/ketizu/ketiinfo.html';
    // $('#login').text('我的工作台');
  }
});

