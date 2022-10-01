import axios from 'axios';
import { Loading } from 'element-ui';
import _ from 'lodash';
import qs from 'qs';

class HttpClient {
  // loading 指令实例
  loadingInstance;
  baseUrl;
  loadingTarget;
  requestCount = 0;

  // 默认为全局loading , baseUrl环境变量
  constructor(baseUrl = process.env.BASE_URL, loadingTarget = 'body') {
    this.baseUrl = baseUrl;
    this.loadingTarget = loadingTarget;
  }

  showLoading(target) {
    if (this.requestCount === 0 && !this.loadingInstance) {
      this.loadingInstance = Loading.service({
        lock: true,
        text: 'Loading...',
        background: 'rgba(255, 255, 255, 0.5)',
        target: 'body',
        customClass: target
      });
    }
    this.requestCount++;
  }

  hideLoading() {
    this.requestCount--;
    this.requestCount = Math.max(this.requestCount, 0);
    if (this.requestCount === 0) {
      _.debounce(() => {
        this.loadingInstance && this.loadingInstance.close();
        this.loadingInstance = null;
      }, 200).apply(this);
    }
  }

  // 默认配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      timeout: 15000,
      headers: {
        // 默认header
      }
    };
    return config;
  }

  // 拦截器
  interceptors(instance) {
    // 请求拦截
    instance.interceptors.request.use(
      req => {
        if (!req.hideLoading) {
          this.showLoading(this.loadingTarget);
        }
        // 如果是formData将isFormData设为true
        if (req.isFormData) {
          return req
        }
        // 如果设置isJson也跳过这一步转换
        if (req.method === 'post' && !req.isJson) {
          req.data = qs.stringify(req.data);
        }
        
        return req;
      },
      err => {
        this.hideLoading();
        return Promise.resolve(err);
      }
    );

    // 响应拦截器
    instance.interceptors.response.use(
      async res => {
        const data = res.data;
        // 跳转UAAC登录页
        if (data.errCode === '9999' && data.errMsg) {
          await this.sleep(300);
          window.location.href = window.location.href = data.errMsg;
        }
        this.hideLoading();
        return res.data;
      },
      async error => {
        await this.sleep(300);
        this.hideLoading();
        return Promise.reject(error);
      }
    );
  }

  sleep(ms) {
    return new Promise(function(resolve) {
      setTimeout(resolve, ms);
    });
  }

  request(options) {
    const instance = axios.create();
    // options = Object.assign(this.getInsideConfig(), options)
    // 深合并，使用 request方法时，可以对请求做任意层次配置，前者将被覆盖
    options = _.merge(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(options);
  }
  // 注 option 可支持的配置：
  // url?: string;
  // method?: Method;
  // baseURL?: string;
  // transformRequest?: AxiosTransformer | AxiosTransformer[];
  // transformResponse?: AxiosTransformer | AxiosTransformer[];
  // headers?: any;
  // params?: any;
  // paramsSerializer?: (params: any) => string;
  // data?: any;
  // timeout?: number;
  // timeoutErrorMessage?: string;
  // withCredentials?: boolean;
  // adapter?: AxiosAdapter;
  // auth?: AxiosBasicCredentials;
  // responseType?: ResponseType;
  // xsrfCookieName?: string;
  // xsrfHeaderName?: string;
  // onUploadProgress?: (progressEvent: any) => void;
  // onDownloadProgress?: (progressEvent: any) => void;
  // maxContentLength?: number;
  // validateStatus?: (status: number) => boolean;
  // maxRedirects?: number;
  // socketPath?: string | null;
  // httpAgent?: any;
  // httpsAgent?: any;
  // proxy?: AxiosProxyConfig | false;
  // cancelToken?: CancelToken;
}

export default HttpClient;

// import axios from "axios";

// export default {
//      commonRequest(data,url) {
//         axios.post("http://192.168.10.184:8081"+url,
//         data,
//        {
//          withCredentials: false,
//          headers:{
//            'imei': '',
//            'Content-Type': 'application/json',
//            // 'token': parse.data.data.token
//          }
//        }
//      ).then(function (response){
    
//        console.log(response.data);
//        // this.$router.push('/index');
//     }).catch(function (error){
    
//     })
//     },
// }

