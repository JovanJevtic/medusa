import "./chunk-5R4UGQUP.mjs";
import "./chunk-I5HYE2RW.mjs";
import "./chunk-RIV7FKGN.mjs";
import "./chunk-TDK3JDOB.mjs";
import "./chunk-IRV425DP.mjs";
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
import {
  useProductTableQuery
} from "./chunk-4M3ZY7KA.mjs";
import {
  useProductTableFilters
} from "./chunk-OHJT6B6O.mjs";
import "./chunk-GSM3OOMB.mjs";
import "./chunk-VELNOPU6.mjs";
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
import "./chunk-C76H5USB.mjs";
import {
  DataTableFilter
} from "./chunk-VDQHICXW.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-M7E7X35P.mjs";
import "./chunk-AUHRT775.mjs";
import "./chunk-RVOEOEYF.mjs";
import "./chunk-AI7M5TGP.mjs";
import "./chunk-5JDGO6KD.mjs";
import {
  RouteDrawer,
  useRouteModal
} from "./chunk-CL4DJXS3.mjs";
import "./chunk-46PZ4VL5.mjs";
import {
  useExportProducts
} from "./chunk-5ATMPN6G.mjs";
import "./chunk-CNRGU52W.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-7IZZLHXL.mjs";
import "./chunk-S47CVTVK.mjs";

// src/routes/products/product-export/product-export.tsx
import { Button, Heading as Heading2, toast } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";

// src/routes/products/product-export/components/export-filters.tsx
import { Heading, Text } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var ExportFilters = () => {
  const { t } = useTranslation();
  const filters = useProductTableFilters();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("products.export.filters.title") }),
    /* @__PURE__ */ jsx(Text, { size: "small", className: "text-ui-fg-subtle", children: t("products.export.filters.description") }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(DataTableFilter, { filters, readonly: true }) })
  ] });
};

// src/routes/products/product-export/product-export.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ProductExport = () => {
  const { t } = useTranslation2();
  return /* @__PURE__ */ jsxs2(RouteDrawer, { children: [
    /* @__PURE__ */ jsxs2(RouteDrawer.Header, { children: [
      /* @__PURE__ */ jsx2(RouteDrawer.Title, { asChild: true, children: /* @__PURE__ */ jsx2(Heading2, { children: t("products.export.header") }) }),
      /* @__PURE__ */ jsx2(RouteDrawer.Description, { className: "sr-only", children: t("products.export.description") })
    ] }),
    /* @__PURE__ */ jsx2(ProductExportContent, {})
  ] });
};
var ProductExportContent = () => {
  const { t } = useTranslation2();
  const { searchParams } = useProductTableQuery({});
  const { mutateAsync } = useExportProducts(searchParams);
  const { handleSuccess } = useRouteModal();
  const handleExportRequest = async () => {
    await mutateAsync(
      {},
      {
        onSuccess: () => {
          toast.info(t("products.export.success.title"), {
            description: t("products.export.success.description")
          });
          handleSuccess();
        },
        onError: (err) => {
          toast.error(err.message);
        }
      }
    );
  };
  return /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2(RouteDrawer.Body, { children: /* @__PURE__ */ jsx2(ExportFilters, {}) }),
    /* @__PURE__ */ jsx2(RouteDrawer.Footer, { children: /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-2", children: [
      /* @__PURE__ */ jsx2(RouteDrawer.Close, { asChild: true, children: /* @__PURE__ */ jsx2(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx2(Button, { onClick: handleExportRequest, size: "small", children: t("actions.export") })
    ] }) })
  ] });
};
export {
  ProductExport as Component
};
