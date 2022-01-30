// MPA 模式下该文件无效
import { runApp, IAppConfig } from 'rax-app';
function orient() {
    //alert('gete');
    if (window.orientation == 0 || window.orientation == 180) {
        
        
        return false;
    }
    else if (window.orientation == 90 || window.orientation == -90) {
       

        return false;
    }
}
 

orient();
const appConfig: IAppConfig = {};
runApp(appConfig);
