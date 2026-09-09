import { TDeliveryResponse } from "@/interface/delivery";
import { TVataInformation } from "@/interface/vata";
import { formatBanglaDate } from "@/utils/formatBanglaDate";
import { toBanglaNumber } from "@/utils/toBanglaNumber";

interface A4DeliveryPrintProps {
    delivery: TDeliveryResponse;
    vataInformation: TVataInformation;
    copyType?: "customer" | "office";
    compact?: boolean;
}

export default function A4DeliveryPrint({
    delivery,
    vataInformation,
    compact = false,
    copyType = "customer",
}: A4DeliveryPrintProps) {
    const isOffice = copyType === "office";
    const deliveryQuantity = Number(delivery?.deliveryReceived ?? 0);

    return (
        <div className="w-full bg-[#FFFDF9] text-[#241209]">
            <div
                className={`a4-invoice relative mx-auto w-full overflow-hidden border border-[#D9C7A6] bg-[#FFFDF9] text-[#241209] ${compact
                    ? "px-[34px] py-[14px]"
                    : "px-[34px] py-[22px]"
                    }`}
            >
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
                >
                    <span
                        className="rotate-[-18deg] whitespace-nowrap font-bold text-[#6E1D14] opacity-[0.04]"
                        style={{
                            fontSize: compact ? "120px" : "180px",
                        }}
                    >
                        S · B · M
                    </span>
                </div>

                <div className="pointer-events-none absolute inset-[6px] border border-[#EFE3D0]" />

                <div className="relative">
                    <div
                        className={`flex items-center justify-between ${compact ? "mb-1.5" : "mb-3"
                            }`}
                    >
                        <div className="flex items-center gap-1.5">
                            <div
                                className={`flex items-center justify-center rounded-full border-[1.5px] border-[#A9793D] font-bold leading-none text-[#6E1D14] ${compact
                                    ? "h-6 w-6 text-[8px]"
                                    : "h-9 w-9 text-[11px]"
                                    }`}
                            >
                                SBM
                            </div>

                            <span
                                className={`font-semibold tracking-wide text-[#8C3A22] ${compact ? "text-[7px]" : "text-[9px]"
                                    }`}
                            >
                                ইট পরিবহন চালান
                            </span>
                        </div>

                        <div
                            className={`border border-[#6E1D14] font-semibold leading-none text-[#6E1D14] ${compact
                                ? "px-2 py-0.5 text-[7px]"
                                : "px-2.5 py-1 text-[9px]"
                                }`}
                        >
                            {isOffice ? "অফিস কপি" : "কাস্টমার কপি"}
                        </div>
                    </div>

                    <div className={compact ? "mb-2" : "mb-4"}>
                        <div className="flex items-center justify-center">
                            <div className="flex items-center gap-2">
                                <span className="h-px w-6 bg-[#A9793D]" />
                                <span className="h-1 w-1 rotate-45 bg-[#A9793D]" />

                                <h1
                                    className={`font-bold leading-none tracking-wide text-[#6E1D14] ${compact
                                        ? "text-[13px]"
                                        : "text-[22px]"
                                        }`}
                                >
                                    চালান
                                </h1>

                                <span className="h-1 w-1 rotate-45 bg-[#A9793D]" />
                                <span className="h-px w-6 bg-[#A9793D]" />
                            </div>
                        </div>

                        <h2
                            className={`text-center font-bold leading-tight text-[#3A150E] ${compact
                                ? "mt-1.5 text-[16px]"
                                : "mt-2.5 text-[24px]"
                                }`}
                        >
                            {vataInformation?.nameBangla || "-"}
                        </h2>

                        <p
                            className={`text-center font-medium leading-tight text-[#8C3A22] ${compact
                                ? "mt-0.5 text-[8px]"
                                : "mt-1 text-[11px]"
                                }`}
                        >
                            {vataInformation?.shortDescription || "-"}
                        </p>

                        <div
                            className={`mx-auto mt-1.5 w-fit border-y border-[#A9793D] bg-[#6E1D14] text-center text-white ${compact ? "px-3 py-0.5" : "px-5 py-1"
                                }`}
                        >
                            <p
                                className={`font-medium leading-tight ${compact ? "text-[7px]" : "text-[10px]"
                                    }`}
                            >
                                {vataInformation?.additionalAddress || "-"}
                                {vataInformation?.address
                                    ? `, ${vataInformation.address}`
                                    : ""}
                            </p>
                        </div>

                        <p
                            className={`text-center font-medium leading-tight text-[#6E1D14] ${compact
                                ? "mt-1 text-[8px]"
                                : "mt-1.5 text-[11px]"
                                }`}
                        >
                            যোগাযোগ:{" "}
                            {toBanglaNumber(vataInformation?.challansPhoneNumber) || "-"}
                        </p>
                    </div>

                    <div
                        className={`flex items-center justify-between border-y border-[#6E1D14] font-semibold text-[#6E1D14] ${compact
                            ? "mb-1.5 py-1 text-[8px]"
                            : "mb-3 py-1.5 text-[10px]"
                            }`}
                    >
                        <div>
                            <span className="font-bold">চালান নং</span>
                            <span className="mx-1.5 text-[#A9793D]">|</span>
                            <span>
                                {toBanglaNumber(
                                    delivery?.invoice?.serial ?? "-"
                                )}
                            </span>
                        </div>

                        <div>
                            <span className="font-bold">ডেলিভারি নং</span>
                            <span className="mx-1.5 text-[#A9793D]">|</span>
                            <span>
                                {toBanglaNumber(
                                    delivery?.deliveryNo ?? "-"
                                )}
                            </span>
                        </div>

                        <div>
                            <span className="font-bold">তারিখ</span>
                            <span className="mx-1.5 text-[#A9793D]">|</span>
                            <span>
                                {delivery?.deliveryDate
                                    ? formatBanglaDate({
                                        date: delivery.deliveryDate,
                                    })
                                    : "-"}
                            </span>
                        </div>
                    </div>

                    <div
                        className={`border border-[#E7D8C4] ${compact ? "mb-2 p-1.5" : "mb-4 p-2.5"
                            }`}
                    >
                        <div
                            className={`grid grid-cols-[55px_10px_1fr] items-end ${compact
                                ? "gap-y-1 text-[8px]"
                                : "gap-y-2 text-[11px]"
                                }`}
                        >
                            <span className="font-bold text-[#6E1D14]">
                                নাম
                            </span>

                            <span className="text-center font-bold text-[#A9793D]">
                                :
                            </span>

                            <span
                                className={`min-h-[18px] border-b border-dotted border-[#B98858] font-semibold text-[#3A150E] ${compact
                                    ? "leading-[13px]"
                                    : "leading-[18px]"
                                    }`}
                            >
                                {delivery?.invoice?.customer?.name || "-"}
                            </span>

                            <span className="font-bold text-[#6E1D14]">
                                ঠিকানা
                            </span>

                            <span className="text-center font-bold text-[#A9793D]">
                                :
                            </span>

                            <span
                                className={`min-h-[18px] border-b border-dotted border-[#B98858] font-semibold text-[#3A150E] ${compact
                                    ? "leading-[13px]"
                                    : "leading-[18px]"
                                    }`}
                            >
                                {delivery?.invoice?.customer?.address || "-"}
                            </span>

                            <span className="font-bold text-[#6E1D14]">
                                মোবাইল
                            </span>

                            <span className="text-center font-bold text-[#A9793D]">
                                :
                            </span>

                            <span
                                className={`min-h-[18px] border-b border-dotted border-[#B98858] font-semibold text-[#3A150E] ${compact
                                    ? "leading-[13px]"
                                    : "leading-[18px]"
                                    }`}
                            >
                                {toBanglaNumber(delivery?.invoice?.customer?.phoneNumber) ||
                                    "-"}
                            </span>

                            <span className="font-bold text-[#6E1D14]">
                                ড্রাইভার
                            </span>

                            <span className="text-center font-bold text-[#A9793D]">
                                :
                            </span>

                            <span
                                className={`min-h-[18px] border-b border-dotted border-[#B98858] font-semibold text-[#3A150E] ${compact
                                    ? "leading-[13px]"
                                    : "leading-[18px]"
                                    }`}
                            >
                                {delivery?.driver?.name || "-"}
                            </span>

                            <span className="font-bold text-[#6E1D14]">
                                গাড়ি নং
                            </span>

                            <span className="text-center font-bold text-[#A9793D]">
                                :
                            </span>

                            <span
                                className={`min-h-[18px] border-b border-dotted border-[#B98858] font-semibold text-[#3A150E] ${compact
                                    ? "leading-[13px]"
                                    : "leading-[18px]"
                                    }`}
                            >
                                {toBanglaNumber(delivery?.carNo) || "-"}
                            </span>
                        </div>
                    </div>

                    <table
                        className={`w-full border-collapse border border-[#6E1D14] ${compact ? "text-[8px]" : "text-[10px]"
                            }`}
                    >
                        <thead>
                            <tr className="bg-[#6E1D14] font-bold text-white">
                                <th
                                    className={`border border-[#6E1D14] text-center ${compact
                                        ? "px-1.5 py-1"
                                        : "px-2.5 py-1.5"
                                        }`}
                                >
                                    চালান নং
                                </th>

                                <th
                                    className={`border border-[#6E1D14] text-center ${compact
                                        ? "px-1.5 py-1"
                                        : "px-2.5 py-1.5"
                                        }`}
                                >
                                    শ্রেণি
                                </th>

                                <th
                                    className={`border border-[#6E1D14] text-center ${compact
                                        ? "px-1.5 py-1"
                                        : "px-2.5 py-1.5"
                                        }`}
                                >
                                    পরিমাণ
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td
                                    className={`border border-[#E7D8C4] text-center font-semibold ${compact
                                        ? "px-1.5 py-1"
                                        : "px-2.5 py-1.5"
                                        }`}
                                >
                                    {toBanglaNumber(
                                        delivery?.invoice?.serial ?? "-"
                                    )}
                                </td>

                                <td
                                    className={`border border-[#E7D8C4] text-center ${compact
                                        ? "px-1.5 py-1"
                                        : "px-2.5 py-1.5"
                                        }`}
                                >
                                    {delivery?.class || "-"}
                                </td>

                                <td
                                    className={`border border-[#E7D8C4] text-center ${compact
                                        ? "px-1.5 py-1"
                                        : "px-2.5 py-1.5"
                                        }`}
                                >
                                    {toBanglaNumber(deliveryQuantity)}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div
                        className={`grid grid-cols-3 gap-6 ${compact ? "mt-5" : "mt-9"
                            }`}
                    >
                        <div className="text-center">
                            <div
                                className={`border-t border-dotted border-[#8C3A22] font-semibold text-[#6E1D14] ${compact
                                    ? "pt-0.5 text-[7px]"
                                    : "pt-1.5 text-[9px]"
                                    }`}
                            >
                                কাস্টমারের স্বাক্ষর
                            </div>
                        </div>

                        <div className="text-center">
                            <div
                                className={`border-t border-dotted border-[#8C3A22] font-semibold text-[#6E1D14] ${compact
                                    ? "pt-0.5 text-[7px]"
                                    : "pt-1.5 text-[9px]"
                                    }`}
                            >
                                ড্রাইভারের স্বাক্ষর
                            </div>
                        </div>

                        <div className="text-center">
                            <div
                                className={`border-t border-dotted border-[#8C3A22] font-semibold text-[#6E1D14] ${compact
                                    ? "pt-0.5 text-[7px]"
                                    : "pt-1.5 text-[9px]"
                                    }`}
                            >
                                ম্যানেজারের স্বাক্ষর
                            </div>
                        </div>
                    </div>

                    <div
                        className={`border-t border-[#E7D8C4] text-center ${compact ? "mt-1.5 pt-1" : "mt-3 pt-2"
                            }`}
                    >
                        <p
                            className={`font-medium italic text-[#8C3A22] ${compact ? "text-[7px]" : "text-[9px]"
                                }`}
                        >
                            উপরোক্ত চালান অনুযায়ী মালামাল বুঝিয়া পাইলাম
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}