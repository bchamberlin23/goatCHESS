import { useCallback, useEffect, useState } from "react";

export function useGlobalShortcuts() {
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInputFocused =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (isInputFocused) return;

      if (e.key === "?" || (e.shiftKey && e.key === "/")) {
        e.preventDefault();
        setShortcutsOpen((prev) => !prev);
      }

      if (e.key === "Escape" && shortcutsOpen) {
        setShortcutsOpen(false);
      }
    },
    [shortcutsOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return { shortcutsOpen, setShortcutsOpen };
}
