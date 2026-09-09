import { TDeliveryResponse } from "@/interface/delivery";
import { TVataInformation } from "@/interface/vata";
import { formatBanglaDate } from "@/utils/formatBanglaDate";
import { toBanglaNumber } from "@/utils/toBanglaNumber";

interface POS80DeliveryPrintProps {
    delivery: TDeliveryResponse;
    vataInformation: TVataInformation;
    copyType?: "customer" | "office";
    compact?: boolean;
}

export default function POS80DeliveryPrint({
    delivery,
    vataInformation,
    compact = false,
    copyType = "customer",
}: POS80DeliveryPrintProps) {
    const isOffice = copyType === "office";
    const deliveryQuantity = Number(delivery?.deliveryReceived ?? 0);

    return (
        <div className="w-[80mm] bg-white text-black">
            <div
                className={`mx-auto w-full bg-white px-[3mm] ${compact ? "py-[1mm]" : "py-[2mm]"
                    }`}
            >
                <div className="text-center">
                    <div
                        className={`mx-auto inline-block border border-black px-2 py-0.5 font-bold ${compact ? "text-[6px]" : "text-[8px]"
                            }`}
                    >
                        {isOffice ? "অফিস কপি" : "কাস্টমার কপি"}
                    </div>

                    <div
                        className={`font-bold ${compact ? "mt-1 text-[14px]" : "mt-1.5 text-[18px]"
                            }`}
                    >
                        চালান
                    </div>

                    <div
                        className={`font-bold ${compact ? "mt-0.5 text-[13px]" : "mt-1 text-[16px]"
                            }`}
                    >
                        {vataInformation?.nameBangla || "-"}
                    </div>

                    <div
                        className={`font-medium ${compact ? "mt-0 text-[6px]" : "mt-0.5 text-[8px]"
                            }`}
                    >
                        {vataInformation?.shortDescription || "-"}
                    </div>

                    <div
                        className={`mt-0.5 border-y border-black font-medium ${compact
                                ? "py-0.5 text-[6px]"
                                : "py-1 text-[8px]"
                            }`}
                    >
                        {vataInformation?.additionalAddress || "-"}
                        {vataInformation?.address
                            ? `, ${vataInformation.address}`
                            : ""}
                    </div>

                    <div
                        className={`font-semibold ${compact ? "mt-0.5 text-[6px]" : "mt-1 text-[8px]"
                            }`}
                    >
                        যোগাযোগ:{" "}
                        {toBanglaNumber(
                            vataInformation?.challansPhoneNumber
                        ) || "-"}
                    </div>
                </div>

                <div
                    className={`mt-1.5 border-y border-black ${compact ? "py-1" : "py-1.5"
                        }`}
                >
                    <div
                        className={`grid grid-cols-2 gap-y-0.5 font-semibold ${compact ? "text-[6px]" : "text-[8px]"
                            }`}
                    >
                        <div>
                            চালান নং:{" "}
                            {toBanglaNumber(
                                delivery?.invoice?.serial ?? "-"
                            )}
                        </div>

                        <div className="text-right">
                            ডেলিভারি নং:{" "}
                            {toBanglaNumber(delivery?.deliveryNo ?? "-")}
                        </div>

                        <div className="col-span-2 text-center">
                            তারিখ:{" "}
                            {delivery?.deliveryDate
                                ? formatBanglaDate({
                                    date: delivery.deliveryDate,
                                })
                                : "-"}
                        </div>
                    </div>
                </div>

                <div
                    className={`border-b border-black ${compact ? "py-1.5" : "py-2"
                        }`}
                >
                    <div
                        className={`grid grid-cols-[42px_7px_1fr] gap-y-0.5 font-semibold ${compact ? "text-[7px]" : "text-[9px]"
                            }`}
                    >
                        <span>নাম</span>
                        <span>:</span>
                        <span>
                            {delivery?.invoice?.customer?.name || "-"}
                        </span>

                        <span>ঠিকানা</span>
                        <span>:</span>
                        <span>
                            {delivery?.invoice?.customer?.address || "-"}
                        </span>

                        <span>মোবাইল</span>
                        <span>:</span>
                        <span>
                            {toBanglaNumber(
                                delivery?.invoice?.customer?.phoneNumber
                            ) || "-"}
                        </span>

                        <span>ড্রাইভার</span>
                        <span>:</span>
                        <span>{delivery?.driver?.name || "-"}</span>

                        <span>গাড়ি নং</span>
                        <span>:</span>
                        <span>
                            {toBanglaNumber(delivery?.carNo) || "-"}
                        </span>
                    </div>
                </div>

                <table
                    className={`mt-1 w-full border-collapse border border-black ${compact ? "text-[7px]" : "text-[9px]"
                        }`}
                >
                    <thead>
                        <tr className="font-bold">
                            <th className="border border-black px-1 py-0.5 text-center">
                                চালান নং
                            </th>
                            <th className="border border-black px-1 py-0.5 text-center">
                                শ্রেণি
                            </th>
                            <th className="border border-black px-1 py-0.5 text-center">
                                পরিমাণ
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="border border-black px-1 py-1 text-center font-semibold">
                                {toBanglaNumber(
                                    delivery?.invoice?.serial ?? "-"
                                )}
                            </td>

                            <td className="border border-black px-1 py-1 text-center">
                                {delivery?.class || "-"}
                            </td>

                            <td className="border border-black px-1 py-1 text-center">
                                {toBanglaNumber(deliveryQuantity)}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div
                    className={`grid grid-cols-3 gap-1.5 ${compact ? "mt-5" : "mt-7"
                        }`}
                >
                    <div className="text-center">
                        <div
                            className={`border-t border-dotted border-black font-semibold ${compact
                                    ? "pt-0.5 text-[5px]"
                                    : "pt-1 text-[7px]"
                                }`}
                        >
                            কাস্টমারের স্বাক্ষর
                        </div>
                    </div>

                    <div className="text-center">
                        <div
                            className={`border-t border-dotted border-black font-semibold ${compact
                                    ? "pt-0.5 text-[5px]"
                                    : "pt-1 text-[7px]"
                                }`}
                        >
                            ড্রাইভারের স্বাক্ষর
                        </div>
                    </div>

                    <div className="text-center">
                        <div
                            className={`border-t border-dotted border-black font-semibold ${compact
                                    ? "pt-0.5 text-[5px]"
                                    : "pt-1 text-[7px]"
                                }`}
                        >
                            ম্যানেজারের স্বাক্ষর
                        </div>
                    </div>
                </div>

                <div
                    className={`border-t border-black text-center ${compact ? "mt-1 pt-1" : "mt-2 pt-1"
                        }`}
                >
                    <p
                        className={`font-medium ${compact ? "text-[6px]" : "text-[8px]"
                            }`}
                    >
                        উপরোক্ত চালান অনুযায়ী মালামাল বুঝিয়া পাইলাম
                    </p>
                </div>

                <div
                    className={`border-t border-dashed border-black text-center ${compact ? "mt-1 pt-0.5" : "mt-1.5 pt-1"
                        }`}
                >
                    <span
                        className={`font-semibold ${compact ? "text-[5px]" : "text-[7px]"
                            }`}
                    >
                        ধন্যবাদ
                    </span>
                </div>
            </div>
        </div>
    );
}