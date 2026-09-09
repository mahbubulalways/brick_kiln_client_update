"use client";

import { TVataInformation } from "@/interface/vata";
import { IChallanForDataShow } from "@/types/types";
import { formatBanglaDate } from "@/utils/formatBanglaDate";
import { toBanglaNumber } from "@/utils/toBanglaNumber";

interface POS80CustomerPrintProps {
    invoice: IChallanForDataShow;
    vataInformation: TVataInformation;
    copyType?: "customer" | "office";
}

const POS80CustomerPrint = ({
    invoice,
    vataInformation,
    copyType = "customer",
}: POS80CustomerPrintProps) => {
    const productPrice = Number(invoice?.productPrice || 0);
    const discount = Number(invoice?.discount || 0);
    const carRent = Number(invoice?.carRent || 0);
    const totalPrice = Number(invoice?.totalPrice || 0);
    const cash = Number(invoice?.cash || 0);
    const due = Number(invoice?.due || 0);
    const challanItems = invoice?.items || [];

    const formatNumber = (value: unknown) => {
        if (value === null || value === undefined || value === "") {
            return "০";
        }

        const number = Number(value);

        if (Number.isNaN(number)) {
            return "০";
        }

        return number.toLocaleString("bn-BD", {
            maximumFractionDigits: 2,
        });
    };

    return (
        <div className="pos-invoice-preview w-full bg-white text-black">
            <div className="pos-invoice mx-auto w-[76mm] px-1.5 py-1.5 text-black">
                <div className="space-y-0.5 text-center">
                    <h1 className="text-[18px] font-bold leading-tight">
                        {vataInformation?.nameBangla || "-"}
                    </h1>

                    {vataInformation?.shortDescription && (
                        <p className="text-[8.5px] leading-tight">
                            {vataInformation.shortDescription}
                        </p>
                    )}

                    <p className="text-[8.5px] leading-tight">
                        {vataInformation?.additionalAddress || "-"}
                        {vataInformation?.address
                            ? `, ${vataInformation.address}`
                            : ""}
                    </p>

                    <p className="text-[8.5px] font-semibold leading-tight">
                        যোগাযোগ:{" "}
                        {vataInformation?.challansPhoneNumber || "-"}
                    </p>
                </div>

                <div className="my-1 border-t border-black" />

                <div className="flex items-center justify-between text-[9px] font-semibold">
                    <div>
                        চালান{" "}
                        <span className="font-bold">
                            #{toBanglaNumber(invoice?.serial)}
                        </span>
                    </div>

                    <div>
                        {formatBanglaDate({
                            date: invoice?.challanDate,
                        })}
                    </div>
                </div>

                <div className="my-1 border-t border-dashed border-black" />

                <div className="text-center">
                    <p className="text-[10px] font-bold leading-tight">
                        {copyType === "office"
                            ? "অফিস কপি"
                            : "কাস্টমার কপি"}
                    </p>
                </div>

                <div className="my-1 border-t border-dashed border-black" />

                <div className="space-y-0.5 text-[9px] leading-tight">
                    <div className="flex">
                        <span className="w-[36px] shrink-0 font-bold">
                            নাম
                        </span>

                        <span className="flex-1 font-medium">
                            {invoice?.customer?.name || "-"}
                        </span>
                    </div>

                    <div className="flex">
                        <span className="w-[36px] shrink-0 font-bold">
                            ঠিকানা
                        </span>

                        <span className="flex-1">
                            {invoice?.customer?.address || "-"}
                        </span>
                    </div>

                    <div className="flex">
                        <span className="w-[36px] shrink-0 font-bold">
                            মোবাইল
                        </span>

                        <span className="flex-1">
                            {invoice?.customer?.phoneNumber || "-"}
                        </span>
                    </div>
                </div>

                <div className="my-1 border-t border-dashed border-black" />

                <table className="w-full border-collapse text-[8.5px]">
                    <thead>
                        <tr>
                            <th className="pb-1 text-left font-bold">
                                শ্রেণি
                            </th>

                            <th className="pb-1 text-center font-bold">
                                পরিমাণ
                            </th>

                            <th className="pb-1 text-center font-bold">
                                দর
                            </th>

                            <th className="pb-1 text-right font-bold">
                                মূল্য
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {challanItems.length > 0 ? (
                            challanItems.map((item, index: number) => (
                                <tr
                                    key={item?.id || index}
                                    className="border-t border-dotted border-black/30"
                                >
                                    <td className="py-0.5 text-left align-top">
                                        {item?.class || "-"}
                                    </td>

                                    <td className="py-0.5 text-center align-top">
                                        {formatNumber(item?.quantity)}
                                    </td>

                                    <td className="py-0.5 text-center align-top">
                                        {formatNumber(item?.rate)}
                                    </td>

                                    <td className="py-0.5 text-right align-top font-semibold">
                                        {formatNumber(item?.price)}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="py-1 text-center"
                                >
                                    কোনো পণ্য পাওয়া যায়নি
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="my-1 border-t border-black" />

                <div className="space-y-0.5 text-[9px]">
                    <div className="flex items-center justify-between">
                        <span>পণ্যের মূল্য</span>

                        <span className="font-medium">
                            {formatNumber(productPrice)} টাকা
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span>ছাড়</span>

                        <span className="font-medium">
                            {formatNumber(discount)} টাকা
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span>গাড়ি ভাড়া</span>

                        <span className="font-medium">
                            {formatNumber(carRent)} টাকা
                        </span>
                    </div>
                </div>

                <div className="my-1 border-t border-dashed border-black" />

                <div className="space-y-0.5">
                    <div className="flex items-center justify-between text-[11px] font-bold">
                        <span>সর্বমোট</span>

                        <span>
                            {formatNumber(totalPrice)} টাকা
                        </span>
                    </div>

                    <div className="flex items-center justify-between text-[9px]">
                        <span>জমা</span>

                        <span>
                            {formatNumber(cash)} টাকা
                        </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-bold">
                        <span>বাকি</span>

                        <span>
                            {formatNumber(due)} টাকা
                        </span>
                    </div>
                </div>

                <div className="my-1.5 border-t border-black" />

                <div className="grid grid-cols-2 gap-3 text-center text-[8px]">
                    <div>
                        <div className="mx-auto mb-0.5 h-4 w-[70px] border-b border-black" />

                        <p className="font-semibold">
                            গ্রাহকের স্বাক্ষর
                        </p>
                    </div>

                    <div>
                        <div className="mx-auto mb-0.5 h-4 w-[70px] border-b border-black" />

                        <p className="font-semibold">
                            ম্যানেজারের স্বাক্ষর
                        </p>
                    </div>
                </div>

                <div className="mt-1.5 text-center">
                    <p className="text-[8.5px] font-medium leading-tight">
                        উত্তর চালান অনুযায়ী মালগুলো বুঝিয়ে পাইলাম
                    </p>
                </div>
            </div>
        </div>
    );
};

export default POS80CustomerPrint;