var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => stdin_default
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_vue2 = require("vue");
var import_shared = require("./shared");
var import_utils = require("../utils");
var import_use = require("@vant/use");
var import_use_expose = require("../composables/use-expose");
var import_use_lock_scroll = require("../composables/use-lock-scroll");
var import_use_lazy_render = require("../composables/use-lazy-render");
var import_on_popup_reopen = require("../composables/on-popup-reopen");
var import_use_global_z_index = require("../composables/use-global-z-index");
var import_icon = require("../icon");
var import_overlay = require("../overlay");
const popupProps = (0, import_utils.extend)({}, import_shared.popupSharedProps, {
  round: Boolean,
  position: (0, import_utils.makeStringProp)("center"),
  closeIcon: (0, import_utils.makeStringProp)("cross"),
  closeable: Boolean,
  transition: String,
  iconPrefix: String,
  closeOnPopstate: Boolean,
  closeIconPosition: (0, import_utils.makeStringProp)("top-right"),
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: Boolean
});
const [name, bem] = (0, import_utils.createNamespace)("popup");
var stdin_default = (0, import_vue2.defineComponent)({
  name,
  inheritAttrs: false,
  props: popupProps,
  emits: ["open", "close", "opened", "closed", "keydown", "update:show", "click-overlay", "click-close-icon"],
  setup(props, {
    emit,
    attrs,
    slots
  }) {
    let opened;
    let shouldReopen;
    const zIndex = (0, import_vue2.ref)();
    const popupRef = (0, import_vue2.ref)();
    const lazyRender = (0, import_use_lazy_render.useLazyRender)(() => props.show || !props.lazyRender);
    const style = (0, import_vue2.computed)(() => {
      const style2 = {
        zIndex: zIndex.value
      };
      if ((0, import_utils.isDef)(props.duration)) {
        const key = props.position === "center" ? "animationDuration" : "transitionDuration";
        style2[key] = `${props.duration}s`;
      }
      return style2;
    });
    const open = () => {
      if (!opened) {
        opened = true;
        zIndex.value = props.zIndex !== void 0 ? +props.zIndex : (0, import_use_global_z_index.useGlobalZIndex)();
        emit("open");
      }
    };
    const close = () => {
      if (opened) {
        (0, import_utils.callInterceptor)(props.beforeClose, {
          done() {
            opened = false;
            emit("close");
            emit("update:show", false);
          }
        });
      }
    };
    const onClickOverlay = (event) => {
      emit("click-overlay", event);
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const renderOverlay = () => {
      if (props.overlay) {
        return (0, import_vue.createVNode)(import_overlay.Overlay, {
          "show": props.show,
          "class": props.overlayClass,
          "zIndex": zIndex.value,
          "duration": props.duration,
          "customStyle": props.overlayStyle,
          "role": props.closeOnClickOverlay ? "button" : void 0,
          "tabindex": props.closeOnClickOverlay ? 0 : void 0,
          "onClick": onClickOverlay
        }, {
          default: slots["overlay-content"]
        });
      }
    };
    const onClickCloseIcon = (event) => {
      emit("click-close-icon", event);
      close();
    };
    const renderCloseIcon = () => {
      if (props.closeable) {
        return (0, import_vue.createVNode)(import_icon.Icon, {
          "role": "button",
          "tabindex": 0,
          "name": props.closeIcon,
          "class": [bem("close-icon", props.closeIconPosition), import_utils.HAPTICS_FEEDBACK],
          "classPrefix": props.iconPrefix,
          "onClick": onClickCloseIcon
        }, null);
      }
    };
    const onOpened = () => emit("opened");
    const onClosed = () => emit("closed");
    const onKeydown = (event) => emit("keydown", event);
    const renderPopup = lazyRender(() => {
      var _a;
      const {
        round,
        position,
        safeAreaInsetTop,
        safeAreaInsetBottom
      } = props;
      return (0, import_vue.withDirectives)((0, import_vue.createVNode)("div", (0, import_vue.mergeProps)({
        "ref": popupRef,
        "style": style.value,
        "role": "dialog",
        "tabindex": 0,
        "class": [bem({
          round,
          [position]: position
        }), {
          "van-safe-area-top": safeAreaInsetTop,
          "van-safe-area-bottom": safeAreaInsetBottom
        }],
        "onKeydown": onKeydown
      }, attrs), [(_a = slots.default) == null ? void 0 : _a.call(slots), renderCloseIcon()]), [[import_vue.vShow, props.show]]);
    });
    const renderTransition = () => {
      const {
        position,
        transition,
        transitionAppear
      } = props;
      const name2 = position === "center" ? "van-fade" : `van-popup-slide-${position}`;
      return (0, import_vue.createVNode)(import_vue2.Transition, {
        "name": transition || name2,
        "appear": transitionAppear,
        "onAfterEnter": onOpened,
        "onAfterLeave": onClosed
      }, {
        default: renderPopup
      });
    };
    (0, import_vue2.watch)(() => props.show, (show) => {
      if (show && !opened) {
        open();
        if (attrs.tabindex === 0) {
          (0, import_vue2.nextTick)(() => {
            var _a;
            (_a = popupRef.value) == null ? void 0 : _a.focus();
          });
        }
      }
      if (!show && opened) {
        opened = false;
        emit("close");
      }
    });
    (0, import_use_expose.useExpose)({
      popupRef
    });
    (0, import_use_lock_scroll.useLockScroll)(popupRef, () => props.show && props.lockScroll);
    (0, import_use.useEventListener)("popstate", () => {
      if (props.closeOnPopstate) {
        close();
        shouldReopen = false;
      }
    });
    (0, import_vue2.onMounted)(() => {
      if (props.show) {
        open();
      }
    });
    (0, import_vue2.onActivated)(() => {
      if (shouldReopen) {
        emit("update:show", true);
        shouldReopen = false;
      }
    });
    (0, import_vue2.onDeactivated)(() => {
      if (props.show && props.teleport) {
        close();
        shouldReopen = true;
      }
    });
    (0, import_vue2.provide)(import_on_popup_reopen.POPUP_TOGGLE_KEY, () => props.show);
    return () => {
      if (props.teleport) {
        return (0, import_vue.createVNode)(import_vue2.Teleport, {
          "to": props.teleport
        }, {
          default: () => [renderOverlay(), renderTransition()]
        });
      }
      return (0, import_vue.createVNode)(import_vue.Fragment, null, [renderOverlay(), renderTransition()]);
    };
  }
});
