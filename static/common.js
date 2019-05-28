/*
 * xhr 获取数据
 * */
var debug = true;   // 是否开启debug

function CreateRequestObject() {
  var ajaxRequest;
  try {
    ajaxRequest = new XMLHttpRequest();
  } catch (e) {
    try {
      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try{
        ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        ajaxRequest = false;
      }
    }
  }
  if(!ajaxRequest) {
    console.log('您的浏览器版本过低，请更换最新版本的Chrome浏览器！');
  }
  return ajaxRequest;
}

/*
 * paramObj {
 *   url: 请求的接口url
 *   type: get/post  请求的方式，可选，默认get
 *   timeout: 设置请求超时时间，可选，默认为0，即不设置超时
 *   contentType:设置header，可选
 *   data: 要发送的数据
 *   ready: 请求结束后执行
 *   error: 请求错误
 * */
function obtainData(paramObj) {
  var ajaxRequest = CreateRequestObject();
  if(ajaxRequest === false) {  // 如果获取ajax对象失败
    return;
  }

  // 默认数据的处理
  var defaultContentType = 'application/x-www-form-urlencoded; charset=UTF-8';
  // var defaultContentType = 'application/json; charset=UTF-8';
  var defaultType = 'GET';
  var defaultAsync = true;
  paramObj.contentType = paramObj.contentType || defaultContentType;
  paramObj.type = paramObj.type || defaultType;   // 默认是GET
  paramObj.async = (typeof paramObj.async === 'boolean') ? paramObj.async : defaultAsync;   // 默认是异步
  // 设置超时时间
  paramObj.timeout && Number(paramObj.timeout) ? ajaxRequest .timeout = paramObj.timeout : '';

  // 处理要发送的数据
  var senData = paramObj.data ? paramObj.data : "";
  if(paramObj.type === "GET") {
    senData = formatParams(senData);
  } else if(paramObj.contentType.indexOf('application/x-www-form-urlencoded') > -1) {
    senData = formatParams(senData);
  } /*else if(paramObj.contentType.indexOf('application/json') > -1) {  // 发送json格式失败
   senData = JSON.stringify(senData);
   } */else {
    // 其他请求方式的数据转换需要自己实现
  }

  // 发送数据
  if(paramObj.type === "GET") {
    ajaxRequest.open(paramObj.type, paramObj.url + '?' + senData, paramObj.async);
    ajaxRequest.send(null);
  } else if(paramObj.type === "POST") {   // POST
    ajaxRequest.open(paramObj.type, paramObj.url, paramObj.async);
    ajaxRequest.setRequestHeader('Content-Type', paramObj.contentType);
    ajaxRequest.send(senData);
  }
  // 监听超时事件
  ajaxRequest.ontimeout = function () {
    console.error("The request for " + paramObj.url + " timed out.");
  };
  // 处理返回函数
  ajaxRequest.onreadystatechange = function () {
    if(ajaxRequest.readyState === 4) {
      if(ajaxRequest.status === 200 || ajaxRequest.status === 304) {
        var result = ajaxRequest.responseText;
        try {
          var data = result ? JSON.parse(result) : false;  //  将json字符串转为json对象
          paramObj.ready? paramObj.ready(data): '';
        } catch (e) {
          console.error(e);
        }
      } else {
        console.error("请求错误");
        paramObj.error? paramObj.error(): '';
      }
    }
  }; // 回调函数结束
}

export default obtainData
