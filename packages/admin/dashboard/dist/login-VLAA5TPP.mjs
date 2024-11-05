import {
  AvatarBox
} from "./chunk-ZSTDLFYU.mjs";
import "./chunk-EQTBJSBZ.mjs";
import "./chunk-KUBWCAI2.mjs";
import {
  useSignInWithEmailPass
} from "./chunk-XGGPH4BK.mjs";
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
import "./chunk-5JDGO6KD.mjs";
import {
  useDashboardExtension
} from "./chunk-BP3QTLUN.mjs";
import {
  isFetchError
} from "./chunk-ONB3JEHR.mjs";
import "./chunk-53IEL2PE.mjs";
import {
  Form
} from "./chunk-46PZ4VL5.mjs";
import "./chunk-5ATMPN6G.mjs";
import "./chunk-CNRGU52W.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-7IZZLHXL.mjs";
import "./chunk-S47CVTVK.mjs";

// src/routes/login/login.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Heading, Hint, Input, Text } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as z from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var LoginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});
var Login = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { getWidgets } = useDashboardExtension();
  const from = location.state?.from?.pathname || "/orders";
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const { mutateAsync, isPending } = useSignInWithEmailPass();
  const handleSubmit = form.handleSubmit(async ({ email, password }) => {
    await mutateAsync(
      {
        email,
        password
      },
      {
        onError: (error) => {
          if (isFetchError(error)) {
            if (error.status === 401) {
              form.setError("email", {
                type: "manual",
                message: error.message
              });
              return;
            }
          }
          form.setError("root.serverError", {
            type: "manual",
            message: error.message
          });
        },
        onSuccess: () => {
          navigate(from, { replace: true });
        }
      }
    );
  });
  const serverError = form.formState.errors?.root?.serverError?.message;
  const validationError = form.formState.errors.email?.message || form.formState.errors.password?.message;
  return /* @__PURE__ */ jsx("div", { className: "bg-ui-bg-subtle flex min-h-dvh w-dvw items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "m-4 flex w-full max-w-[280px] flex-col items-center", children: [
    /* @__PURE__ */ jsx(AvatarBox, {}),
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-col items-center", children: [
      /* @__PURE__ */ jsx(Heading, { children: t("login.title") }),
      /* @__PURE__ */ jsx(Text, { size: "small", className: "text-ui-fg-subtle text-center", children: t("login.hint") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-y-3", children: [
      getWidgets("login.before").map((Component, i) => {
        return /* @__PURE__ */ jsx(Component, {}, i);
      }),
      /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "flex w-full flex-col gap-y-6",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-1", children: [
              /* @__PURE__ */ jsx(
                Form.Field,
                {
                  control: form.control,
                  name: "email",
                  render: ({ field }) => {
                    return /* @__PURE__ */ jsx(Form.Item, { children: /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        autoComplete: "email",
                        ...field,
                        className: "bg-ui-bg-field-component",
                        placeholder: t("fields.email")
                      }
                    ) }) });
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                Form.Field,
                {
                  control: form.control,
                  name: "password",
                  render: ({ field }) => {
                    return /* @__PURE__ */ jsxs(Form.Item, { children: [
                      /* @__PURE__ */ jsx(Form.Label, {}),
                      /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                        Input,
                        {
                          type: "password",
                          autoComplete: "current-password",
                          ...field,
                          className: "bg-ui-bg-field-component",
                          placeholder: t("fields.password")
                        }
                      ) })
                    ] });
                  }
                }
              )
            ] }),
            validationError && /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Hint, { className: "inline-flex", variant: "error", children: validationError }) }),
            serverError && /* @__PURE__ */ jsx(
              Alert,
              {
                className: "bg-ui-bg-base items-center p-2",
                dismissible: true,
                variant: "error",
                children: serverError
              }
            ),
            /* @__PURE__ */ jsx(Button, { className: "w-full", type: "submit", isLoading: isPending, children: t("actions.continueWithEmail") })
          ]
        }
      ) }),
      getWidgets("login.after").map((Component, i) => {
        return /* @__PURE__ */ jsx(Component, {}, i);
      })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "text-ui-fg-muted txt-small my-6", children: /* @__PURE__ */ jsx(
      Trans,
      {
        i18nKey: "login.forgotPassword",
        components: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/reset-password",
              className: "text-ui-fg-interactive transition-fg hover:text-ui-fg-interactive-hover focus-visible:text-ui-fg-interactive-hover font-medium outline-none"
            },
            "reset-password-link"
          )
        ]
      }
    ) })
  ] }) });
};
export {
  Login as Component
};
