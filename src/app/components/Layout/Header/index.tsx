"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/app/components/Auth/SignIn";
import SignUp from "@/app/components/Auth/SignUp";
import LanguageSwitcher from "./LanguageSwitcher";
import { Icon } from "@iconify/react/dist/iconify.js";
import { HeaderItem } from "@/app/types/menu";
import { useLocale } from "next-intl";
import { getNavigationData } from "@/data/navigation";
import { useTranslations } from "next-intl";

const Header: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("common");
  const [headerData, setHeaderData] = useState<HeaderItem[]>([]);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use navigation data instead of API
    const navData = getNavigationData(locale as 'ar' | 'en' | 'fr');
    setHeaderData(navData);
  }, [locale]);

  const handleScroll = () => {
    setSticky(window.scrollY >= 10);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  }, [navbarOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen, handleClickOutside]);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        sticky ? " shadow-lg bg-white py-4" : "shadow-none py-4"
      }`}
    >
      <div>
        <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex grow items-center gap-6 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button
              className="hidden lg:block bg-transparent text-primary border hover:bg-primary border-primary hover:text-white duration-300 px-6 py-2 rounded-lg hover:cursor-pointer"
              onClick={() => {
                setIsSignInOpen(true);
              }}
            >
              {t("signIn")}
            </button>
            {isSignInOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
                <div
                  ref={signInRef}
                  className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-dark_grey/90 backdrop-blur-md bg-white"
                >
                  <button
                    onClick={() => setIsSignInOpen(false)}
                    className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
                    aria-label="Close Sign In Modal"
                  >
                    <Icon
                      icon="material-symbols:close-rounded"
                      width={24}
                      height={24}
                      className="text-black hover:text-primary inline-block hover:cursor-pointer"
                    />
                  </button>
                  <Signin />
                </div>
              </div>
            )}
            <button
              className="hidden lg:block bg-primary text-white text-base font-medium hover:bg-transparent duration-300 hover:text-primary border border-primary px-6 py-2 rounded-lg hover:cursor-pointer"
              onClick={() => {
                setIsSignUpOpen(true);
              }}
            >
              {t("signUp")}
            </button>
            {isSignUpOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
                <div
                  ref={signUpRef}
                  className="relative mx-auto bg-white w-full max-w-md overflow-hidden rounded-lg bg-dark_grey/90 backdrop-blur-md px-8 pt-14 pb-8 text-center"
                >
                  <button
                    onClick={() => setIsSignUpOpen(false)}
                    className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
                    aria-label="Close Sign Up Modal"
                  >
                    <Icon
                      icon="material-symbols:close-rounded"
                      width={24}
                      height={24}
                      className="text-black hover:text-primary inline-block hover:cursor-pointer"
                    />
                  </button>
                  <SignUp />
                </div>
              </div>
            )}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-xl bg-thom-light/50 hover:bg-primary/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`block h-0.5 bg-thom-dark transition-all duration-300 ${navbarOpen ? 'w-6' : 'w-6'}`}></span>
                <span className={`block h-0.5 bg-thom-dark transition-all duration-300 ${navbarOpen ? 'w-6' : 'w-4'}`}></span>
                <span className={`block h-0.5 bg-thom-dark transition-all duration-300 ${navbarOpen ? 'w-6' : 'w-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 h-full w-full bg-white shadow-2xl transform transition-transform duration-500 max-w-xs z-50 ltr:left-0 rtl:right-0 ${
            navbarOpen ? "translate-x-0" : "ltr:-translate-x-full rtl:translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold text-midnight_text">
              <Logo />
            </h2>
            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-black/30 rounded-full p-1 text-white"
              aria-label="Close menu Modal"
            >
              <Icon
                icon={"material-symbols:close-rounded"}
                width={24}
                height={24}
              />
            </button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className="mt-4 flex flex-col gap-4 w-full">
              <LanguageSwitcher />
              <button
                className="bg-primary text-white px-4 py-2 rounded-lg border  border-primary hover:text-primary hover:bg-transparent hover:cursor-pointer transition duration-300 ease-in-out"
                onClick={() => {
                  setIsSignInOpen(true);
                  setNavbarOpen(false);
                }}
              >
                {t("signIn")}
              </button>
              <button
                className="bg-primary text-white px-4 py-2 rounded-lg border  border-primary hover:text-primary hover:bg-transparent hover:cursor-pointer transition duration-300 ease-in-out"
                onClick={() => {
                  setIsSignUpOpen(true);
                  setNavbarOpen(false);
                }}
              >
                {t("signUp")}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
