import { useEffect, useState } from "react";
import type { UserProfile } from "../types";

const STORAGE_KEY = "hs-helper-profiles-v1";
const CURRENT_USER_KEY = "hs-helper-current-user-v1";

function createId() {
  return crypto.randomUUID();
}

export function useProfiles() {
  const [profiles, setProfiles] = useState<UserProfile[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return [];
    }

    try {
      return JSON.parse(saved) as UserProfile[];
    } catch {
      return [];
    }
  });

  const [currentUserId, setCurrentUserId] = useState(
    () => localStorage.getItem(CURRENT_USER_KEY) ?? "",
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
  }, [profiles]);

  useEffect(() => {
    if (currentUserId) {
      localStorage.setItem(CURRENT_USER_KEY, currentUserId);
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  }, [currentUserId]);

  const currentProfile =
    profiles.find((profile) => profile.id === currentUserId) ?? null;

  function addProfile(name: string) {
    const cleanName = name.trim();

    if (!cleanName) {
      return false;
    }

    const alreadyExists = profiles.some(
      (profile) =>
        profile.name.toLocaleLowerCase() === cleanName.toLocaleLowerCase(),
    );

    if (alreadyExists) {
      return false;
    }

    const newProfile: UserProfile = {
      id: createId(),
      name: cleanName,
      completedAchievements: [],
    };

    setProfiles((currentProfiles) => [...currentProfiles, newProfile]);
    setCurrentUserId(newProfile.id);

    return true;
  }

  function toggleAchievement(achievementId: string) {
    if (!currentUserId) {
      return;
    }

    setProfiles((currentProfiles) =>
      currentProfiles.map((profile) => {
        if (profile.id !== currentUserId) {
          return profile;
        }

        const isCompleted =
          profile.completedAchievements.includes(achievementId);

        return {
          ...profile,
          completedAchievements: isCompleted
            ? profile.completedAchievements.filter(
                (id) => id !== achievementId,
              )
            : [...profile.completedAchievements, achievementId],
        };
      }),
    );
  }

  return {
    profiles,
    currentUserId,
    currentProfile,
    setCurrentUserId,
    addProfile,
    toggleAchievement,
  };
}