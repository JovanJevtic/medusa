import "./chunk-XRTVFYCW.mjs";
import {
  MetadataForm
} from "./chunk-SLQPHCXY.mjs";
import "./chunk-OC7BQLYI.mjs";
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
import "./chunk-LPEUYMRK.mjs";
import {
  useSalesChannel,
  useUpdateSalesChannel
} from "./chunk-5JDGO6KD.mjs";
import "./chunk-IUCDCPJU.mjs";
import "./chunk-CEEYZHMN.mjs";
import {
  RouteDrawer
} from "./chunk-CL4DJXS3.mjs";
import "./chunk-53IEL2PE.mjs";
import "./chunk-46PZ4VL5.mjs";
import "./chunk-5ATMPN6G.mjs";
import "./chunk-CNRGU52W.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-7IZZLHXL.mjs";
import "./chunk-S47CVTVK.mjs";

// src/routes/sales-channels/sales-channel-metadata/sales-channel-metadata.tsx
import { useParams } from "react-router-dom";
import { jsx } from "react/jsx-runtime";
var SalesChannelMetadata = () => {
  const { id } = useParams();
  const {
    sales_channel: salesChannel,
    isPending,
    isError,
    error
  } = useSalesChannel(id);
  const { mutateAsync, isPending: isMutating } = useUpdateSalesChannel(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(RouteDrawer, { children: /* @__PURE__ */ jsx(
    MetadataForm,
    {
      isPending,
      isMutating,
      hook: mutateAsync,
      metadata: salesChannel?.metadata
    }
  ) });
};
export {
  SalesChannelMetadata as Component
};
