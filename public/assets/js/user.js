$('#userForm').on('submit',function(e){
    var formData = $(this).serialize();
    // 阻止默认提交
    e.preventDefault()
    // 向服务器发送
    $.ajax({
        type:'post',
        url:'/users',
        data:formData,
        success:function(response){
            // reload  页面刷新操作
            location.reload();
            console.log(response)
        },
        error:function(){
            alert('添加失败')
        }
    })
    return false;
})
$('#avatar').on('change',function(){
    var formData = new FormData();
    formData.append('avatar',this.files[0]);
    $.ajax({
        type:'post',
        url:'/upload',
        data:formData,
        processData:false,
        contentType:false,
        success: function(response){
        console.log(response)
        $('#preview').attr('src',response[0].avatar)
        $('#hiddenAvatar').val(response[0].avatar)
        } 
    })
})
// $.ajax({
//     type:'get',
//     url:'/users',
//     success:function(response){
//         console.log(response);
//         var html = template('userTpl',{data:response});
//         $('#userBox').html(html);
//     }
// })
$.ajax({
    type: 'get',
    url: '/users',
    success: function (response) {
        console.log(response)
        // 使用模板引擎将数据和HTML字符串进行拼接
        var html = template('userTpl', { data: response });
        // 将拼接好的字符串显示在页面中
        $('#userBox').html(html);
    }
});