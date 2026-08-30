import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type PortfolioRole = 'qa' | 'pm';

const STORAGE_KEY = 'portfolio-role';

export const usePortfolioRole = (): { isPM: boolean; role: PortfolioRole } => {
  const { pathname } = useLocation();

  const roleFromPath = pathname.startsWith('/pm')
    ? 'pm'
    : pathname.startsWith('/qa')
      ? 'qa'
      : null;

  const [storedRole, setStoredRole] = useState<PortfolioRole>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'pm' ? 'pm' : 'qa';
  });

  useEffect(() => {
    if (roleFromPath && roleFromPath !== storedRole) {
      setStoredRole(roleFromPath);
      localStorage.setItem(STORAGE_KEY, roleFromPath);
    }
  }, [roleFromPath, storedRole]);

  const isPM = roleFromPath === 'pm' || (roleFromPath === null && storedRole === 'pm');
  return { isPM, role: isPM ? 'pm' : 'qa' };
};
