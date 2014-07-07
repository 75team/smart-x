# 快速上手

## 配置环境

* 安装 [Android SDK](http://developer.android.com/sdk/index.html)、 [Android NDK](http://developer.android.com/tools/sdk/ndk/index.html)、[Apache Ant](http://ant.apache.org/)

* 下载 [cocos2d-js](http://cocostudio.download.appget.cn/cocos2d-js/v3.0rc0/cocos2d-js-v3.0-rc0.zip)

* 解压后配置开发环境，执行
```bash
python setup.py 
```

* clone 本项目，将templates目录中的内容 copy 到 cocos2d-js/templates 目录下

* 使用 [cocos 命令](http://www.cocos2d-x.org/wiki/Cocos2d-console) 创建项目
```bash
cocos new -l js MyGame -t smart
```

* 将项目运行起来
```bash
cd MyGame
cocos run -p web
```

* 如果需要跑测试项目，可以创建测试项目
```bash
cocos new -l js SmartTestCase -t smart_test
```
