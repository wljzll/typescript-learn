## rollup的配置
- 1、全局安装typescript：npm install typescript -g
- 2、生成ts配置文件：tsc --init 
- 3、安装依赖：npm i rollup typescript rollup-plugin-typescript2 @rollup/plugin-node-resolve rollup-plugin-serve -D
- 4、添加rollup配置文件：rollup.config.js
- 5、需要修改ts配置文件： "module": "ESNext", 修改为ESNext否则无法打包     