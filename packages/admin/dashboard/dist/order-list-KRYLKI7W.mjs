import {
  useOrderTableColumns
} from "./chunk-NLR7MGM2.mjs";
import "./chunk-B4FQDBC3.mjs";
import "./chunk-LHJ6JQGA.mjs";
import "./chunk-XFSJ7YIN.mjs";
import "./chunk-FSMQADBD.mjs";
import "./chunk-MWVM4TYO.mjs";
import "./chunk-ADOCJB6L.mjs";
import {
  useOrderTableQuery
} from "./chunk-XMAWMECC.mjs";
import {
  useOrderTableFilters
} from "./chunk-NT6QW3PC.mjs";
import {
  useOrders
} from "./chunk-6XBQUUN5.mjs";
import "./chunk-O45FMXPT.mjs";
import "./chunk-ODXK5I2N.mjs";
import "./chunk-DKH5JRLO.mjs";
import {
  SingleColumnPage
} from "./chunk-UR2E444G.mjs";
import "./chunk-3IW4HYUP.mjs";
import "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-MTODNWYP.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-WX2SMNCD.mjs";
import "./chunk-LPEUYMRK.mjs";
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
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-7IZZLHXL.mjs";
import "./chunk-S47CVTVK.mjs";

// src/routes/orders/order-list/components/order-list-table/order-list-table.tsx
import { Container, Heading } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

// src/routes/orders/order-list/const.ts
var DEFAULT_PROPERTIES = [
  "id",
  "status",
  "created_at",
  "email",
  "display_id",
  "payment_status",
  "fulfillment_status",
  "total",
  "currency_code"
];
var DEFAULT_RELATIONS = ["*customer", "*sales_channel"];
var DEFAULT_FIELDS = `${DEFAULT_PROPERTIES.join(
  ","
)},${DEFAULT_RELATIONS.join(",")}`;

// src/routes/orders/order-list/components/order-list-table/order-list-table.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var OrderListTable = () => {
  const { t } = useTranslation();
  const { searchParams, raw } = useOrderTableQuery({
    pageSize: PAGE_SIZE
  });
  const { orders, count, isError, error, isLoading } = useOrders(
    {
      fields: DEFAULT_FIELDS,
      ...searchParams
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useOrderTableFilters();
  const columns = useOrderTableColumns({});
  const { table } = useDataTable({
    data: orders ?? [],
    columns,
    enablePagination: true,
    count,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between px-6 py-4", children: /* @__PURE__ */ jsx(Heading, { children: t("orders.domain") }) }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        columns,
        table,
        pagination: true,
        navigateTo: (row) => `/orders/${row.original.id}`,
        filters,
        count,
        search: true,
        isLoading,
        pageSize: PAGE_SIZE,
        orderBy: [
          { key: "display_id", label: t("orders.fields.displayId") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ],
        queryObject: raw,
        noRecords: {
          message: t("orders.list.noRecordsMessage")
        }
      }
    )
  ] });
};

// src/routes/orders/order-list/order-list.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var OrderList = () => {
  const { getWidgets } = useDashboardExtension();
  return /* @__PURE__ */ jsx2(
    SingleColumnPage,
    {
      widgets: {
        after: getWidgets("order.list.after"),
        before: getWidgets("order.list.before")
      },
      hasOutlet: false,
      children: /* @__PURE__ */ jsx2(OrderListTable, {})
    }
  );
};
export {
  OrderList as Component
};
