import React, { useState } from "react";

import { IAnnouncement } from "@/@types";

interface IAnnouncementContext {
  announcements: IAnnouncement[] | [];
  setAnnouncements: React.Dispatch<React.SetStateAction<IAnnouncement[] | []>>;
  selectedAnnouncement: IAnnouncement | null;
  setSelectedAnnouncement: React.Dispatch<
    React.SetStateAction<IAnnouncement | null>
  >;
}

export const AnnouncementContext = React.createContext<IAnnouncementContext>(
  {} as IAnnouncementContext
);

interface IContextProps {
  children: React.ReactNode;
}

export function AnnouncementProvider({ children }: IContextProps) {
  const [announcements, setAnnouncements] = useState<IAnnouncement[] | []>(
    Array.from({ length: 10 }).map((item, index) => {
      return {
        key: index,
        item: index,
        status: index % 2 === 0 ? "NOVO" : "USADO",
      };
    })
  );
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<IAnnouncement | null>(null);

  return (
    <AnnouncementContext.Provider
      value={{
        announcements,
        setAnnouncements,
        selectedAnnouncement,
        setSelectedAnnouncement,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
}
