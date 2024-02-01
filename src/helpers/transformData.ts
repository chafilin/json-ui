import {
  Children,
  Components,
  Root,
  TransformedTree,
  TransformedView,
} from "../types";

export function transformData(root: Root): TransformedTree {
  const components: Components = {};

  function transformView(view: Children, key: string): TransformedView {
    const { children, ...rest } = view;
    const id = key + "_" + rest.type;
    components[id] = { ...rest };
    const innerTree: TransformedView = {
      id: id,
      type: view.type,
      children: [],
    };

    if (children) {
      innerTree.children = children.map((child, index) =>
        transformView(child, id + "_" + index)
      );
    }

    return innerTree;
  }

  const rootId = root.views.map((view, index) =>
    transformView(view, "root_" + index)
  );

  return {
    tree: rootId,
    components,
  };
}
