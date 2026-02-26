'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * 检查管理员登录状态的 Hook
 * @returns {Object} { isAuthenticated: boolean, isLoading: boolean, logout: () => void }
 */
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 检查登录状态
    const checkAuth = () => {
      const loginTime = localStorage.getItem('cegao_admin_login_time');
      const isLoggedIn = localStorage.getItem('cegao_admin_login') === 'true';

      // 检查是否在 24 小时内登录
      if (isLoggedIn && loginTime) {
        const loginDate = new Date(parseInt(loginTime));
        const now = new Date();
        const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);

        if (hoursDiff < 24) {
          setIsAuthenticated(true);
        } else {
          // 超过 24 小时，清除登录状态
          localStorage.removeItem('cegao_admin_login');
          localStorage.removeItem('cegao_admin_login_time');
        }
      }

      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem('cegao_admin_login');
    localStorage.removeItem('cegao_admin_login_time');
    router.push('/admin/login');
  };

  return { isAuthenticated, isLoading, logout };
}
