"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// we avoid importing `useSearchParams` at the top level because
// calling it during SSR (e.g. while prerendering the 404 page)
// triggers a bailout warning.  Instead we will read the query
// string manually in an effect.
import Loader from "./Loader";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  // track search params manually inside an effect so we don't call
  // the hook during SSR.
  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200); // smooth delay

    return () => clearTimeout(timeout);
  }, [pathname]);


  if (!loading) return null;

  return <Loader />;
}
