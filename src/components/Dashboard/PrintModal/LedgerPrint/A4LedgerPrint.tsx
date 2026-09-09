// "use client";

// import { TPaymentResponse } from "@/interface/payment";
// import { TVataInformation } from "@/interface/vata";
// import { IChallanForDataShow } from "@/types/types";
// import { formatBanglaDate } from "@/utils/formatBanglaDate";
// import { toBanglaNumber } from "@/utils/toBanglaNumber";

// interface A4LedgerPrintProps {
//     ledger: TPaymentResponse;
//     vataInformation: TVataInformation;
//     copyType?: "customer" | "office";
//     compact?: boolean;
// }

// type PrintFormat =
//     | "a4-customer"
//     | "a4-customer-office"
//     | "pos80-customer"
//     | "pos80-customer-office";

// const A4LedgerPrint = ({
//     ledger,
//     vataInformation,
//     copyType = "customer",
//     compact = false,
// }: A4LedgerPrintProps) => {


//     const challanItems = ledger || [];
//     const isOffice = copyType === "office";

//     return (
//         <div className=" w-full bg-[#FFFDF9] text-[#241209]">
//             <div
//                 className={`
//                     a4-ledger
//                     relative
//                     mx-auto
//                     w-full
//                     overflow-hidden
//                     border
//                     border-[#D9C7A6]
//                     bg-[#FFFDF9]
//                     text-[#241209]
//                     ${compact ? "px-[34px] py-[14px]" : "px-[34px] py-[22px]"}
//                 `}
//             >
//                 <div
//                     aria-hidden
//                     className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
//                 >
//                     <span
//                         className="rotate-[-18deg] whitespace-nowrap font-bold text-[#6E1D14] opacity-[0.04]"
//                         style={{
//                             fontSize: compact ? "120px" : "180px",
//                         }}
//                     >
//                         S · B · M
//                     </span>
//                 </div>

//                 <div className="pointer-events-none absolute inset-[6px] border border-[#EFE3D0]" />

//                 <div className="relative">
//                     <div
//                         className={`
//                             flex
//                             items-center
//                             justify-between
//                             ${compact ? "mb-1.5" : "mb-3"}
//                         `}
//                     >
//                         <div className="flex items-center gap-1.5">
//                             <div
//                                 className={`
//                                     flex
//                                     items-center
//                                     justify-center
//                                     rounded-full
//                                     border-[1.5px]
//                                     border-[#A9793D]
//                                     font-bold
//                                     leading-none
//                                     text-[#6E1D14]
//                                     ${compact
//                                         ? "h-6 w-6 text-[8px]"
//                                         : "h-9 w-9 text-[11px]"
//                                     }
//                                 `}
//                             >
//                                 SBM
//                             </div>

//                             <span
//                                 className={`
//                                     font-semibold
//                                     tracking-wide
//                                     text-[#8C3A22]
//                                     ${compact ? "text-[7px]" : "text-[9px]"}
//                                 `}
//                             >
//                                 ক্রমিক-ভিত্তিক চালান
//                             </span>
//                         </div>

//                         <div
//                             className={`
//                                 border
//                                 border-[#6E1D14]
//                                 font-semibold
//                                 leading-none
//                                 text-[#6E1D14]
//                                 ${compact
//                                     ? "px-2 py-0.5 text-[7px]"
//                                     : "px-2.5 py-1 text-[9px]"
//                                 }
//                             `}
//                         >
//                             {isOffice ? "অফিস কপি" : "কাস্টমার কপি"}
//                         </div>
//                     </div>

//                     <div className={compact ? "mb-2" : "mb-4"}>
//                         <div className="flex items-center justify-center">
//                             <div className="flex items-center gap-2">
//                                 <span className="h-px w-6 bg-[#A9793D]" />

//                                 <span className="h-1 w-1 rotate-45 bg-[#A9793D]" />

//                                 <h1
//                                     className={`
//                                         font-bold
//                                         leading-none
//                                         tracking-wide
//                                         text-[#6E1D14]
//                                         ${compact
//                                             ? "text-[13px]"
//                                             : "text-[22px]"
//                                         }
//                                     `}
//                                 >
//                                     চালান
//                                 </h1>

//                                 <span className="h-1 w-1 rotate-45 bg-[#A9793D]" />

//                                 <span className="h-px w-6 bg-[#A9793D]" />
//                             </div>
//                         </div>

//                         <h2
//                             className={`
//                                 text-center
//                                 font-bold
//                                 leading-tight
//                                 text-[#3A150E]
//                                 ${compact
//                                     ? "mt-1.5 text-[16px]"
//                                     : "mt-2.5 text-[24px]"
//                                 }
//                             `}
//                         >
//                             {vataInformation?.nameBangla || "-"}
//                         </h2>

//                         <p
//                             className={`
//                                 text-center
//                                 font-medium
//                                 leading-tight
//                                 text-[#8C3A22]
//                                 ${compact
//                                     ? "mt-0.5 text-[8px]"
//                                     : "mt-1 text-[11px]"
//                                 }
//                             `}
//                         >
//                             {vataInformation?.shortDescription || "-"}
//                         </p>

//                         <div
//                             className={`
//                                 mx-auto
//                                 mt-1.5
//                                 w-fit
//                                 border-y
//                                 border-[#A9793D]
//                                 bg-[#6E1D14]
//                                 text-center
//                                 text-white
//                                 ${compact
//                                     ? "px-3 py-0.5"
//                                     : "px-5 py-1"
//                                 }
//                             `}
//                         >
//                             <p
//                                 className={`
//                                     font-medium
//                                     leading-tight
//                                     ${compact
//                                         ? "text-[7px]"
//                                         : "text-[10px]"
//                                     }
//                                 `}
//                             >
//                                 {vataInformation?.additionalAddress || "-"}
//                                 {vataInformation?.address
//                                     ? `, ${vataInformation.address}`
//                                     : ""}
//                             </p>
//                         </div>

//                         <p
//                             className={`
//                                 text-center
//                                 font-medium
//                                 leading-tight
//                                 text-[#6E1D14]
//                                 ${compact
//                                     ? "mt-1 text-[8px]"
//                                     : "mt-1.5 text-[11px]"
//                                 }
//                             `}
//                         >
//                             যোগাযোগ:{" "}
//                             {vataInformation?.challansPhoneNumber || "-"}
//                         </p>
//                     </div>

//                     <div
//                         className={`
//                             flex
//                             items-center
//                             justify-between
//                             border-y
//                             border-[#6E1D14]
//                             font-semibold
//                             text-[#6E1D14]
//                             ${compact
//                                 ? "mb-1.5 py-1 text-[8px]"
//                                 : "mb-3 py-1.5 text-[10px]"
//                             }
//                         `}
//                     >
//                         <div>
//                             <span className="font-bold">ক্রমিক নং</span>

//                             <span className="mx-1.5 text-[#A9793D]">
//                                 |
//                             </span>

//                             <span>
//                                 {toBanglaNumber(ledger?.serial)}
//                             </span>
//                         </div>

//                         <div>
//                             <span className="font-bold">তারিখ</span>

//                             <span className="mx-1.5 text-[#A9793D]">
//                                 |
//                             </span>

//                             <span>
//                                 {formatBanglaDate({
//                                     date: ledger?.challanDate,
//                                 })}
//                             </span>
//                         </div>
//                     </div>

//                     <div
//                         className={`
//                             border
//                             border-[#E7D8C4]
//                             ${compact ? "mb-2 p-1.5" : "mb-4 p-2.5"}
//                         `}
//                     >
//                         <div
//                             className={`
//                                 grid
//                                 grid-cols-[48px_10px_1fr]
//                                 items-end
//                                 ${compact
//                                     ? "gap-y-1 text-[8px]"
//                                     : "gap-y-2 text-[11px]"
//                                 }
//                             `}
//                         >
//                             <span className="font-bold text-[#6E1D14]">
//                                 নাম
//                             </span>

//                             <span className="text-center font-bold text-[#A9793D]">
//                                 :
//                             </span>

//                             <span
//                                 className={`
//                                     min-h-[18px]
//                                     border-b
//                                     border-dotted
//                                     border-[#B98858]
//                                     font-semibold
//                                     text-[#3A150E]
//                                     ${compact
//                                         ? "leading-[13px]"
//                                         : "leading-[18px]"
//                                     }
//                                 `}
//                             >
//                                 {ledger?.customer?.name || "-"}
//                             </span>

//                             <span className="font-bold text-[#6E1D14]">
//                                 ঠিকানা
//                             </span>

//                             <span className="text-center font-bold text-[#A9793D]">
//                                 :
//                             </span>

//                             <span
//                                 className={`
//                                     min-h-[18px]
//                                     border-b
//                                     border-dotted
//                                     border-[#B98858]
//                                     font-semibold
//                                     text-[#3A150E]
//                                     ${compact
//                                         ? "leading-[13px]"
//                                         : "leading-[18px]"
//                                     }
//                                 `}
//                             >
//                                 {ledger?.customer?.address || "-"}
//                             </span>

//                             <span className="font-bold text-[#6E1D14]">
//                                 মোবাইল
//                             </span>

//                             <span className="text-center font-bold text-[#A9793D]">
//                                 :
//                             </span>

//                             <span
//                                 className={`
//                                     min-h-[18px]
//                                     border-b
//                                     border-dotted
//                                     border-[#B98858]
//                                     font-semibold
//                                     text-[#3A150E]
//                                     ${compact
//                                         ? "leading-[13px]"
//                                         : "leading-[18px]"
//                                     }
//                                 `}
//                             >
//                                 {ledger?.customer?.phoneNumber || "-"}
//                             </span>
//                         </div>
//                     </div>

//                     <table
//                         className={`
//                             w-full
//                             border-collapse
//                             border
//                             border-[#6E1D14]
//                             ${compact ? "text-[8px]" : "text-[10px]"}
//                         `}
//                     >
//                         <thead>
//                             <tr className="bg-[#6E1D14] font-bold text-white">
//                                 <th
//                                     className={`
//                                         border
//                                         border-[#6E1D14]
//                                         text-left
//                                         ${compact
//                                             ? "px-1.5 py-1"
//                                             : "px-2.5 py-1.5"
//                                         }
//                                     `}
//                                 >
//                                     ইটের শ্রেণি
//                                 </th>

//                                 <th
//                                     className={`
//                                         border
//                                         border-[#6E1D14]
//                                         text-center
//                                         ${compact
//                                             ? "px-1.5 py-1"
//                                             : "px-2.5 py-1.5"
//                                         }
//                                     `}
//                                 >
//                                     পরিমাণ
//                                 </th>

//                                 <th
//                                     className={`
//                                         border
//                                         border-[#6E1D14]
//                                         text-center
//                                         ${compact
//                                             ? "px-1.5 py-1"
//                                             : "px-2.5 py-1.5"
//                                         }
//                                     `}
//                                 >
//                                     দর
//                                 </th>

//                                 <th
//                                     className={`
//                                         border
//                                         border-[#6E1D14]
//                                         text-right
//                                         ${compact
//                                             ? "px-1.5 py-1"
//                                             : "px-2.5 py-1.5"
//                                         }
//                                     `}
//                                 >
//                                     মূল্য
//                                 </th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {challanItems.length > 0 ? (
//                                 challanItems.map((item, index: number) => (
//                                     <tr
//                                         key={item?.id || index}
//                                         className={`
//                                             font-semibold
//                                             text-[#3A150E]
//                                             ${index % 2 === 1
//                                                 ? "bg-[#F8F0E6]"
//                                                 : "bg-white"
//                                             }
//                                             ${compact
//                                                 ? "text-[8px]"
//                                                 : "text-[9px]"
//                                             }
//                                         `}
//                                     >
//                                         <td
//                                             className={`
//                                                 border
//                                                 border-[#E7D8C4]
//                                                 ${compact
//                                                     ? "px-1.5 py-0.5"
//                                                     : "px-2.5 py-1"
//                                                 }
//                                             `}
//                                         >
//                                             {item?.class || "-"}
//                                         </td>

//                                         <td
//                                             className={`
//                                                 border
//                                                 border-[#E7D8C4]
//                                                 text-center
//                                                 ${compact
//                                                     ? "px-1.5 py-0.5"
//                                                     : "px-2.5 py-1"
//                                                 }
//                                             `}
//                                         >
//                                             {toBanglaNumber(item?.quantity)}
//                                         </td>

//                                         <td
//                                             className={`
//                                                 border
//                                                 border-[#E7D8C4]
//                                                 text-center
//                                                 ${compact
//                                                     ? "px-1.5 py-0.5"
//                                                     : "px-2.5 py-1"
//                                                 }
//                                             `}
//                                         >
//                                             {toBanglaNumber(item?.rate)}
//                                         </td>

//                                         <td
//                                             className={`
//                                                 border
//                                                 border-[#E7D8C4]
//                                                 text-right
//                                                 font-bold
//                                                 text-[#6E1D14]
//                                                 ${compact
//                                                     ? "px-1.5 py-0.5"
//                                                     : "px-2.5 py-1"
//                                                 }
//                                             `}
//                                         >
//                                             {toBanglaNumber(item?.price)}
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td
//                                         colSpan={4}
//                                         className={`
//                                             border
//                                             border-[#E7D8C4]
//                                             text-center
//                                             font-semibold
//                                             text-[#8C3A22]
//                                             ${compact
//                                                 ? "px-2 py-1"
//                                                 : "px-2 py-2"
//                                             }
//                                         `}
//                                     >
//                                         কোনো পণ্য পাওয়া যায়নি
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>

//                     <div
//                         className={`
//                             flex
//                             justify-end
//                             ${compact ? "mt-1.5" : "mt-3"}
//                         `}
//                     >
//                         <div
//                             className={`
//                                 overflow-hidden
//                                 rounded-md
//                                 border-2
//                                 border-[#6E1D14]
//                                 bg-white
//                                 shadow-sm
//                                 ${compact
//                                     ? "w-[205px]"
//                                     : "w-[270px]"
//                                 }
//                             `}
//                         >
//                             <div
//                                 className={`
//                                     flex
//                                     items-center
//                                     justify-between
//                                     bg-[#6E1D14]
//                                     font-bold
//                                     text-white
//                                     ${compact
//                                         ? "px-2 py-1.5 text-[8px]"
//                                         : "px-3 py-2 text-[10px]"
//                                     }
//                                 `}
//                             >
//                                 <span>মোট</span>

//                                 <span>
//                                     {toBanglaNumber(ledger?.totalPrice)} টাকা
//                                 </span>
//                             </div>

//                             <div
//                                 className={`
//                                     flex
//                                     items-center
//                                     justify-between
//                                     border-b
//                                     border-[#E7D8C4]
//                                     text-[#6E1D14]
//                                     ${compact
//                                         ? "px-2 py-1 text-[7px]"
//                                         : "px-3 py-1.5 text-[9px]"
//                                     }
//                                 `}
//                             >
//                                 <span>জমা</span>

//                                 <span className="font-semibold">
//                                     {toBanglaNumber(ledger?.cash)} টাকা
//                                 </span>
//                             </div>

//                             <div
//                                 className={`
//                                     flex
//                                     items-center
//                                     justify-between
//                                     bg-[#F8F0E6]
//                                     font-bold
//                                     text-[#6E1D14]
//                                     ${compact
//                                         ? "px-2 py-1.5 text-[8px]"
//                                         : "px-3 py-2 text-[10px]"
//                                     }
//                                 `}
//                             >
//                                 <span>বাকি</span>

//                                 <span>
//                                     {toBanglaNumber(ledger?.due)} টাকা
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     <div
//                         className={`
//                             grid
//                             grid-cols-2
//                             gap-16
//                             ${compact ? "mt-5" : "mt-9"}
//                         `}
//                     >
//                         <div className="text-center">
//                             <div
//                                 className={`
//                                     border-t
//                                     border-dotted
//                                     border-[#8C3A22]
//                                     font-semibold
//                                     text-[#6E1D14]
//                                     ${compact
//                                         ? "pt-0.5 text-[7px]"
//                                         : "pt-1.5 text-[9px]"
//                                     }
//                                 `}
//                             >
//                                 কাস্টমারের স্বাক্ষর
//                             </div>
//                         </div>

//                         <div className="text-center">
//                             <div
//                                 className={`
//                                     border-t
//                                     border-dotted
//                                     border-[#8C3A22]
//                                     font-semibold
//                                     text-[#6E1D14]
//                                     ${compact
//                                         ? "pt-0.5 text-[7px]"
//                                         : "pt-1.5 text-[9px]"
//                                     }
//                                 `}
//                             >
//                                 ম্যানেজারের স্বাক্ষর
//                             </div>
//                         </div>
//                     </div>

//                     <div
//                         className={`
//                             border-t
//                             border-[#E7D8C4]
//                             text-center
//                             ${compact ? "mt-1.5 pt-1" : "mt-3 pt-2"}
//                         `}
//                     >
//                         <p
//                             className={`
//                                 font-medium
//                                 italic
//                                 text-[#8C3A22]
//                                 ${compact ? "text-[7px]" : "text-[9px]"}
//                             `}
//                         >
//                             উত্তর চালান অনুযায়ী মালগুলো বুঝিয়ে পাইলাম
//                         </p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default A4LedgerPrint;