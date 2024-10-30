// import ContextMenu from './ContextMenu';
// import ServersPlugin from './plugins/ServersPlugin';
import hotkeys from 'hotkeys-js';
class Editor {
  // public canvas: fabric.Canvas | null = null;
  // [key: string]: any;
  // private pluginMap: {
  //   [propName: string]: IPluginTempl;
  // } = {};
  // // 自定义事件
  // private customEvents: string[] = [];
  // // 自定义API
  // private customApis: string[] = [];
  // // 生命周期函数名
  // private hooks: IEditorHooksType[] = [
  //   'hookImportBefore',
  //   'hookImportAfter',
  //   'hookSaveBefore',
  //   'hookSaveAfter',
  // ];
  // public hooksEntity: {
  //   [propName: string]: AsyncSeriesHook<any, any>;
  // } = {};

  // init(canvas: fabric.Canvas) {
  //   this.canvas = canvas;
  //   this._initContextMenu();
  //   this._bindContextMenu();
  //   this._initActionHooks();
  //   this._initServersPlugin();
  // }

  // // 引入组件
  // use(plugin: IPluginClass, options?: IPluginOption) {
  //   if (this._checkPlugin(plugin) && this.canvas) {
  //     this._saveCustomAttr(plugin);
  //     const pluginRunTime = new plugin(this.canvas, this, options || {}) as IPluginClass;
  //     // 添加插件名称
  //     pluginRunTime.pluginName = plugin.pluginName;
  //     this.pluginMap[plugin.pluginName] = pluginRunTime;
  //     this._bindingHooks(pluginRunTime);
  //     this._bindingHotkeys(pluginRunTime);
  //     this._bindingApis(pluginRunTime);
  //   }
  // }

  // // 保存组件自定义事件与API
  // private _saveCustomAttr(plugin: IPluginClass) {
  //   const { events = [], apis = [] } = plugin;
  //   this.customApis = this.customApis.concat(apis);
  //   this.customEvents = this.customEvents.concat(events);
  // }

  // // 检查组件
  // private _checkPlugin(plugin: IPluginClass) {
  //   let flag = true;
  //   const { pluginName, events = [], apis = [] } = plugin;
  //   //名称检查
  //   if (this.pluginMap[pluginName]) {
  //     // throw new Error(pluginName + '插件重复初始化');
  //     flag = false;
  //   }
  //   events.forEach((eventName: string) => {
  //     if (this.customEvents.find((info) => info === eventName)) {
  //       // throw new Error(pluginName + '插件中' + eventName + '重复');
  //       flag = false;
  //     }
  //   });

  //   apis.forEach((apiName: string) => {
  //     if (this.customApis.find((info) => info === apiName)) {
  //       // throw new Error(pluginName + '插件中' + apiName + '重复');
  //       flag = false;
  //     }
  //   });
  //   return flag;
  // }

  // // 绑定hooks方法
  // private _bindingHooks(plugin: IPluginTempl) {
  //   this.hooks.forEach((hookName) => {
  //     const hook = plugin[hookName];
  //     if (hook) {
  //       this.hooksEntity[hookName].tapPromise(plugin.pluginName + hookName, function () {
  //         const result = hook.apply(plugin, [...arguments]);
  //         // hook 兼容非 Promise 返回值
  //         return result instanceof Promise ? result : Promise.resolve(result);
  //       });
  //     }
  //   });
  // }

  // // 代理API事件
  // private _bindingApis(pluginRunTime: IPluginTempl) {
  //   const { apis = [] } = (pluginRunTime.constructor as any) || {};
  //   apis.forEach((apiName: string) => {
  //     this[apiName] = function () {
  //       return pluginRunTime[apiName].apply(pluginRunTime, [...arguments]);
  //     };
  //   });
  // }

  // // 生命周期事件
  // _initActionHooks() {
  //   this.hooks.forEach((hookName) => {
  //     this.hooksEntity[hookName] = new AsyncSeriesHook(['data']);
  //   });
  // }

  // _initContextMenu() {
  //     this.contextMenu = new ContextMenu(this.canvas!.wrapperEl, []);
  //     this.contextMenu.install();
  // }

  // // 右键菜单
  // private _bindContextMenu() {
  //     this.canvas &&
  //         this.canvas.on('mouse:down', (opt) => {
  //             if (opt.button === 3) {
  //                 let menu: IPluginMenu[] = [];
  //                 Object.keys(this.pluginMap).forEach((pluginName) => {
  //                     const pluginRunTime = this.pluginMap[pluginName];
  //                     const pluginMenu = pluginRunTime.contextMenu && pluginRunTime.contextMenu();
  //                     if (pluginMenu) {
  //                         menu = menu.concat(pluginMenu);
  //                     }
  //                 });
  //                 this._renderMenu(opt, menu);
  //             }
  //         });
  // }

  // // 渲染右键菜单
  // private _renderMenu(opt: { e: MouseEvent }, menu: IPluginMenu[]) {
  //     if (menu.length !== 0 && this.contextMenu) {
  //         this.contextMenu.hideAll();
  //         this.contextMenu.setData(menu);
  //         this.contextMenu.show(opt.e.clientX, opt.e.clientY);
  //     }
  // }

  // // 绑定快捷键
  // private _bindingHotkeys(plugin: IPluginTempl) {
  //     plugin?.hotkeys?.forEach((keyName: string) => {
  //         // 支持 keyup
  //         hotkeys(keyName, { keyup: true }, (e) => {
  //             plugin.hotkeyEvent && plugin.hotkeyEvent(keyName, e);
  //         });
  //     });
  // }

  _initServersPlugin() {
    // this.use(ServersPlugin);
  }

  destory() {
    console.log("As");
    hotkeys('a', function (event: any) {
      //event.srcElement: input
      //event.target: input

      console.log('you pressed a!')
    });
    // this.canvas = null;
    // this.pluginMap = {};
    // this.customEvents = [];
    // this.customApis = [];
    // this.hooksEntity = {};
  }
}

export default Editor;
