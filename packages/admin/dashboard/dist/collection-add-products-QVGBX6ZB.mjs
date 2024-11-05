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
import {
  useCollection,
  useUpdateCollectionProducts
} from "./chunk-2INWSWD6.mjs";
import "./chunk-PQODFA6R.mjs";
import "./chunk-O2XBKACE.mjs";
import "./chunk-WGJWLIDQ.mjs";
import "./chunk-6XBQUUN5.mjs";
import "./chunk-O45FMXPT.mjs";
import "./chunk-FC5HFRKK.mjs";
import "./chunk-RR5JHWYA.mjs";
import "./chunk-ODXK5I2N.mjs";
import "./chunk-DKH5JRLO.mjs";
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

// src/routes/collections/collection-add-products/collection-add-products.tsx
import { useParams } from "react-router-dom";

// src/routes/collections/collection-add-products/components/add-products-to-collection-form/add-products-to-collection-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Hint, Tooltip, toast } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import {
  createColumnHelper
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var AddProductsToCollectionSchema = zod.object({
  add: zod.array(zod.string()).min(1)
});
var PAGE_SIZE = 50;
var PREFIX = "p";
var AddProductsToCollectionForm = ({
  collection
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      add: []
    },
    resolver: zodResolver(AddProductsToCollectionSchema)
  });
  const { setValue } = form;
  const { mutateAsync, isPending: isMutating } = useUpdateCollectionProducts(
    collection.id
  );
  const [rowSelection, setRowSelection] = useState({});
  const updater = (newSelection) => {
    const update = typeof newSelection === "function" ? newSelection(rowSelection) : newSelection;
    setValue(
      "add",
      Object.keys(update).filter((k) => update[k]),
      {
        shouldDirty: true,
        shouldTouch: true
      }
    );
    setRowSelection(update);
  };
  useEffect(() => {
    setValue(
      "add",
      Object.keys(rowSelection).filter((k) => rowSelection[k]),
      {
        shouldDirty: true,
        shouldTouch: true
      }
    );
  }, [rowSelection, setValue]);
  const { searchParams, raw } = useProductTableQuery({
    prefix: PREFIX,
    pageSize: PAGE_SIZE
  });
  const { products, count, isLoading, isError, error } = useProducts(
    {
      fields: "*variants,*sales_channels",
      ...searchParams
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const columns = useColumns();
  const filters = useProductTableFilters(["collections"]);
  const { table } = useDataTable({
    data: products ?? [],
    columns,
    count,
    pageSize: PAGE_SIZE,
    prefix: PREFIX,
    getRowId: (row) => row.id,
    enableRowSelection: true,
    rowSelection: {
      state: rowSelection,
      updater
    },
    enablePagination: true,
    meta: {
      collectionId: collection.id
    }
  });
  const handleSubmit = form.handleSubmit(async (values) => {
    await mutateAsync(
      {
        add: values.add
      },
      {
        onSuccess: () => {
          toast.success(
            t("collections.products.add.successToast", {
              count: values.add.length
            })
          );
          handleSuccess();
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
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
        /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          form.formState.errors.add && /* @__PURE__ */ jsx(Hint, { variant: "error", children: form.formState.errors.add.message }),
          /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", isLoading: isMutating, children: t("actions.save") })
        ] }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "size-full overflow-hidden", children: /* @__PURE__ */ jsx(
          DataTable,
          {
            table,
            columns,
            pageSize: PAGE_SIZE,
            count,
            queryObject: raw,
            filters,
            orderBy: [
              { key: "title", label: t("fields.title") },
              { key: "created_at", label: t("fields.createdAt") },
              { key: "updated_at", label: t("fields.updatedAt") }
            ],
            prefix: PREFIX,
            isLoading,
            layout: "fill",
            pagination: true,
            search: "autofocus"
          }
        ) })
      ]
    }
  ) });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const { t } = useTranslation();
  const base = useProductTableColumns();
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
          const { collectionId } = table.options.meta;
          const isAdded = row.original.collection_id === collectionId;
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

// src/routes/collections/collection-add-products/collection-add-products.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var CollectionAddProducts = () => {
  const { id } = useParams();
  const { collection, isLoading, isError, error } = useCollection(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: !isLoading && collection && /* @__PURE__ */ jsx2(AddProductsToCollectionForm, { collection }) });
};
export {
  CollectionAddProducts as Component
};
