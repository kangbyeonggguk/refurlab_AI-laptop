// AuthLinks.js
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

import "./AuthLinks.css";

const AuthLinks = ({ isLoggedIn, logoutUser, platformType, isAdmin }) => {
  const { isLoading, sendRequest, clearError, setIsLoading } = useHttpClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      const newTimeoutId = setTimeout(() => {
        handleLogout();
      }, 30 * 60 * 1000);

      setTimeoutId(newTimeoutId);
    };

    const handleUserActivity = () => {
      resetTimeout();
    };
    let isPageFocused = true;

    const handleFocusChange = () => {
      isPageFocused = document.hasFocus();
    };

    const handleBeforeUnload = () => {
      if (!isPageFocused) {
        handleLogout();
      }
    };

    window.addEventListener("focus", handleFocusChange);
    window.addEventListener("blur", handleFocusChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [timeoutId]);

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessTokenExpiration");

        const url = new URL("http://127.0.0.1:8000/accounts/logout");
        url.searchParams.append("refresh_token_key", refreshToken);

        await dispatch(logoutUser());

        localStorage.setItem("isLoggedIn", "false");

        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <React.Fragment>
      {!isLoggedIn ? (
        <>
          <li className="header_links_auth_list">
            <NavLink to="/signup">회원가입</NavLink>
          </li>
          <span className="auth_vector"></span>
          <li className="header_links_auth_list">
            <NavLink to="/login">로그인</NavLink>
          </li>
        </>
      ) : (
        <>
          {platformType === "R" && !isAdmin && (
            <>
              <li className="header_links_auth_list">
                <NavLink to="/mypage">내 정보 수정</NavLink>
              </li>
              <span className="auth_vector"></span>

              <li className="header_links_auth_list">
                <NavLink to="/main" onClick={handleLogout}>
                  로그아웃
                </NavLink>
              </li>
            </>
          )}

          {["K", "N"].includes(platformType) && !isAdmin && (
            <>
              <li className="header_links_auth_list">
                <NavLink to="/main" onClick={handleLogout}>
                  로그아웃
                </NavLink>
              </li>
            </>
          )}

          {platformType === "R" && isAdmin && (
            <>
              <li className="header_links_auth_list">
                <NavLink to="/mypage">내 정보 수정</NavLink>
              </li>
              <span className="auth_vector"></span>
              <li className="header_links_auth_list">
                <NavLink to="/admin">관리자</NavLink>
              </li>
              <span className="auth_vector"></span>
              <li className="header_links_auth_list">
                <NavLink to="/main" onClick={handleLogout}>
                  로그아웃
                </NavLink>
              </li>
            </>
          )}
        </>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.login,
    platformType: state.user.platformType,
    isAdmin: state.user.isAdmin,
  };
};

const mapDispatchToProps = {
  loginUser,
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLinks);
