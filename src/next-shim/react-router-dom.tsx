import NextLink from "next/link";
import React from "react";

type LinkProps = React.PropsWithChildren<{
  to: string;
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  [key: string]: unknown;
}>;

export function Link({ to, children, ...props }: LinkProps) {
  return (
    <NextLink href={to} {...(props as Record<string, unknown>)}>
      {children as React.ReactNode}
    </NextLink>
  );
}

export function useLocation(): { pathname: string } {
  const [pathname, setPathname] = React.useState<string>(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );
  React.useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  return { pathname };
}

// Minimal stubs to avoid accidental imports; not used in Next runtime
type AnyPropsWithChildren = React.PropsWithChildren<Record<string, unknown>>;

export const BrowserRouter: React.FC<AnyPropsWithChildren> = ({ children }) => {
  if (process.env.NODE_ENV !== "production") {
    throw new Error("BrowserRouter is not available in Next.js environment.");
  }
  return <>{children}</>;
};

export const Routes: React.FC<AnyPropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export const Route: React.FC<AnyPropsWithChildren> = () => {
  return null;
};
