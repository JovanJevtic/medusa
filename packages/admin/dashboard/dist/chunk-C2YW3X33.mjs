import {
  PRODUCT_DETAIL_FIELDS
} from "./chunk-R6QFVP7W.mjs";
import {
  productsQueryKeys
} from "./chunk-5ATMPN6G.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import {
  sdk
} from "./chunk-7IZZLHXL.mjs";

// src/routes/products/product-detail/loader.ts
var productDetailQuery = (id) => ({
  queryKey: productsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.product.retrieve(id, { fields: PRODUCT_DETAIL_FIELDS })
});
var productLoader = async ({ params }) => {
  const id = params.id;
  const query = productDetailQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};

export {
  productLoader
};
