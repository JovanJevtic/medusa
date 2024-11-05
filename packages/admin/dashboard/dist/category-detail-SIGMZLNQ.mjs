import {
  LinkButton
} from "./chunk-6WKBBTKM.mjs";
import {
  useDeleteProductCategoryAction
} from "./chunk-O2EU6MAA.mjs";
import {
  getCategoryChildren,
  getCategoryPath,
  getIsActiveProps,
  getIsInternalProps
} from "./chunk-54IEHX46.mjs";
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
  categoriesQueryKeys,
  useProductCategory,
  useUpdateProductCategoryProducts
} from "./chunk-FC5HFRKK.mjs";
import "./chunk-RR5JHWYA.mjs";
import "./chunk-ODXK5I2N.mjs";
import "./chunk-DKH5JRLO.mjs";
import {
  TwoColumnPage
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
  Skeleton,
  TwoColumnPageSkeleton
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

// src/routes/categories/category-detail/category-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/categories/category-detail/components/category-general-section/category-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Container, Heading, StatusBadge, Text } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var CategoryGeneralSection = ({
  category
}) => {
  const { t } = useTranslation();
  const activeProps = getIsActiveProps(category.is_active, t);
  const internalProps = getIsInternalProps(category.is_internal, t);
  const handleDelete = useDeleteProductCategoryAction(category);
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { children: category.name }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
          /* @__PURE__ */ jsx(StatusBadge, { color: activeProps.color, children: activeProps.label }),
          /* @__PURE__ */ jsx(StatusBadge, { color: internalProps.color, children: internalProps.label })
        ] }),
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
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 gap-3 px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t("fields.description") }),
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: category.description || "-" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 gap-3 px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t("fields.handle") }),
      /* @__PURE__ */ jsxs(Text, { size: "small", leading: "compact", children: [
        "/",
        category.handle
      ] })
    ] })
  ] });
};

// src/routes/categories/category-detail/components/category-organize-section/category-organize-section.tsx
import {
  FolderIllustration,
  PencilSquare as PencilSquare2,
  TriangleRightMini
} from "@medusajs/icons";
import { Badge, Container as Container2, Heading as Heading2, Text as Text2, Tooltip } from "@medusajs/ui";
import { useMemo, useState } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { Link } from "react-router-dom";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CategoryOrganizeSection = ({
  category
}) => {
  const { t } = useTranslation2();
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Heading2, { level: "h2", children: t("categories.organize.header") }),
      /* @__PURE__ */ jsx2(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("categories.organize.action"),
                  icon: /* @__PURE__ */ jsx2(PencilSquare2, {}),
                  to: `organize`
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start gap-3 px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", weight: "plus", children: t("categories.fields.path.label") }),
      /* @__PURE__ */ jsx2(PathDisplay, { category })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start gap-3 px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", weight: "plus", children: t("categories.fields.children.label") }),
      /* @__PURE__ */ jsx2(ChildrenDisplay, { category })
    ] })
  ] });
};
var PathDisplay = ({
  category
}) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation2();
  const {
    product_category: withParents,
    isLoading,
    isError,
    error
  } = useProductCategory(category.id, {
    include_ancestors_tree: true,
    fields: "id,name,*parent_category"
  });
  const chips = useMemo(() => getCategoryPath(withParents), [withParents]);
  if (isLoading || !withParents) {
    return /* @__PURE__ */ jsx2(Skeleton, { className: "h-5 w-16" });
  }
  if (isError) {
    throw error;
  }
  if (!chips.length) {
    return /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", children: "-" });
  }
  if (chips.length > 1 && !expanded) {
    return /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-[20px_1fr] items-start gap-x-2", children: [
      /* @__PURE__ */ jsx2(FolderIllustration, {}),
      /* @__PURE__ */ jsxs2("div", { className: "flex w-full items-center gap-x-0.5 overflow-hidden", children: [
        /* @__PURE__ */ jsx2(Tooltip, { content: t("categories.fields.path.tooltip"), children: /* @__PURE__ */ jsx2(
          "button",
          {
            className: "outline-none",
            type: "button",
            onClick: () => setExpanded(true),
            children: /* @__PURE__ */ jsx2(Text2, { size: "xsmall", leading: "compact", weight: "plus", children: "..." })
          }
        ) }),
        /* @__PURE__ */ jsx2("div", { className: "flex size-[15px] shrink-0 items-center justify-center", children: /* @__PURE__ */ jsx2(TriangleRightMini, {}) }),
        /* @__PURE__ */ jsx2(
          Text2,
          {
            size: "xsmall",
            leading: "compact",
            weight: "plus",
            className: "truncate",
            children: chips[chips.length - 1].name
          }
        )
      ] })
    ] });
  }
  if (chips.length > 1 && expanded) {
    return /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-[20px_1fr] items-start gap-x-2", children: [
      /* @__PURE__ */ jsx2(FolderIllustration, {}),
      /* @__PURE__ */ jsx2("div", { className: "gap- flex flex-wrap items-center gap-x-0.5 gap-y-1", children: chips.map((chip, index) => {
        return /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-0.5", children: [
          index === chips.length - 1 ? /* @__PURE__ */ jsx2(Text2, { size: "xsmall", leading: "compact", weight: "plus", children: chip.name }) : /* @__PURE__ */ jsx2(
            LinkButton,
            {
              to: `/categories/${chip.id}`,
              className: "txt-compact-xsmall-plus text-ui-fg-subtle hover:text-ui-fg-base focus-visible:text-ui-fg-base",
              children: chip.name
            }
          ),
          index < chips.length - 1 && /* @__PURE__ */ jsx2(TriangleRightMini, {})
        ] }, chip.id);
      }) })
    ] });
  }
  return /* @__PURE__ */ jsx2("div", { className: "grid grid-cols-1 items-start gap-x-2", children: chips.map((chip, index) => /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-0.5", children: [
    /* @__PURE__ */ jsx2(Text2, { size: "xsmall", leading: "compact", weight: "plus", children: chip.name }),
    index < chips.length - 1 && /* @__PURE__ */ jsx2(TriangleRightMini, {})
  ] }, chip.id)) });
};
var ChildrenDisplay = ({
  category
}) => {
  const {
    product_category: withChildren,
    isLoading,
    isError,
    error
  } = useProductCategory(category.id, {
    include_descendants_tree: true,
    fields: "id,name,category_children"
  });
  const chips = useMemo(() => getCategoryChildren(withChildren), [withChildren]);
  if (isLoading || !withChildren) {
    return /* @__PURE__ */ jsx2(Skeleton, { className: "h-5 w-16" });
  }
  if (isError) {
    throw error;
  }
  if (!chips.length) {
    return /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", children: "-" });
  }
  return /* @__PURE__ */ jsx2("div", { className: "flex w-full flex-wrap gap-1", children: chips.map((chip) => /* @__PURE__ */ jsx2(Badge, { size: "2xsmall", className: "max-w-full", asChild: true, children: /* @__PURE__ */ jsx2(Link, { to: `/categories/${chip.id}`, children: /* @__PURE__ */ jsx2("span", { className: "truncate", children: chip.name }) }) }, chip.id)) });
};

// src/routes/categories/category-detail/components/category-product-section/category-product-section.tsx
import { PlusMini } from "@medusajs/icons";
import {
  Checkbox,
  CommandBar,
  Container as Container3,
  Heading as Heading3,
  toast,
  usePrompt
} from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo as useMemo2, useState as useState2 } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var CategoryProductSection = ({
  category
}) => {
  const { t } = useTranslation3();
  const prompt = usePrompt();
  const [selection, setSelection] = useState2({});
  const { raw, searchParams } = useProductTableQuery({ pageSize: PAGE_SIZE });
  const { products, count, isLoading, isError, error } = useProducts(
    {
      ...searchParams,
      category_id: [category.id]
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const columns = useColumns();
  const filters = useProductTableFilters(["categories"]);
  const { table } = useDataTable({
    data: products || [],
    columns,
    count,
    getRowId: (original) => original.id,
    pageSize: PAGE_SIZE,
    enableRowSelection: true,
    enablePagination: true,
    rowSelection: {
      state: selection,
      updater: setSelection
    }
  });
  const { mutateAsync } = useUpdateProductCategoryProducts(category.id);
  const handleRemove = async () => {
    const selected = Object.keys(selection);
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("categories.products.remove.confirmation", {
        count: selected.length
      }),
      confirmText: t("actions.remove"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(
      {
        remove: selected
      },
      {
        onSuccess: () => {
          toast.success(
            t("categories.products.remove.successToast", {
              count: selected.length
            })
          );
          setSelection({});
        },
        onError: (error2) => {
          toast.error(error2.message);
        }
      }
    );
  };
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3(Container3, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx3(Heading3, { level: "h2", children: t("products.domain") }),
      /* @__PURE__ */ jsx3(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.add"),
                  icon: /* @__PURE__ */ jsx3(PlusMini, {}),
                  to: "products"
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx3(
      DataTable,
      {
        table,
        filters,
        columns,
        orderBy: [
          { key: "title", label: t("fields.title") },
          { key: "created_at", label: t("fields.createdAt") },
          { key: "updated_at", label: t("fields.updatedAt") }
        ],
        pageSize: PAGE_SIZE,
        count,
        navigateTo: (row) => `/products/${row.id}`,
        isLoading,
        queryObject: raw,
        noRecords: {
          message: t("categories.products.list.noRecordsMessage")
        }
      }
    ),
    /* @__PURE__ */ jsx3(CommandBar, { open: !!Object.keys(selection).length, children: /* @__PURE__ */ jsxs3(CommandBar.Bar, { children: [
      /* @__PURE__ */ jsx3(CommandBar.Value, { children: t("general.countSelected", {
        count: Object.keys(selection).length
      }) }),
      /* @__PURE__ */ jsx3(CommandBar.Seperator, {}),
      /* @__PURE__ */ jsx3(
        CommandBar.Command,
        {
          action: handleRemove,
          label: t("actions.remove"),
          shortcut: "r"
        }
      )
    ] }) })
  ] });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useProductTableColumns();
  return useMemo2(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx3(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx3(
            Checkbox,
            {
              checked: row.getIsSelected(),
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
        }
      }),
      ...base
    ],
    [base]
  );
};

// src/routes/categories/category-detail/category-detail.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var CategoryDetail = () => {
  const { id } = useParams();
  const initialData = useLoaderData();
  const { getWidgets } = useDashboardExtension();
  const { product_category, isLoading, isError, error } = useProductCategory(
    id,
    void 0,
    {
      initialData
    }
  );
  if (isLoading || !product_category) {
    return /* @__PURE__ */ jsx4(
      TwoColumnPageSkeleton,
      {
        mainSections: 2,
        sidebarSections: 1,
        showJSON: true,
        showMetadata: true
      }
    );
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs4(
    TwoColumnPage,
    {
      widgets: {
        after: getWidgets("product_category.details.after"),
        before: getWidgets("product_category.details.before"),
        sideAfter: getWidgets("product_category.details.side.after"),
        sideBefore: getWidgets("product_category.details.side.before")
      },
      showJSON: true,
      showMetadata: true,
      data: product_category,
      children: [
        /* @__PURE__ */ jsxs4(TwoColumnPage.Main, { children: [
          /* @__PURE__ */ jsx4(CategoryGeneralSection, { category: product_category }),
          /* @__PURE__ */ jsx4(CategoryProductSection, { category: product_category })
        ] }),
        /* @__PURE__ */ jsx4(TwoColumnPage.Sidebar, { children: /* @__PURE__ */ jsx4(CategoryOrganizeSection, { category: product_category }) })
      ]
    }
  );
};

// src/routes/categories/category-detail/loader.ts
var categoryDetailQuery = (id) => ({
  queryKey: categoriesQueryKeys.detail(id),
  queryFn: async () => sdk.admin.productCategory.retrieve(id)
});
var categoryLoader = async ({ params }) => {
  const id = params.id;
  const query = categoryDetailQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};
export {
  CategoryDetail as Component,
  categoryLoader as loader
};
