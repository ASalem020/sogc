"use client";
import { lazy, Suspense } from "react";

// Lazy load layout components
const Navbar = lazy(() => import("../navbar/Navbar"));
const Footer = lazy(() => import("../Footer/Footer"));
const HeaderSocial = lazy(() => import("../header-social/HeaderSocial"));
const FloatingContact = lazy(() => import("../FloatingContact/FloatingContact"));
const Breadcrumb = lazy(() => import("../Breadcrumb/Breadcrumb"));
const LoadingScreen = lazy(() => import("../LoadingScreen/LoadingScreen"));

export function LazyNavbar() {
  return (
    <Suspense fallback={null}>
      <Navbar />
    </Suspense>
  );
}

export function LazyFooter() {
  return (
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  );
}

export function LazyHeaderSocial() {
  return (
    <Suspense fallback={null}>
      <HeaderSocial />
    </Suspense>
  );
}

export function LazyFloatingContact() {
  return (
    <Suspense fallback={null}>
      <FloatingContact />
    </Suspense>
  );
}

export function LazyBreadcrumb() {
  return (
    <Suspense fallback={null}>
      <Breadcrumb />
    </Suspense>
  );
}

export function LazyLoadingScreen() {
  return (
    <Suspense fallback={null}>
      <LoadingScreen />
    </Suspense>
  );
}

