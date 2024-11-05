import {
  useDeleteProductTypeAction
} from "./chunk-B2NSA7ZO.mjs";
import {
  useProductTableColumns
} from "./chunk-VWNSX5WA.mjs";
import "./chunk-FTXJRXMD.mjs";
import "./chunk-TOMHEGT5.mjs";
import "./chunk-ADOCJB6L.mjs";
import {
  useProductTableQuery
} from "./chunk-4M3ZY7KA.mjs";
import {
  useProductTableFilters
} from "./chunk-OHJT6B6O.mjs";
import "./chunk-KUBWCAI2.mjs";
import "./chunk-XGGPH4BK.mjs";
import "./chunk-5SVNVK6B.mjs";
import "./chunk-H3DXELZS.mjs";
import "./chunk-4KU74J5E.mjs";
import "./chunk-QVTXMOQX.mjs";
import "./chunk-HMTMGLW3.mjs";
import {
  productTypesQueryKeys,
  useProductType
} from "./chunk-7KE7WNU3.mjs";
import "./chunk-7YY7DHZF.mjs";
import "./chunk-XDQX3OZE.mjs";
import "./chunk-LNH2UHVB.mjs";
import "./chunk-WWCESQHD.mjs";
import "./chunk-RJHL3D4F.mjs";
import "./chunk-PXVE3PHB.mjs";
import "./chunk-SS4GCIN5.mjs";
import "./chunk-OJ3RSAFU.mjs";
import "./chunk-2INWSWD6.mjs";
import "./chunk-PQODFA6R.mjs";
import "./chunk-O2XBKACE.mjs";
import "./chunk-WGJWLIDQ.mjs";
import "./chunk-6XBQUUN5.mjs";
import "./chunk-O45FMXPT.mjs";
import "./chunk-FC5HFRKK.mjs";
import "./chunk-RR5JHWYA.mjs";
import "./chunk-ODXK5I2N.mjs";
import "./chunk-DKH5JRLO.mjs";
import {
  SingleColumnPage
} from "./chunk-UR2E444G.mjs";
import "./chunk-3IW4HYUP.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-MTODNWYP.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-WX2SMNCD.mjs";
import {
  SingleColumnPageSkeleton
} from "./chunk-LPEUYMRK.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-VDQHICXW.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-M7E7X35P.mjs";
import "./chunk-AUHRT775.mjs";
import "./chunk-RVOEOEYF.mjs";
import "./chunk-AI7M5TGP.mjs";
import "./chunk-5JDGO6KD.mjs";
import {
  useDashboardExtension
} from "./chunk-BP3QTLUN.mjs";
import "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import "./chunk-46PZ4VL5.mjs";
import {
  useProducts
} from "./chunk-5ATMPN6G.mjs";
import "./chunk-CNRGU52W.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-7IZZLHXL.mjs";
import "./chunk-S47CVTVK.mjs";

// src/routes/product-types/product-type-detail/loader.ts
var productTypeDetailQuery = (id) => ({
  queryKey: productTypesQueryKeys.detail(id),
  queryFn: async () => sdk.admin.productType.retrieve(id)
});
var productTypeLoader = async ({ params }) => {
  const id = params.id;
  const query = productTypeDetailQuery(id);
  return queryClient.getQueryData(
    query.queryKey
  ) ?? await queryClient.fetchQuery(query);
};

// src/routes/product-types/product-type-detail/product-type-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/product-types/product-type-detail/components/product-type-general-section/product-type-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Container, Heading } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var ProductTypeGeneralSection = ({
  productType
}) => {
  const { t } = useTranslation();
  const handleDelete = useDeleteProductTypeAction(productType.id);
  return /* @__PURE__ */ jsxs(Container, { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx(Heading, { children: productType.value }),
    /* @__PURE__ */ jsx(
      ActionMenu,
      {
        groups: [
          {
            actions: [
              {
                label: t("actions.edit"),
                icon: /* @__PURE__ */ jsx(PencilSquare, {}),
                to: "edit"
              }
            ]
          },
          {
            actions: [
              {
                label: t("actions.delete"),
                icon: /* @__PURE__ */ jsx(Trash, {}),
                onClick: handleDelete
              }
            ]
          }
        ]
      }
    )
  ] });
};

// src/routes/product-types/product-type-detail/components/product-type-product-section/product-type-product-section.tsx
import { Container as Container2, Heading as Heading2 } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var ProductTypeProductSection = ({
  productType
}) => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useProductTableQuery({
    pageSize: PAGE_SIZE
  });
  const { products, count, isPending, isError, error } = useProducts({
    ...searchParams,
    type_id: [productType.id]
  });
  const filters = useProductTableFilters(["product_types"]);
  const columns = useProductTableColumns();
  const { table } = useDataTable({
    columns,
    data: products,
    count: products?.length || 0,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsx2("div", { className: "px-6 py-4", children: /* @__PURE__ */ jsx2(Heading2, { level: "h2", children: t("products.domain") }) }),
    /* @__PURE__ */ jsx2(
      DataTable,
      {
        table,
        filters,
        isLoading: isPending,
        columns,
        count,
        pageSize: PAGE_SIZE,
        navigateTo: ({ original }) => `/products/${original.id}`,
        orderBy: [
          { key: "title", label: t("fields.title") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ],
        queryObject: raw,
        search: true,
        pagination: true
      }
    )
  ] });
};

// src/routes/product-types/product-type-detail/product-type-detail.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var ProductTypeDetail = () => {
  const { id } = useParams();
  const initialData = useLoaderData();
  const { product_type, isPending, isError, error } = useProductType(
    id,
    void 0,
    {
      initialData
    }
  );
  const { getWidgets } = useDashboardExtension();
  if (isPending || !product_type) {
    return /* @__PURE__ */ jsx3(SingleColumnPageSkeleton, { sections: 2, showJSON: true, showMetadata: true });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3(
    SingleColumnPage,
    {
      widgets: {
        after: getWidgets("product_type.details.after"),
        before: getWidgets("product_type.details.before")
      },
      showJSON: true,
      showMetadata: true,
      data: product_type,
      children: [
        /* @__PURE__ */ jsx3(ProductTypeGeneralSection, { productType: product_type }),
        /* @__PURE__ */ jsx3(ProductTypeProductSection, { productType: product_type })
      ]
    }
  );
};
export {
  ProductTypeDetail as Component,
  productTypeLoader as loader
};
