import {
  useDeleteProductTagAction
} from "./chunk-V3EKSQZN.mjs";
import {
  useProductTagTableColumns
} from "./chunk-U36KR32O.mjs";
import "./chunk-UUDR5EKI.mjs";
import "./chunk-FYN6YJ5C.mjs";
import "./chunk-I3VB6NM2.mjs";
import "./chunk-QIWEFQ5Y.mjs";
import "./chunk-DJPQV344.mjs";
import "./chunk-Y35YD3YU.mjs";
import "./chunk-LDVL34F3.mjs";
import "./chunk-NLR7MGM2.mjs";
import "./chunk-B4FQDBC3.mjs";
import "./chunk-LHJ6JQGA.mjs";
import "./chunk-IR5DHEKS.mjs";
import "./chunk-XFSJ7YIN.mjs";
import "./chunk-FSMQADBD.mjs";
import "./chunk-VWNSX5WA.mjs";
import "./chunk-FTXJRXMD.mjs";
import "./chunk-TOMHEGT5.mjs";
import "./chunk-6GZ2CHKW.mjs";
import "./chunk-GA34GXNI.mjs";
import "./chunk-OI7BBNYW.mjs";
import "./chunk-MWVM4TYO.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-ADOCJB6L.mjs";
import {
  useProductTagTableQuery
} from "./chunk-5R4UGQUP.mjs";
import "./chunk-I5HYE2RW.mjs";
import "./chunk-RIV7FKGN.mjs";
import "./chunk-TDK3JDOB.mjs";
import {
  useProductTagTableFilters
} from "./chunk-IRV425DP.mjs";
import "./chunk-CBSCX7RE.mjs";
import "./chunk-FHSC5X62.mjs";
import "./chunk-XR4GEMGR.mjs";
import "./chunk-LT4MVCA7.mjs";
import "./chunk-W7625H47.mjs";
import "./chunk-MOSRJHJ3.mjs";
import "./chunk-DLZWPHHO.mjs";
import "./chunk-WRSGHGAT.mjs";
import "./chunk-VYZNQ22Q.mjs";
import "./chunk-OMC5JCQH.mjs";
import "./chunk-LSEYENCI.mjs";
import "./chunk-XMAWMECC.mjs";
import "./chunk-NT6QW3PC.mjs";
import "./chunk-4M3ZY7KA.mjs";
import "./chunk-OHJT6B6O.mjs";
import "./chunk-GSM3OOMB.mjs";
import "./chunk-VELNOPU6.mjs";
import "./chunk-KUBWCAI2.mjs";
import "./chunk-XGGPH4BK.mjs";
import "./chunk-5SVNVK6B.mjs";
import {
  productTagsQueryKeys,
  useProductTags
} from "./chunk-H3DXELZS.mjs";
import "./chunk-4KU74J5E.mjs";
import "./chunk-QVTXMOQX.mjs";
import "./chunk-HMTMGLW3.mjs";
import "./chunk-7KE7WNU3.mjs";
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
import "./chunk-VDBOSWVE.mjs";
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
import "./chunk-LPEUYMRK.mjs";
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
import "./chunk-5ATMPN6G.mjs";
import "./chunk-CNRGU52W.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-7IZZLHXL.mjs";
import "./chunk-S47CVTVK.mjs";

// src/routes/product-tags/product-tag-list/loader.ts
var productTagListQuery = (query) => ({
  queryKey: productTagsQueryKeys.list(query),
  queryFn: async () => sdk.admin.productTag.list(query)
});
var productTagListLoader = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const queryObject = {};
  searchParams.forEach((value, key) => {
    try {
      queryObject[key] = JSON.parse(value);
    } catch (_e) {
      queryObject[key] = value;
    }
  });
  const query = productTagListQuery(
    queryObject
  );
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};

// src/routes/product-tags/product-tag-list/components/product-tag-list-table/product-tag-list-table.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Button, Container, Heading } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLoaderData } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var ProductTagListTable = () => {
  const { t } = useTranslation();
  const { searchParams, raw } = useProductTagTableQuery({
    pageSize: PAGE_SIZE
  });
  const initialData = useLoaderData();
  const { product_tags, count, isPending, isError, error } = useProductTags(
    searchParams,
    {
      initialData,
      placeholderData: keepPreviousData
    }
  );
  const columns = useColumns();
  const filters = useProductTagTableFilters();
  const { table } = useDataTable({
    data: product_tags,
    count,
    columns,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y px-0 py-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { children: t("productTags.domain") }),
      /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "create", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        filters,
        queryObject: raw,
        isLoading: isPending,
        columns,
        pageSize: PAGE_SIZE,
        count,
        navigateTo: (row) => row.original.id,
        search: true,
        pagination: true,
        orderBy: [
          { key: "value", label: t("fields.value") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ]
      }
    )
  ] });
};
var ProductTagRowActions = ({
  productTag
}) => {
  const { t } = useTranslation();
  const handleDelete = useDeleteProductTagAction({ productTag });
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(PencilSquare, {}),
              label: t("actions.edit"),
              to: `${productTag.id}/edit`
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(Trash, {}),
              label: t("actions.delete"),
              onClick: handleDelete
            }
          ]
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useProductTagTableColumns();
  return useMemo(
    () => [
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx(ProductTagRowActions, { productTag: row.original })
      })
    ],
    [base]
  );
};

// src/routes/product-tags/product-tag-list/product-tag-list.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ProductTagList = () => {
  const { getWidgets } = useDashboardExtension();
  return /* @__PURE__ */ jsx2(
    SingleColumnPage,
    {
      showMetadata: false,
      showJSON: false,
      hasOutlet: true,
      widgets: {
        after: getWidgets("product_tag.list.after"),
        before: getWidgets("product_tag.list.before")
      },
      children: /* @__PURE__ */ jsx2(ProductTagListTable, {})
    }
  );
};
export {
  ProductTagList as Component,
  productTagListLoader as loader
};
