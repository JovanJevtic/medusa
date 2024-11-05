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
import "./chunk-C76H5USB.mjs";
import "./chunk-VDQHICXW.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-M7E7X35P.mjs";
import "./chunk-AUHRT775.mjs";
import "./chunk-RVOEOEYF.mjs";
import "./chunk-AI7M5TGP.mjs";
import {
  useSalesChannel,
  useSalesChannelAddProducts
} from "./chunk-5JDGO6KD.mjs";
import "./chunk-IUCDCPJU.mjs";
import {
  KeyboundForm
} from "./chunk-CEEYZHMN.mjs";
import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-CL4DJXS3.mjs";
import "./chunk-46PZ4VL5.mjs";
import {
  useProducts
} from "./chunk-5ATMPN6G.mjs";
import "./chunk-CNRGU52W.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-7IZZLHXL.mjs";
import "./chunk-S47CVTVK.mjs";

// src/routes/sales-channels/sales-channel-add-products/sales-channel-add-products.tsx
import { useParams } from "react-router-dom";

// src/routes/sales-channels/sales-channel-add-products/components/add-products-to-sales-channel-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Hint, Tooltip, toast } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import {
  createColumnHelper
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var AddProductsToSalesChannelSchema = zod.object({
  product_ids: zod.array(zod.string()).min(1)
});
var PAGE_SIZE = 50;
var AddProductsToSalesChannelForm = ({
  salesChannel
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      product_ids: []
    },
    resolver: zodResolver(AddProductsToSalesChannelSchema)
  });
  const { setValue } = form;
  const { mutateAsync, isPending } = useSalesChannelAddProducts(salesChannel.id);
  const [rowSelection, setRowSelection] = useState({});
  const updater = (fn) => {
    const state = typeof fn === "function" ? fn(rowSelection) : fn;
    const ids = Object.keys(state);
    setValue("product_ids", ids, {
      shouldDirty: true,
      shouldTouch: true
    });
    setRowSelection(state);
  };
  const { searchParams, raw } = useProductTableQuery({ pageSize: PAGE_SIZE });
  const {
    products,
    count,
    isPending: isLoading,
    isError,
    error
  } = useProducts(
    {
      fields: "*variants,*sales_channels",
      ...searchParams
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const columns = useColumns();
  const filters = useProductTableFilters(["sales_channel_id"]);
  const { table } = useDataTable({
    data: products ?? [],
    columns,
    enableRowSelection: (row) => {
      return !row.original.sales_channels?.map((sc) => sc.id).includes(salesChannel.id);
    },
    enablePagination: true,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE,
    count,
    rowSelection: {
      state: rowSelection,
      updater
    },
    meta: {
      salesChannelId: salesChannel.id
    }
  });
  const handleSubmit = form.handleSubmit(async (values) => {
    await mutateAsync(values.product_ids, {
      onSuccess: () => {
        toast.success(t("salesChannels.toast.update"));
        handleSuccess();
      },
      onError: (error2) => toast.error(error2.message)
    });
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs(
    KeyboundForm,
    {
      onSubmit: handleSubmit,
      className: "flex h-full flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end gap-x-2", children: form.formState.errors.product_ids && /* @__PURE__ */ jsx(Hint, { variant: "error", children: form.formState.errors.product_ids.message }) }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "flex size-full flex-col overflow-y-auto", children: /* @__PURE__ */ jsx(
          DataTable,
          {
            table,
            count,
            columns,
            pageSize: PAGE_SIZE,
            isLoading,
            filters,
            orderBy: [
              { key: "title", label: t("fields.title") },
              { key: "status", label: t("fields.status") },
              { key: "created_at", label: t("fields.createdAt") },
              { key: "updated_at", label: t("fields.updatedAt") }
            ],
            queryObject: raw,
            layout: "fill",
            pagination: true,
            search: "autofocus",
            noRecords: {
              message: t("salesChannels.products.add.list.noRecordsMessage")
            }
          }
        ) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", isLoading: isPending, children: t("actions.save") })
        ] }) })
      ]
    }
  ) });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useProductTableColumns();
  const { t } = useTranslation();
  return useMemo(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row, table }) => {
          const { salesChannelId } = table.options.meta;
          const isAdded = row.original.sales_channels?.map((sc) => sc.id).includes(salesChannelId);
          const isSelected = row.getIsSelected() || isAdded;
          const Component = /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: isSelected,
              disabled: isAdded,
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
          if (isAdded) {
            return /* @__PURE__ */ jsx(
              Tooltip,
              {
                content: t("salesChannels.productAlreadyAdded"),
                side: "right",
                children: Component
              }
            );
          }
          return Component;
        }
      }),
      ...base
    ],
    [t, base]
  );
};

// src/routes/sales-channels/sales-channel-add-products/sales-channel-add-products.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var SalesChannelAddProducts = () => {
  const { id } = useParams();
  const {
    sales_channel,
    isPending: isLoading,
    isError,
    error
  } = useSalesChannel(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: !isLoading && sales_channel && /* @__PURE__ */ jsx2(AddProductsToSalesChannelForm, { salesChannel: sales_channel }) });
};
export {
  SalesChannelAddProducts as Component
};
