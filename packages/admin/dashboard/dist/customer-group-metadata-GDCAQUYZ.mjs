import "./chunk-XRTVFYCW.mjs";
import {
  MetadataForm
} from "./chunk-SLQPHCXY.mjs";
import "./chunk-OC7BQLYI.mjs";
import {
  useCustomerGroup,
  useUpdateCustomerGroup
} from "./chunk-OJ3RSAFU.mjs";
import "./chunk-LPEUYMRK.mjs";
import "./chunk-IUCDCPJU.mjs";
import "./chunk-CEEYZHMN.mjs";
import "./chunk-CL4DJXS3.mjs";
import "./chunk-53IEL2PE.mjs";
import "./chunk-46PZ4VL5.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-7IZZLHXL.mjs";
import "./chunk-S47CVTVK.mjs";

// src/routes/customer-groups/customer-group-metadata/customer-metadata.tsx
import { useParams } from "react-router-dom";
import { jsx } from "react/jsx-runtime";
var CustomerGroupMetadata = () => {
  const { id } = useParams();
  const { customer_group, isPending, isError, error } = useCustomerGroup(id);
  const { mutateAsync, isPending: isMutating } = useUpdateCustomerGroup(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(
    MetadataForm,
    {
      metadata: customer_group?.metadata,
      hook: mutateAsync,
      isPending,
      isMutating
    }
  );
};
export {
  CustomerGroupMetadata as Component
};
