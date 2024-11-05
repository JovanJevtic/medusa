import {
  useDeleteUser,
  useUser
} from "./chunk-RJHL3D4F.mjs";
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
  productsQueryKeys
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

// src/routes/users/user-detail/loader.ts
var userDetailQuery = (id) => ({
  queryKey: productsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.user.retrieve(id)
});
var userLoader = async ({ params }) => {
  const id = params.id;
  const query = userDetailQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};

// src/routes/users/user-detail/user-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/users/user-detail/components/user-general-section/user-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Container, Heading, Text, usePrompt } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var UserGeneralSection = ({ user }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const prompt = usePrompt();
  const { mutateAsync } = useDeleteUser(user.id);
  const name = [user.first_name, user.last_name].filter(Boolean).join(" ");
  const handleDeleteUser = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("users.deleteUserWarning", {
        name: name ?? user.email
      }),
      verificationText: name ?? user.email,
      verificationInstruction: t("general.typeToConfirm"),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        navigate("..");
      }
    });
  };
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { children: user.email }),
      /* @__PURE__ */ jsx(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.edit"),
                  to: "edit",
                  icon: /* @__PURE__ */ jsx(PencilSquare, {})
                }
              ]
            },
            {
              actions: [
                {
                  label: t("actions.delete"),
                  onClick: handleDeleteUser,
                  icon: /* @__PURE__ */ jsx(Trash, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t("fields.name") }),
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: name ?? "-" })
    ] })
  ] });
};

// src/routes/users/user-detail/user-detail.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var UserDetail = () => {
  const initialData = useLoaderData();
  const { id } = useParams();
  const {
    user,
    isPending: isLoading,
    isError,
    error
  } = useUser(id, void 0, {
    initialData
  });
  const { getWidgets } = useDashboardExtension();
  if (isLoading || !user) {
    return /* @__PURE__ */ jsx2(SingleColumnPageSkeleton, { sections: 1, showJSON: true, showMetadata: true });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(
    SingleColumnPage,
    {
      data: user,
      showJSON: true,
      showMetadata: true,
      widgets: {
        after: getWidgets("user.details.after"),
        before: getWidgets("user.details.before")
      },
      children: /* @__PURE__ */ jsx2(UserGeneralSection, { user })
    }
  );
};
export {
  UserDetail as Component,
  userLoader as loader
};
