import { createVNode as _createVNode } from "vue";
import { defineComponent } from "vue";
import { addUnit, makeArrayProp, makeStringProp, makeNumericProp, createNamespace } from "../utils/index.mjs";
import { Icon } from "../icon/index.mjs";
import { Sidebar } from "../sidebar/index.mjs";
import { SidebarItem } from "../sidebar-item/index.mjs";
const [name, bem] = createNamespace("tree-select");
const treeSelectProps = {
  max: makeNumericProp(Infinity),
  items: makeArrayProp(),
  height: makeNumericProp(300),
  selectedIcon: makeStringProp("success"),
  mainActiveIndex: makeNumericProp(0),
  activeId: {
    type: [Number, String, Array],
    default: 0
  }
};
var stdin_default = defineComponent({
  name,
  props: treeSelectProps,
  emits: ["click-nav", "click-item", "update:activeId", "update:mainActiveIndex"],
  setup(props, {
    emit,
    slots
  }) {
    const isActiveItem = (id) => Array.isArray(props.activeId) ? props.activeId.includes(id) : props.activeId === id;
    const renderSubItem = (item) => {
      const onClick = () => {
        if (item.disabled) {
          return;
        }
        let activeId;
        if (Array.isArray(props.activeId)) {
          activeId = props.activeId.slice();
          const index = activeId.indexOf(item.id);
          if (index !== -1) {
            activeId.splice(index, 1);
          } else if (activeId.length < props.max) {
            activeId.push(item.id);
          }
        } else {
          activeId = item.id;
        }
        emit("update:activeId", activeId);
        emit("click-item", item);
      };
      return _createVNode("div", {
        "key": item.id,
        "class": ["van-ellipsis", bem("item", {
          active: isActiveItem(item.id),
          disabled: item.disabled
        })],
        "onClick": onClick
      }, [item.text, isActiveItem(item.id) && _createVNode(Icon, {
        "name": props.selectedIcon,
        "class": bem("selected")
      }, null)]);
    };
    const onSidebarChange = (index) => {
      emit("update:mainActiveIndex", index);
    };
    const onClickSidebarItem = (index) => emit("click-nav", index);
    const renderSidebar = () => {
      const Items = props.items.map((item) => _createVNode(SidebarItem, {
        "dot": item.dot,
        "title": item.text,
        "badge": item.badge,
        "class": [bem("nav-item"), item.className],
        "disabled": item.disabled,
        "onClick": onClickSidebarItem
      }, null));
      return _createVNode(Sidebar, {
        "class": bem("nav"),
        "modelValue": props.mainActiveIndex,
        "onChange": onSidebarChange
      }, {
        default: () => [Items]
      });
    };
    const renderContent = () => {
      if (slots.content) {
        return slots.content();
      }
      const selected = props.items[+props.mainActiveIndex] || {};
      if (selected.children) {
        return selected.children.map(renderSubItem);
      }
    };
    return () => _createVNode("div", {
      "class": bem(),
      "style": {
        height: addUnit(props.height)
      }
    }, [renderSidebar(), _createVNode("div", {
      "class": bem("content")
    }, [renderContent()])]);
  }
});
export {
  stdin_default as default
};
