//通用事件绑定

function bindEvent(elem, type, select, fn){
  if(fn == null){
    fn = select;
    select = null;
  }
  elem.addEventListener(type,function(e){ //添加事件
    var target;
    if(select){
      target = e.target； //返回事件元素
      if(target.matches(select)){ //target是否符合目标元素
        fn.call(target, e); //this->target
      }
    }else{
      fn(e);
    }
  })
}

//使用代理
var div1 = document.getElementById('div1');
bindEvent(div1, 'click', 'a', function(e){
  console.log(this.innerHTML)
})

//不使用代理
var a = document.getElementById('a1');
bindEvent(a, 'click', function(e){
  console.log(a.innerHTML)
})