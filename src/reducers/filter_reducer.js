import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  var tempProducts = [];
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maximumPrice = action.payload.products.map((p) => p.price);
      maximumPrice = Math.max(...maximumPrice);
      return {
        ...state,
        allProducts: [...action.payload.products],
        filteredProducts: [...action.payload.products],
        filters: {
          ...state.filters,
          maxPrice: maximumPrice,
          price: maximumPrice,
        },
      };
    case SET_LISTVIEW:
      return { ...state, gridView: false };
    case SET_GRIDVIEW:
      return { ...state, gridView: true };
    case UPDATE_SORT:
      return { ...state, sort: action.payload.value };
    case SORT_PRODUCTS:
      const { sort, filteredProducts } = state;
      tempProducts = [...filteredProducts];
      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return { ...state, filteredProducts: tempProducts };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      //dynamic property access with []
      return { ...state, filters: { ...state.filters, [name]: value } };
    case FILTER_PRODUCTS:
      const { allProducts } = state;
      tempProducts = [...allProducts];
      const { text, category, company, colors, price, shipping } =
        state.filters;

      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.name.toLowerCase().includes(text);
          // return product.name.toLowerCase().startsWith(text);      for starting text
        });
      }

      if (category !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.category === category;
        });
      }
      if (company !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.company === company;
        });
      }
      if (colors !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.colors.includes(colors);
        });
      }

      tempProducts = tempProducts.filter((product) => {
        return product.price <= price;
      });

      if (shipping) {
        tempProducts = tempProducts.filter((product) => {
          return product.shipping;
        });
      }

      // console.log("filtering");
      return { ...state, filteredProducts: tempProducts };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          colors: "all",
          price: state.filters.maxPrice,
          shipping: false,
        },
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
