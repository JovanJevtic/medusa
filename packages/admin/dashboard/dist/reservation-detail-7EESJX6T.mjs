import {
  InventoryItemGeneralSection
} from "./chunk-MRW3W5RG.mjs";
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
import {
  useStockLocation
} from "./chunk-WGJWLIDQ.mjs";
import "./chunk-6XBQUUN5.mjs";
import {
  reservationItemsQueryKeys,
  useReservationItem
} from "./chunk-O45FMXPT.mjs";
import "./chunk-FC5HFRKK.mjs";
import "./chunk-RR5JHWYA.mjs";
import "./chunk-ODXK5I2N.mjs";
import "./chunk-DKH5JRLO.mjs";
import "./chunk-YOYOJU5D.mjs";
import {
  SectionRow
} from "./chunk-ULQT3HE4.mjs";
import {
  TwoColumnPage
} from "./chunk-UR2E444G.mjs";
import "./chunk-3IW4HYUP.mjs";
import {
  TwoColumnPageSkeleton
} from "./chunk-LPEUYMRK.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-5JDGO6KD.mjs";
import {
  useDashboardExtension
} from "./chunk-BP3QTLUN.mjs";
import "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import "./chunk-46PZ4VL5.mjs";
import "./chunk-5ATMPN6G.mjs";
import {
  useInventoryItem
} from "./chunk-CNRGU52W.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-7IZZLHXL.mjs";
import "./chunk-S47CVTVK.mjs";

// src/routes/reservations/reservation-detail/loader.ts
var reservationDetailQuery = (id) => ({
  queryKey: reservationItemsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.reservation.retrieve(id)
});
var reservationItemLoader = async ({ params }) => {
  const id = params.id;
  const query = reservationDetailQuery(id);
  return queryClient.getQueryData(
    query.queryKey
  ) ?? await queryClient.fetchQuery(query);
};

// src/routes/reservations/reservation-detail/reservation-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/reservations/reservation-detail/components/reservation-general-section/reservation-general-section.tsx
import { Container, Heading } from "@medusajs/ui";
import { PencilSquare } from "@medusajs/icons";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var ReservationGeneralSection = ({
  reservation
}) => {
  const { t } = useTranslation();
  const { inventory_item: inventoryItem, isPending: isLoadingInventoryItem } = useInventoryItem(reservation.inventory_item_id);
  const { stock_location: location, isPending: isLoadingLocation } = useStockLocation(reservation.location_id);
  if (isLoadingInventoryItem || !inventoryItem || isLoadingLocation || !location) {
    return /* @__PURE__ */ jsx("div", { children: "Loading..." });
  }
  const locationLevel = inventoryItem.location_levels.find(
    (l) => l.location_id === reservation.location_id
  );
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { children: t("inventory.reservation.header", {
        itemName: inventoryItem.title ?? inventoryItem.sku
      }) }),
      /* @__PURE__ */ jsx(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx(PencilSquare, {}),
                  label: t("actions.edit"),
                  to: `edit`
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: t("inventory.reservation.lineItemId"),
        value: reservation.line_item_id
      }
    ),
    /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: t("inventory.reservation.description"),
        value: reservation.description
      }
    ),
    /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: t("inventory.reservation.location"),
        value: location?.name
      }
    ),
    /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: t("inventory.reservation.inStockAtLocation"),
        value: locationLevel?.stocked_quantity
      }
    ),
    /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: t("inventory.reservation.availableAtLocation"),
        value: locationLevel?.available_quantity
      }
    ),
    /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: t("inventory.reservation.reservedAtLocation"),
        value: locationLevel?.reserved_quantity
      }
    )
  ] });
};

// src/routes/reservations/reservation-detail/reservation-detail.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ReservationDetail = () => {
  const { id } = useParams();
  const initialData = useLoaderData();
  const { reservation, isLoading, isError, error } = useReservationItem(
    id,
    void 0,
    {
      initialData
    }
  );
  const { inventory_item } = useInventoryItem(
    reservation?.inventory_item?.id,
    void 0,
    { enabled: !!reservation?.inventory_item?.id }
  );
  const { getWidgets } = useDashboardExtension();
  if (isLoading || !reservation) {
    return /* @__PURE__ */ jsx2(
      TwoColumnPageSkeleton,
      {
        mainSections: 1,
        sidebarSections: 1,
        showJSON: true,
        showMetadata: true
      }
    );
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(
    TwoColumnPage,
    {
      widgets: {
        before: getWidgets("reservation.details.before"),
        after: getWidgets("reservation.details.after"),
        sideBefore: getWidgets("reservation.details.side.before"),
        sideAfter: getWidgets("reservation.details.side.after")
      },
      data: reservation,
      showJSON: true,
      showMetadata: true,
      children: [
        /* @__PURE__ */ jsx2(TwoColumnPage.Main, { children: /* @__PURE__ */ jsx2(ReservationGeneralSection, { reservation }) }),
        /* @__PURE__ */ jsx2(TwoColumnPage.Sidebar, { children: inventory_item && /* @__PURE__ */ jsx2(InventoryItemGeneralSection, { inventoryItem: inventory_item }) })
      ]
    }
  );
};
export {
  ReservationDetail as Component,
  reservationItemLoader as loader
};
