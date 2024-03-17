import React from "react";

import { AnnouncementContext } from "@/contexts/Announcement.context";

export function useAnnouncementContext() {
  const announcementContext = React.useContext(AnnouncementContext);

  return announcementContext;
}
