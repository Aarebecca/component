import { IGroup } from '@antv/g-base/lib/interfaces';
import { AnimateCfg, Point, ShapeAttrs } from '@antv/g-base/lib/types';
export type LocationType = 'point' | 'Region' | 'points' | 'circle' | 'none';

export { Point };

export interface OffsetPoint {
  offsetX: number;
  offsetY: number;
}

export interface Region {
  /**
   * 起始点
   * @type {Point}
   */
  start: Point;
  /**
   * 结束点
   * @type {Point}
   */
  end: Point;
}

export interface Range {
  /**
   * 开始值
   * @type {number}
   */
  min: number;
  /**
   * 结束值
   * @type {number}
   */
  max: number;
}

// 等底层 Util 调整好，直接用 Util 的定义
export interface BBox {
  /**
   * 包围盒 x
   * @type {number}
   */
  x: number;
  /**
   * 包围盒 y
   * @type {number}
   */
  y: number;
  /**
   * 包围盒宽度
   * @type {number}
   */
  height: number;
  /**
   * 包围盒高度
   * @type {number}
   */
  width: number;
  /**
   * 包围盒最小 x
   * @type {number}
   */
  minX?: number;
  /**
   * 包围盒最大 x
   * @type {number}
   */
  maxX?: number;
  /**
   * 包围盒最小 y
   * @type {number}
   */
  minY?: number;
  /**
   * 包围盒最大 y
   * @type {number}
   */
  maxY?: number;
}

/**
 * @interface
 * 列表选项接口
 */
export interface ListItem {
  /**
   * 唯一值，用于动画或者查找
   * @type {string}
   */
  id?: string;
  /**
   * 名称
   * @type {string}
   */
  name: string;
  /**
   * 值
   * @type {any}
   */
  value: any;
  /**
   * 图形标记
   * @type {object|string}
   */
  marker?: object | string;
  [key: string]: any;
}

/**
 * @interface
 * 栅格项的定义
 */
export interface GridItem {
  /**
   * 唯一值，用于动画或者查找
   * @type {string}
   */
  id?: string;
  /**
   * 栅格线的点集合
   * @type {Point[]}
   */
  points: Point[];
  [key: string]: any;
}

/**
 * @interface
 * 坐标轴线定义
 */
export interface AxisLineCfg {
  /**
   * 坐标轴线的配置项
   * @type {ShapeAttrs}
   */
  style: ShapeAttrs;
}

/**
 * @interface
 * 坐标轴刻度定义
 */
export interface AxisTickLineCfg {
  /**
   * 坐标轴刻度线的配置项
   * @type {ShapeAttrs}
   */
  style: ShapeAttrs;
  /**
   * 是否同 tick 对齐
   * @type {boolean}
   */
  alignTick: boolean; // 是否同 tick 对齐
  /**
   * 长度
   * @type {number}
   */
  length: number;
}

/**
 * @interface
 * 坐标轴文本定义
 */
export interface AxisLabelCfg {
  /**
   * 坐标轴文本的样式
   * @type {ShapeAttrs}
   */
  style: ShapeAttrs;
  /**
   * 是否自动旋转，默认 true
   * @type {boolean}
   */
  autoRotate: boolean;
  /**
   * 是否自动隐藏，默认 true
   * @type {boolean}
   */
  autoHide: boolean;
}

/**
 * @interface
 * 坐标轴子刻度定义
 */
export interface AxisSubTickLineCfg {
  /**
   * 坐标轴刻度线的配置项
   * @type {ShapeAttrs}
   */
  style: ShapeAttrs;
  /**
   * 子刻度个数
   * @type {number}
   */
  count: number;
  /**
   * 子刻度线长度
   * @type {number}
   */
  length: number;
}

/**
 * @interface
 * 坐标轴标题定义
 */
export interface AxisTitleCfg {
  /**
   * 标题距离坐标轴的距离
   * @type {number}
   */
  offset: number;
  /**
   * 标题文本配置项
   * @type {ShapeAttrs}
   */
  style: ShapeAttrs;
  /**
   * 是否自动旋转
   * @type {boolean}
   */
  autoRotate: boolean;
}

export interface BaseCfg {
  [key: string]: any;
}

export interface ComponentCfg extends BaseCfg {
  /**
   * 唯一标定组件的 id
   * @type {string}
   */
  id?: string;
  /**
   * 定位的方式
   * @type {string}
   */
  LocationType?: string;
  /**
   * 偏移位置 x
   * @type {number}
   */
  offsetX?: number;
  /**
   * 偏移位置 y
   * @type {number}
   */
  offsetY?: number;
  /**
   * 组件名称， axis, legend, tooltip
   * @type {string}
   */
  name?: string;
  /**
   * 组件的类型，同 name 配合使用可以确定具体组件的类型，例如：
   *  name: 'axis',
   *  type: 'line'
   */
  type?: string;
  /**
   * 是否允许动画，不同组件允许动画的内容不同
   * @type {boolean}
   */
  animate?: boolean;
  /**
   * 动画的配置项
   * @type {AnimateCfg}
   */
  animateCfg?: AnimateCfg;
  /**
   * 事件对象，可以在配置项中传入事件
   * @example
   * events: {
   *   itemclick: ev => {
   *
   *   }
   * }
   * // 等效于
   * component.on('itemclick', ev => {
   *
   * });
   * @type {object}
   */
  events?: object;
  /**
   * @protected
   * 配置项生效时的默认值，一些配置项是对象时，防止将一些内置的配置项清空，减少判空判断
   * @example
   * new Axis({
   *   tickLine: {
   *     length: 10 // 此时没有设置 style，内部调用 tickLine.style 时会出问题
   *   }
   * })
   * @type {object}
   */
  defaultCfg?: object;
}

export interface GroupComponentCfg extends ComponentCfg {
  /**
   * 组件的容器
   * @type {IGroup}
   */
  container: IGroup;
  /**
   * 当前组件对应的 group，一个 container 中可能会有多个组件，但是一个组件都有一个自己的 Group
   * @type {IGroup}
   */
  group?: IGroup;
  /**
   * 组件是否可以被拾取
   * @type {boolean}
   */
  capture?: boolean;
}

export interface HtmlComponentCfg extends ComponentCfg {
  /**
   * 组件的 DOM 容器
   * @type {HTMLElement|string}
   */
  container?: HTMLElement | string;
  parent?: HTMLElement | string;
}

export interface AxisBaseCfg extends GroupComponentCfg {
  /**
   * 坐标轴刻度的集合
   * @type {ListItem[]}
   */
  ticks: ListItem[];
  /**
   * 坐标轴线的配置项
   * @type {AxisLineCfg}
   */
  line?: AxisLineCfg;
  /**
   * 坐标轴刻度线线的配置项
   * @type {AxisTickLineCfg}
   */
  tickLine?: AxisTickLineCfg;
  /**
   * 坐标轴子刻度线的配置项
   * @type {AxisSubTickLineCfg}
   */
  subTickLine?: AxisSubTickLineCfg;
  /**
   * 标题的配置项
   * @type {AxisTitleCfg}
   */
  title?: AxisTitleCfg;
  /**
   * 文本标签的配置项
   */
  label?: AxisLabelCfg;
  /**
   * 垂直于坐标轴方向的因子，决定文本、title、tickLine 在坐标轴的哪一侧
   */
  verticalFactor?: number;
}

export interface LineAxisCfg extends AxisBaseCfg {
  /**
   * 坐标轴的起始点
   * @type {Point}
   */
  start: Point;
  /**
   * 坐标轴的结束点
   * @type {Point}
   */
  end: Point;
}

export interface CircleAxisCfg extends AxisBaseCfg {
  /**
   * 中心点, x, y
   * @type {Point}
   */
  center: Point;
  /**
   * 半径
   * @type {number}
   */
  radius: number;
  /**
   * 开始弧度
   * @type {number}
   */
  startAngle?: number;
  /**
   * 结束弧度
   * @type {number}
   */
  endAngle?: number;
}

export interface GridLineCfg {
  /**
   * 栅格线的类型
   * @type {string}
   */
  type?: string;
  /**
   * 栅格线的配置项
   * @type {ShapeAttrs}
   */
  style?: ShapeAttrs;
}

export interface GridBaseCfg extends GroupComponentCfg {
  /**
   * 线的样式
   * @type {object}
   */
  line?: GridLineCfg;
  /**
   * 两个栅格线间的填充色，必须是一个数组
   * @type {string|string[]}
   */
  alternateColor?: string | string[];
  /**
   * 绘制 grid 需要的点的集合
   * @type {GridItem[]}
   */
  items: GridItem[];
  /**
   * 栅格线是否封闭
   * @type {boolean}
   */
  closed?: boolean;
}

export interface CircleGridCfg extends GridBaseCfg {
  /**
   * 中心点
   * @type {Point}
   */
  center: Point;
}

export interface LegendBaseCfg extends GroupComponentCfg {
  /**
   * 布局方式： horizontal，vertical
   * @type {String}
   */
  layout?: string;
  /**
   * 位置 x
   * @type {number}
   */
  x?: number;
  /**
   * 位置 y
   * @type {number}
   */
  y?: number;
  /**
   * 标题
   * @type {LegendTitleCfg}
   */
  title?: LegendTitleCfg;
  /**
   * 背景框配置项
   * @type {LegendBackgroundCfg}
   */
  backgroud?: LegendBackgroundCfg;
}
export interface CategoryLegendCfg extends LegendBaseCfg {
  /**
   * 图例项水平方向的间距
   * @type {number}
   */
  itemSpacing?: number;
  /**
   * 图例项的宽度, 默认为 null，自动计算
   * @type {number}
   */
  itemWidth?: number;
  /**
   * 图例的高度，默认为 null
   * @type {[type]}
   */
  itemHeight?: number;
  /**
   * 图例项 name 文本的配置
   * @type {LegendItemNameCfg}
   */
  itemName?: LegendItemNameCfg;
  /**
   * 图例项 value 附加值的配置项
   * @type {LegendItemValueCfg}
   */
  itemValue?: LegendItemValueCfg;
  /**
   * 最大宽度
   * @type {number}
   */
  maxWidth?: number;
  /**
   * 最大高度
   * @type {number}
   */
  maxHeight?: number;
  /**
   * 图例项的 marker 图标的配置
   * @type {LegendMarkerCfg}
   */
  marker?: LegendMarkerCfg;
  /**
   * 图例项集合
   * @type {ListItem[]}
   */
  items: ListItem[];
}

export interface ContinueLegendCfg extends LegendBaseCfg {
  /**
   * 选择范围的最小值
   * @type {number}
   */
  min: number;
  /**
   * 选择范围的最大值
   * @type {number}
   */
  max: number;
  /**
   * 选择的值
   * @type {number[]}
   */
  value: number[];
  /**
   * 图例的颜色，可以写多个颜色
   * @type {number[]}
   */
  colors: number[];
  /**
   * 选择范围的色块配置项
   * @type {ContinueLegendTrackCfg}
   */
  track: ContinueLegendTrackCfg;
  /**
   * 图例滑轨（背景）的配置项
   * @type {ContinueLegendRailCfg}
   */
  rail: ContinueLegendRailCfg;
  /**
   * 文本的配置项
   * @type {ContinueLegendLabelCfg}
   */
  label: ContinueLegendLabelCfg;
  /**
   * 滑块的配置项
   * @type {ContinueLegendHandlerCfg}
   */
  handler: ContinueLegendHandlerCfg;
  /**
   * 是否可以滑动
   * @type {boolean}
   */
  slidable: boolean;
}

export interface ContinueLegendTrackCfg {
  /**
   * 选定范围的样式
   * @type {ShapeAttrs}
   */
  style: ShapeAttrs;
}

export interface ContinueLegendHandlerCfg {
  /**
   * 滑块大小
   * @type {number}
   */
  size: number;
  /**
   * 滑块样式
   * @type {ShapeAttrs}
   */
  style: ShapeAttrs;
}

export interface ContinueLegendRailCfg {
  /**
   * rail 的类型，color, size
   * @type {string}
   */
  type: string;
  /**
   * 滑轨的宽度
   * @type {number}
   */
  size: number;
  /**
   * 滑轨的默认长度，，当限制了 maxWidth,maxHeight 时，不会使用这个属性会自动计算长度
   * @type {number}
   */
  defaultLength: number;
  /**
   * 滑轨的样式
   * @type {ShapeAttrs}
   */
  style: ShapeAttrs;
}

export interface ContinueLegendLabelCfg {
  /**
   * 文本同滑轨的对齐方式，有五种类型
   *  - rail ： 同滑轨对齐，在滑轨的两端
   *  - top, bottom: 图例水平布局时有效
   *  - left, right: 图例垂直布局时有效
   * @type {string}
   */
  align: string;
  /**
   * 文本同滑轨的距离
   * @type {number}
   */
  spacing: number;
  /**
   * 文本样式
   * @type {ShapeAttrs}
   */
  style: ShapeAttrs;
}

export interface LegendTitleCfg {
  /**
   * 标题同图例项的间距
   * @type {number}
   */
  spacing: number;
  /**
   * 文本配置项
   * @type {ShapeAttrs}
   */
  style: ShapeAttrs;
}

export interface LegendBackgroundCfg {
  /**
   * @type {number|number[]}
   * 背景的留白
   */
  padding: number | number[];
  /**
   * @type {ShapeAttrs}
   * 背景配置项
   */
  style: ShapeAttrs;
}

export interface LegendItemNameCfg {
  /**
   * 图例项 name 同后面 value 的间距
   * @type {number}
   */
  spacing: number;
  /**
   * 格式化文本函数
   * @type {formatterCallback}
   */
  formatter?: formatterCallback;
  /**
   * 文本配置项
   * @type {ShapeAttrs}
   */
  style: ShapeAttrs;
}

type formatterCallback = (text: string, item: ListItem, index: number) => any;

export interface LegendItemValueCfg {
  /**
   * 是否右对齐，默认为 false，仅当设置图例项宽度时生效
   * @type {boolean}
   */
  alignRight: boolean;
  /**
   * 格式化文本函数
   * @type {formatterCallback}
   */
  formatter?: formatterCallback;
  /**
   * 图例项附加值的配置
   * @type {ShapeAttrs}
   */
  style: ShapeAttrs;
}

export interface LegendMarkerCfg {
  /**
   * 图例项 marker 同后面 name 的间距
   * @type {number}
   */
  spacing: number;
  /**
   * 图例项 marker 的配置项
   * @type {ShapeAttrs}
   */
  style: ShapeAttrs;
}

export interface TooltipCfg extends HtmlComponentCfg {
  /**
   * 位置 x
   * @type {number}
   */
  x?: number;
  /**
   * 位置 y
   * @type {number}
   */
  y?: number;
  /**
   * 列表项集合
   * @type {ListItem[]}
   */
  items: ListItem[];
  /**
   * 容器的模板
   * @type {string}
   */
  containerTpl?: string;
  /**
   * 列表项的模板
   * @type {[type]}
   */
  itemTpl?: string;
  /**
   * 根据 x 定位的 crosshair 的模板
   * @type {string}
   */
  xCrosshairTpl?: string;
  /**
   * 根据 y 定位的 crosshair 的模板
   * @type {[type]}
   */
  yCrosshairTpl?: string;
  /**
   * tooltip 限制的区域
   * @type {Region}
   */
  region?: Region;
  /**
   * crosshairs 限制的区域
   * @type {Region}
   */
  crosshairsRegion?: Region;
  /**
   * crosshairs 的类型， x,y,xy
   * @type {string}
   */
  crosshairs?: string;
  /**
   * 是否跟随鼠标移动，会影响 x，y的定位
   * @type {boolean}
   */
  follow?: boolean;
  /**
   * 偏移量，同 position 相关
   * @type {number}
   */
  offset?: number;
  /**
   * 位置，top, bottom, left, right
   * @type {string}
   */
  position?: string;
  /**
   * 传入各个 dom 的样式
   * @type {object}
   */
  domStyles?: object;
  /**
   * 默认的各个 dom 的样式
   * @type {object}
   */
  defaultStyles?: object;
}

export interface LocationCfg {
  [key: string]: any;
}

export interface PointLocationCfg extends LocationCfg {
  /**
   * 位置 x
   * @type {number}
   */
  x?: number;
  /**
   * 位置 y
   * @type {number}
   */
  y?: number;
}

export interface RegionLocationCfg extends LocationCfg {
  /**
   * 起始点
   * @type {Point}
   */
  start?: Point;
  /**
   * 结束点
   * @type {Point}
   */
  end?: Point;
}

export interface PointsLocationCfg extends LocationCfg {
  /**
   * 定位点的集合
   * @type {Point[]}
   */
  points?: Point[];
}

export interface CircleLocationCfg extends LocationCfg {
  /**
   * 圆心
   * @type {Point}
   */
  center?: Point;
  /**
   * 半径
   * @type {number}
   */
  radius?: number;
  /**
   * 起始角度
   * @type {number}
   */
  startAngle?: number;
  /**
   * 结束角度
   * @type {number}
   */
  endAngle?: number;
}

export interface TextAnnotationCfg extends GroupComponentCfg {
  /**
   * 文本标注位置 x
   * @type {number}
   */
  x: number;
  /**
   * 文本标注位置 y
   * @type {number}
   */
  y: number;
  /**
   * 文本标注内容
   * @type {number}
   */
  content: string;
  /**
   * 文本标注样式
   * @type {ShapeAttrs}
   */
  style: ShapeAttrs;
}
