import { useEffect } from "react";
import { useRouter } from "next/router";

const MESSAGE =
  "You have an active session in progress. Leaving will lose your progress. Are you sure?";

/**
 * Warns the user before leaving the page (browser close, refresh, back/forward)
 * when `when` is true. Also attempts to intercept Next.js client-side navigation
 * by showing a confirmation prompt.
 */
export function useNavigationGuard(when: boolean) {
  const router = useRouter();

  useEffect(() => {
    if (!when) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = MESSAGE;
      return MESSAGE;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Intercept client-side navigation via routeChangeStart
    const handleRouteChange = (url: string) => {
      // Don't intercept navigation to the same page
      if (url === router.asPath) return;
      if (!window.confirm(MESSAGE)) {
        // Throwing an error is the only way to cancel navigation in Next.js pages router
        throw "Route change cancelled by user.";
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [when, router]);
}
