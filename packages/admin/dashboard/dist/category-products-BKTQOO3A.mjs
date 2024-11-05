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
import {
  useProductCategory,
  useUpdateProductCategoryProducts
} from "./chunk-FC5HFRKK.mjs";
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
import "./chunk-5JDGO6KD.mjs";
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

// src/routes/categories/category-products/category-products.tsx
import { useParams } from "react-router-dom";

// src/routes/categories/category-products/components/edit-category-products-form/edit-category-products-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Checkbox, Hint, Tooltip, toast } from "@medusajs/ui";
import {
  createColumnHelper
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var EditCategoryProductsSchema = z.object({
  product_ids: z.array(z.string())
});
var PAGE_SIZE = 50;
var PREFIX = "p";
var EditCategoryProductsForm = ({
  categoryId,
  products = []
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const [selection, setSelection] = useState(
    products.reduce((acc, p) => {
      acc[p.id] = true;
      return acc;
    }, {})
  );
  const form = useForm({
    defaultValues: {
      product_ids: []
    },
    resolver: zodResolver(EditCategoryProductsSchema)
  });
  const updater = (newSelection) => {
    const value = typeof newSelection === "function" ? newSelection(selection) : newSelection;
    form.setValue("product_ids", Object.keys(value), {
      shouldDirty: true,
      shouldTouch: true
    });
    setSelection(value);
  };
  const { searchParams, raw } = useProductTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const {
    products: data,
    count,
    isPending,
    isError,
    error
  } = useProducts({
    ...searchParams
  });
  const columns = useColumns();
  const filters = useProductTableFilters(["categories"]);
  const { table } = useDataTable({
    data,
    columns,
    getRowId: (original) => original.id,
    count,
    pageSize: PAGE_SIZE,
    prefix: PREFIX,
    enableRowSelection: (row) => {
      return !products.some((p) => p.id === row.original.id);
    },
    enablePagination: true,
    rowSelection: {
      state: selection,
      updater
    }
  });
  const { mutateAsync, isPending: isMutating } = useUpdateProductCategoryProducts(categoryId);
  const handleSubmit = form.handleSubmit(async (data2) => {
    await mutateAsync(
      {
        add: data2.product_ids
      },
      {
        onSuccess: () => {
          toast.success(
            t("categories.products.add.successToast", {
              count: data2.product_ids.length - products.length
            })
          );
          handleSuccess();
        },
        onError: (error2) => {
          toast.error(error2.message);
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
          form.formState.errors.product_ids && /* @__PURE__ */ jsx(Hint, { variant: "error", children: form.formState.errors.product_ids.message }),
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
            isLoading: isPending,
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
        cell: ({ row }) => {
          const isPreSelected = !row.getCanSelect();
          const isSelected = row.getIsSelected() || isPreSelected;
          const Component = /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: isSelected,
              disabled: isPreSelected,
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
          if (isPreSelected) {
            return /* @__PURE__ */ jsx(
              Tooltip,
              {
                content: t("categories.products.add.disabledTooltip"),
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

// src/routes/categories/category-products/category-products.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var CategoryProducts = () => {
  const { id } = useParams();
  const { product_category, isPending, isFetching, isError, error } = useProductCategory(id, {
    fields: "products.id"
  });
  const ready = !isPending && !isFetching && !!product_category;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: ready && /* @__PURE__ */ jsx2(
    EditCategoryProductsForm,
    {
      categoryId: product_category.id,
      products: product_category.products
    }
  ) });
};
export {
  CategoryProducts as Component
};
