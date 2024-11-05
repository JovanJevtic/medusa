import {
  shippingProfileQueryKeys,
  useDeleteShippingProfile,
  useShippingProfile
} from "./chunk-XDQX3OZE.mjs";
import "./chunk-YOYOJU5D.mjs";
import {
  SectionRow
} from "./chunk-ULQT3HE4.mjs";
import {
  SingleColumnPage
} from "./chunk-UR2E444G.mjs";
import "./chunk-3IW4HYUP.mjs";
import {
  SingleColumnPageSkeleton
} from "./chunk-LPEUYMRK.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import {
  useDashboardExtension
} from "./chunk-BP3QTLUN.mjs";
import "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import "./chunk-46PZ4VL5.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-7IZZLHXL.mjs";
import "./chunk-S47CVTVK.mjs";

// src/routes/shipping-profiles/shipping-profile-detail/loader.ts
var shippingProfileQuery = (id) => ({
  queryKey: shippingProfileQueryKeys.detail(id),
  queryFn: async () => sdk.admin.shippingProfile.retrieve(id)
});
var shippingProfileLoader = async ({ params }) => {
  const id = params.id;
  const query = shippingProfileQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};

// src/routes/shipping-profiles/shipping-profile-detail/shipping-profile-detail.tsx
import { useParams } from "react-router-dom";

// src/routes/shipping-profiles/shipping-profile-detail/components/shipping-profile-general-section/shipping-profile-general-section.tsx
import { Trash } from "@medusajs/icons";
import { Container, Heading, toast, usePrompt } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var ShippingProfileGeneralSection = ({
  profile
}) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const navigate = useNavigate();
  const { mutateAsync } = useDeleteShippingProfile(profile.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("shippingProfile.delete.title"),
      description: t("shippingProfile.delete.description", {
        name: profile.name
      }),
      verificationText: profile.name,
      verificationInstruction: t("general.typeToConfirm"),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        toast.success(
          t("shippingProfile.delete.successToast", {
            name: profile.name
          })
        );
        navigate("/settings/locations/shipping-profiles", { replace: true });
      },
      onError: (error) => {
        toast.error(error.message);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { children: profile.name }),
      /* @__PURE__ */ jsx(
        ActionMenu,
        {
          groups: [
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
      )
    ] }),
    /* @__PURE__ */ jsx(SectionRow, { title: t("fields.type"), value: profile.type })
  ] });
};

// src/routes/shipping-profiles/shipping-profile-detail/shipping-profile-detail.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ShippingProfileDetail = () => {
  const { id } = useParams();
  const { shipping_profile, isLoading, isError, error } = useShippingProfile(
    id
  );
  const { getWidgets } = useDashboardExtension();
  if (isLoading || !shipping_profile) {
    return /* @__PURE__ */ jsx2(SingleColumnPageSkeleton, { sections: 1, showJSON: true, showMetadata: true });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(
    SingleColumnPage,
    {
      widgets: {
        before: getWidgets("shipping_profile.details.before"),
        after: getWidgets("shipping_profile.details.after")
      },
      showMetadata: true,
      showJSON: true,
      data: shipping_profile,
      children: /* @__PURE__ */ jsx2(ShippingProfileGeneralSection, { profile: shipping_profile })
    }
  );
};
export {
  ShippingProfileDetail as Component,
  shippingProfileLoader as loader
};
