import type { Metadata } from "next";

import { ProductsPageFindaComponent } from "./component";

export const metadata: Metadata = {
  title: "finda | leontm.me",
  robots: {
    follow: false,
    index: false,
  },
};
export default function ProductsFinda() {
  return <ProductsPageFindaComponent />;
}
