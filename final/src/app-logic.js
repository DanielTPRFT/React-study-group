export const productsReducer = (products, action) => {
  switch (action.type) {
    case "DELETE_PRODUCT": {
      let newProducts = [
        ...products.slice(0, action.index),
        ...products.slice(action.index + 1, products.length),
      ];
      if (action.index > newProducts.length - 1) action.setIndex(0);
      return newProducts;
    }

    case "CHANGE_NAME": {
      const updatedProducts = structuredClone(products);
      updatedProducts[action.index] = {
        ...updatedProducts[action.index],
        title: action.value,
      };
      return updatedProducts;
    }

    case "NEXT_PRODUCT": {
      action.index < products.length - 1
        ? action.setIndex(action.index + 1)
        : action.setIndex(0);
      return products;
    }

    case "PREV_PRODUCT": {
      action.index > 0
        ? action.setIndex(action.index - 1)
        : action.setIndex(products.length - 1);
      return products;
    }

    default: {
      console.log(`I guess I have no more actions`);
    }
  }
};
