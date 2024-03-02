import React from "react";

import { AnnouncementContext } from "@/contexts/AnnouncementContext";

export function useAnnouncementContext() {
  const announcementContext = React.useContext(AnnouncementContext);

  return announcementContext;
}
