"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Breadcumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <div
      style={{ marginTop: "80px" }}
      className="breadcrumbs panel z-1 py-2 bg-secondary dark:bg-gray-100 dark:bg-opacity-5 dark:text-white"
    >
      <div className="container max-w-xl">
        <ul className="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold">
          <li>
            <Image
              alt="icon"
              className="me-1"
              src="/assets/images/common/icons/home.svg"
              width="18"
              height="18"
            />
          </li>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;
            return (
              <React.Fragment key={href}>
                <li>
                  <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
                </li>
                <li>
                  {isLast ? (
                    <span className="opacity-50">{segment}</span>
                  ) : (
                    <Link href={href}>{segment}</Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
