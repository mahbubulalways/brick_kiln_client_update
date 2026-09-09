"use client";

import { ReactNode, useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface A4PrintProps {
    children: ReactNode;
    documentTitle?: string;
}

const A4_PADDING = {
    top: 10,
    bottom: 10,
    left: 24,
    right: 24,
};

export default function A4Print({
    children,
    documentTitle = "document",
}: A4PrintProps) {
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
                size: A4 portrait;
                margin: 0;
            }

            html,
            body {
                margin: 0 !important;
                padding: 0 !important;
                width: 210mm !important;
                min-width: 210mm !important;
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
                box-sizing: border-box !important;
                font-family: "Hind Siliguri", sans-serif !important;
            }

            .a4-print-wrapper {
                width: 210mm !important;
                min-width: 210mm !important;
                max-width: 210mm !important;
                min-height: 297mm !important;
                margin: 0 !important;
                padding: 0 !important;
                background: #ffffff !important;
                overflow: hidden !important;
                font-family: "Hind Siliguri", sans-serif !important;
            }

            .a4-print-container {
                width: 210mm !important;
                min-width: 210mm !important;
                max-width: 210mm !important;
                margin: 0 !important;
                padding: 0 !important;
                background: #ffffff !important;
                font-family: "Hind Siliguri", sans-serif !important;
            }

            .a4-invoice-preview,
            .a4-invoice,
            .a4-combined-print {
                font-family: "Hind Siliguri", sans-serif !important;
            }

            .a4-invoice-preview *,
            .a4-invoice *,
            .a4-combined-print * {
                font-family: "Hind Siliguri", sans-serif !important;
            }

            .a4-invoice {
                width: 210mm !important;
                min-width: 210mm !important;
                max-width: 210mm !important;
                min-height: 297mm !important;
                margin: 0 !important;
                padding-top: ${A4_PADDING.top}mm !important;
                padding-bottom: ${A4_PADDING.bottom}mm !important;
                padding-left: ${A4_PADDING.left}mm !important;
                padding-right: ${A4_PADDING.right}mm !important;
                background: #ffffff !important;
                overflow: hidden !important;
            }

            .a4-combined-print {
                width: 210mm !important;
                min-width: 210mm !important;
                max-width: 210mm !important;
                margin: 0 !important;
                padding: 0 !important;
                background: #ffffff !important;
                break-inside: avoid !important;
                page-break-inside: avoid !important;
            }

            .a4-combined-print .a4-invoice {
                min-height: auto !important;
                height: auto !important;
                overflow: visible !important;
            }

            .a4-combined-print > * {
                break-inside: avoid !important;
                page-break-inside: avoid !important;
            }

            .print-page-break {
                display: none !important;
            }

            .a4-print-button {
                display: none !important;
            }

            @media print {
                html,
                body {
                    width: 210mm !important;
                    min-width: 210mm !important;
                    max-width: 210mm !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    overflow: visible !important;
                }

                .a4-print-wrapper,
                .a4-print-container {
                    width: 210mm !important;
                    min-width: 210mm !important;
                    max-width: 210mm !important;
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
                    className="a4-print-wrapper mx-auto w-full max-w-[794px] min-w-0 bg-white"

                >
                    <div
                        className="a4-print-container w-full bg-white"
                    >
                        {children}
                    </div>
                </div>
            </div>

            <div className="a4-print-button mt-3 flex w-full justify-end">
                <button
                    type="button"
                    onClick={handlePrint}
                    className="rounded-md bg-pink-800 px-4 py-2 text-xs font-semibold text-white transition hover:bg-pink-900"
                >
                    প্রিন্ট করুন
                </button>
            </div>
        </div>
    );
}