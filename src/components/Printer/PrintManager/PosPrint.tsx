"use client";

import { ReactNode, useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface POSPrintProps {
    children: ReactNode;
    documentTitle?: string;
}

export default function POSPrint({
    children,
    documentTitle = "document",
}: POSPrintProps) {
    const printRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef: printRef,
        documentTitle: `${documentTitle}-${Date.now()}`,
        pageStyle: `
            @font-face {
                font-family: "Hind Siliguri";
                src: url("/fonts/HindSiliguri-Regular.woff2") format("woff2");
                font-weight: 400;
                font-style: normal;
                font-display: block;
            }

            @font-face {
                font-family: "Hind Siliguri";
                src: url("/fonts/HindSiliguri-Bold.woff2") format("woff2");
                font-weight: 700;
                font-style: normal;
                font-display: block;
            }

            @page {
                size: 80mm auto;
                margin: 0;
            }

            html,
            body {
                margin: 0 !important;
                padding: 0 !important;
                width: 80mm !important;
                min-width: 80mm !important;
                background: #ffffff !important;
                font-family: "Hind Siliguri", sans-serif !important;
            }

            body {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }

            *,
            *::before,
            *::after {
                font-family: "Hind Siliguri", sans-serif !important;
            }

            .pos-print-wrapper {
                width: 80mm !important;
                min-width: 80mm !important;
                max-width: 80mm !important;
                margin: 0 !important;
                padding: 0 !important;
                background: #ffffff !important;
                font-family: "Hind Siliguri", sans-serif !important;
            }

            .pos-print-container {
                width: 80mm !important;
                min-width: 80mm !important;
                max-width: 80mm !important;
                margin: 0 !important;
                padding: 0 !important;
                background: #ffffff !important;
                font-family: "Hind Siliguri", sans-serif !important;
            }

            .pos-print-button {
                display: none !important;
            }

            .print-page-break {
                page-break-before: always !important;
                break-before: page !important;
            }

            @media print {
                html,
                body {
                    width: 80mm !important;
                    min-width: 80mm !important;
                    max-width: 80mm !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    overflow: visible !important;
                }

                .pos-print-wrapper,
                .pos-print-container {
                    width: 80mm !important;
                    min-width: 80mm !important;
                    max-width: 80mm !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    overflow: visible !important;
                }
            }
        `,
    });

    return (
        <div className="flex w-full min-w-0 flex-col items-center">
            <div className="w-full min-w-0 overflow-x-auto overflow-y-visible">
                <div
                    ref={printRef}
                    className="pos-print-wrapper mx-auto w-[80mm] min-w-[80mm] max-w-[80mm] bg-white"

                >
                    <div
                        className="pos-print-container w-[80mm] min-w-[80mm] max-w-[80mm] bg-white"
                    >
                        {children}
                    </div>
                </div>
            </div>

            <div className="pos-print-button mt-3 flex w-full justify-end">
                <button
                    type="button"
                    onClick={handlePrint}
                    className="rounded-md bg-purple-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-purple-700"
                >
                    প্রিন্ট করুন
                </button>
            </div>
        </div>
    );
}