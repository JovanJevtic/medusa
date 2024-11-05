import {
  TaxOverrideTable,
  TaxRateLine,
  useTaxOverrideTable
} from "./chunk-D3EZFDJ5.mjs";
import "./chunk-V3MOBCDF.mjs";
import {
  TaxRegionCard
} from "./chunk-P4RJXLJD.mjs";
import "./chunk-EQTBJSBZ.mjs";
import "./chunk-3WXBLS2P.mjs";
import "./chunk-VFWVYIBV.mjs";
import "./chunk-7XWP2AR2.mjs";
import {
  useTaxRateTableQuery
} from "./chunk-I5HYE2RW.mjs";
import "./chunk-H3DXELZS.mjs";
import {
  useTaxRates
} from "./chunk-4KU74J5E.mjs";
import {
  taxRegionsQueryKeys,
  useTaxRegion
} from "./chunk-QVTXMOQX.mjs";
import "./chunk-7KE7WNU3.mjs";
import "./chunk-OJ3RSAFU.mjs";
import "./chunk-2INWSWD6.mjs";
import "./chunk-VDBOSWVE.mjs";
import {
  SingleColumnPage
} from "./chunk-UR2E444G.mjs";
import "./chunk-3IW4HYUP.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-AOFGTNG6.mjs";
import "./chunk-WX2SMNCD.mjs";
import {
  SingleColumnPageSkeleton
} from "./chunk-LPEUYMRK.mjs";
import "./chunk-WRXTMI2J.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-M3VFKDXJ.mjs";
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

// src/routes/tax-regions/tax-region-province-detail/tax-region-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/tax-regions/tax-region-province-detail/components/tax-region-province-detail-section/tax-region-detail-section.tsx
import { Badge, Container, Tooltip } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var TaxRegionProvinceDetailSection = ({
  taxRegion
}) => {
  const { t } = useTranslation();
  const defaultRates = taxRegion.tax_rates.filter((r) => r.is_default === true);
  const showBage = defaultRates.length === 0;
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsx(
      TaxRegionCard,
      {
        taxRegion,
        type: "header",
        asLink: false,
        badge: showBage && /* @__PURE__ */ jsx(Tooltip, { content: t("taxRegions.fields.noDefaultRate.tooltip"), children: /* @__PURE__ */ jsx(Badge, { color: "orange", size: "2xsmall", className: "cursor-default", children: t("taxRegions.fields.noDefaultRate.label") }) })
      }
    ),
    defaultRates.map((rate) => {
      return /* @__PURE__ */ jsx(TaxRateLine, { taxRate: rate, isSublevelTaxRate: true }, rate.id);
    })
  ] });
};

// src/routes/tax-regions/tax-region-province-detail/components/tax-region-province-override-section/tax-region-province-override-section.tsx
import { Container as Container2, Heading } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var PREFIX = "o";
var TaxRegionProvinceOverrideSection = ({
  taxRegion
}) => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useTaxRateTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const { tax_rates, count, isPending, isError, error } = useTaxRates(
    {
      ...searchParams,
      tax_region_id: taxRegion.id,
      is_default: false
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const { table } = useTaxOverrideTable({
    count,
    data: tax_rates,
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(Container2, { className: "p-0", children: /* @__PURE__ */ jsx2(
    TaxOverrideTable,
    {
      isPending,
      table,
      count,
      action: {
        label: t("actions.create"),
        to: "overrides/create"
      },
      queryObject: raw,
      prefix: PREFIX,
      children: /* @__PURE__ */ jsx2(Heading, { level: "h2", children: t("taxRegions.taxOverrides.header") })
    }
  ) });
};

// src/routes/tax-regions/tax-region-province-detail/tax-region-detail.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var TaxRegionDetail = () => {
  const { province_id } = useParams();
  const initialData = useLoaderData();
  const {
    tax_region: taxRegion,
    isLoading,
    isError,
    error
  } = useTaxRegion(province_id, void 0, { initialData });
  const { getWidgets } = useDashboardExtension();
  if (isLoading || !taxRegion) {
    return /* @__PURE__ */ jsx3(SingleColumnPageSkeleton, { sections: 2, showJSON: true });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(
    SingleColumnPage,
    {
      data: taxRegion,
      showJSON: true,
      widgets: {
        after: getWidgets("tax.details.after"),
        before: getWidgets("tax.details.before")
      },
      children: [
        /* @__PURE__ */ jsx3(TaxRegionProvinceDetailSection, { taxRegion }),
        /* @__PURE__ */ jsx3(TaxRegionProvinceOverrideSection, { taxRegion })
      ]
    }
  );
};

// src/routes/tax-regions/tax-region-province-detail/loader.ts
var taxRegionDetailQuery = (id) => ({
  queryKey: taxRegionsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.taxRegion.retrieve(id)
});
var taxRegionLoader = async ({ params }) => {
  const id = params.province_id;
  const query = taxRegionDetailQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};
export {
  TaxRegionDetail as Component,
  TaxRegionDetail,
  taxRegionLoader as loader
};
